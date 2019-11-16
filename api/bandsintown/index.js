const { URLSearchParams } = require("url");
const fetch = require("node-fetch");
const baseURL = "https://search.bandsintown.com/";

function search(object) {
  const params = {
    query: JSON.stringify(object)
  };
  let url = baseURL + "search" + "?" + new URLSearchParams(params).toString();
  console.log(url);
  return fetch(url, {
    method: "get",
    headers: {
      "content-type": "application/json",
      "x-api-key": process.env.BANDSINTOWN_API_KEY
    }
  }).then(r => r.json());
}

module.exports = {
  search
};
