const { loadYaml, loadJSON, buildAPIClient } = require('../builder.js');

module.exports = {
  ...buildAPIClient({
    schema: loadYaml(__dirname + "/swagger.yml"),
    baseURL: 'https://hackathon.umusic.com/prod/v1',
    extraHeaders: {
      'x-api-key': process.env.UMG_API_KEY
    }
  }),
  ...buildAPIClient({
    schema: loadJSON(__dirname + "/streaming.json"),
    baseURL: 'https://hackathon.umusic.com/prod',
    extraHeaders: {
      'x-api-key': process.env.UMG_API_KEY
    },
    type: 'text'
  })
}

