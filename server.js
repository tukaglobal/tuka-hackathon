// init project
const express = require("express");
const fs = require('fs');
const app = express();
const utils = require('./utils');

const api = require('./api');

app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function(request, response) {
  response.sendFile(__dirname + "/views/index.html");
});

app.get("/docs", async (req, res) => {
  res.type('json');
  res.end(
    JSON.stringify(
      Object.entries(api).map(([provider, api]) => {
        if (provider === "dolby") {
          return {
            provider,
            services: Object.entries(api).map(([section, api]) => {
              return {
                name: section,
                docs: api._docs
              }
            })
          };
        }
        if (api._docs) {
          return {
            provider,
            docs: api._docs
          };
        }
      }).filter(a => !!a),
      null, 2
    )
  );
});

// test routes
app.get("/artist/search", async (req, res) => {
  try {
    let result = await api.umg.searchArtists({ q: req.query.q });
    res.json(result);
  } catch (e) {
    console.error(e);
    res.json({ error: e });
  }
});

app.get("/artist/:id", async (req, res) => {
  try {
    let result = await api.umg.getOneArtist({ artist_id: req.params.id });
    res.json(result);
  } catch (e) {
    console.error(e);
    res.json({ error: e });
  }
});

app.get("/bandsintown/search", async (req, res) => {
  try {
    let result = await api.bandsintown.search({ term: req.query.q, entities:[{type: 'event'}] });
    res.json(result);
  } catch (e) {
    console.error(e);
    res.json({ error: e });
  }
});

app.get('/dolby/result', (req, res) => {
  res.type('audio/mpeg');
  res.end(fs.readFileSync('/tmp/result.mp3'));
});

app.put('/dolby/result', utils.fileUpload, (req, res) => {
  fs.writeFileSync('/tmp/result.mp3', req.fileUpload);
  res.end('OK');
});

app.get('/dolby/test', async (req, res) => {
  let result = await api.dolby.tone.postProcessTone({
    body: {
      input: "https://cdn.glitch.com/e7cc50a5-c542-4e8d-9b77-a564b6bd748d%2Fglitchtheme.mp3?v=1573199260149",
      output: `https://${process.env.PROJECT_DOMAIN}.glitch.me/dolby/result`
    }
  });
  res.json(result);
});

// listen for requests :)
const listener = app.listen(process.env.PORT, function() {
  console.log("Your app is listening on port " + listener.address().port);
});
