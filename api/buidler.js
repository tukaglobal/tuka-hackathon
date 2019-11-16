const fetch = require("node-fetch");
const { URLSearchParams } = require("url");
const fs = require("fs");
const yaml = require("yaml");

const knownMethods = new Set(["get", "post", "put"]);

const isKnownMethod = method => knownMethods.has(method.toLowerCase());

function loadYaml(path) {
  return yaml.parse(fs.readFileSync(path).toString("utf8"));
}

function loadJSON(path) {
  return JSON.parse(fs.readFileSync(path).toString("utf8"));
}

function camelize(...parts) {
  return parts
    .map((p, i) => (i ? p[0].toUpperCase() + p.substr(1) : p))
    .join("");
}

const format = (string, values) =>
  string.replace(/\{([^}]+)\}/g, (_, match) => values[match]);

function buildAPIClient({
  schema,
  baseURL,
  extraHeaders = {},
  extraParams = {},
  debug = false,
  type = "json"
} = {}) {
  console.log('building api client...');
  if (!baseURL && schema.servers) {
    baseURL = schema.servers[0].url;
  }

  let client = {
    _docs: []
  };

  for (let [path, endpoint] of Object.entries(schema.paths)) {
    debug && console.log(path, endpoint);
    for (let [method, signature] of Object.entries(endpoint)) {
      if (!isKnownMethod(method)) {
        continue;
      }
      
      let methodName =
        signature.operationId ||
        camelize(
          method,
          path
            .split("/")
            .pop()
            .split(".")[0]
        );
      
      let doc = {
        name: methodName,
        path: baseURL + path,
        method,
        arguments: []
      };
      
      if (signature.requestBody) {
        doc.arguments.push({
          name: 'body',
          required: !!signature.requestBody.required
        });
      }
      
      if (signature.parameters) {
        for (let param of signature.parameters) {
          doc.arguments.push({
            name: param.name,
            required: !!param.required,
            ...(param.type && { type: param.type }),
            description: param.description
          });
        }
      }
      
      client._docs.push(doc);
      
      client[methodName] = async function(params) {
        debug && console.log(methodName, params);
        let query = {};
        params = Object.assign({}, extraParams, params);
        let body;
        if (signature.requestBody) {
          body = params.body;
          if (!body && signature.requestBody.required) {
            throw "missing required request body";
          }
        }
        if (signature.parameters) {
          for (let param of signature.parameters) {
            let name = param.name;
            if (param.required && !(name in params)) {
              throw "missing required parameter " + name;
            }
            if (name in params) {
              if (param.in === "query") {
                query[name] = params[name];
              }
            }
          }
        }
        let url =
          baseURL +
          format(path, params) +
          "?" +
          new URLSearchParams(query).toString();
        console.log(url);
        return fetch(url, {
          method,
          headers: Object.assign(
            {
              "content-type": "application/json"
            },
            extraHeaders
          ),
          ...(body && { body: JSON.stringify(body) })
        }).then(r => r[type]());
      };
    }
  }
  return client;
}

module.exports = {
  buildAPIClient,
  loadJSON,
  loadYaml
};
