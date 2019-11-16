const { loadYaml, buildAPIClient } = require('../builder.js.js');

const KEY = process.env.DOLBY_API_KEY;

module.exports = {
  dynamics: buildAPIClient({
    schema: loadYaml(__dirname + "/dynamics.yml"),
    extraHeaders: {
      'x-apikey': KEY
    }
  }),
  loudness: buildAPIClient({
    schema: loadYaml(__dirname + "/loudness.yml"),
    extraHeaders: {
      'x-apikey': KEY
    }
  }),
  music: buildAPIClient({
    schema: loadYaml(__dirname + "/music.yml"),
    extraHeaders: {
      'x-apikey': KEY
    }
  }),
  noise: buildAPIClient({
    schema: loadYaml(__dirname + "/noise.yml"),
    extraHeaders: {
      'x-apikey': KEY
    }
  }),
  sibilance: buildAPIClient({
    schema: loadYaml(__dirname + "/sibilance.yml"),
    extraHeaders: {
      'x-apikey': KEY
    }
  }),
  tone: buildAPIClient({
    schema: loadYaml(__dirname + "/tone.yml"),
    extraHeaders: {
      'x-apikey': KEY
    }
  }),
  upmix: buildAPIClient({
    schema: loadYaml(__dirname + "/upmix.yml"),
    extraHeaders: {
      'x-apikey': KEY
    }
  }),
  virtualize: buildAPIClient({
    schema: loadYaml(__dirname + "/virtualize.yml"),
    extraHeaders: {
      'x-apikey': KEY
    }
  })
};
