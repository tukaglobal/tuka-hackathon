const MongoClient = require('mongodb').MongoClient;

// Connect to the db
MongoClient.connect("mongodb://localhost:27017/tracks", function(err, tracks) {
  if(!err) {
    console.log("We are connected");
  }
});

getTracks = async () => {
    try {
      const responseGetTracks = await fetch('http://localhost:3000/tracks', {
        credentials: "include",
        method: 'GET'
      })
      if (responseGetTracks.status !== 200) {
        throw Error('404 from server')
      } 
      const jsonTracks = await responseGetTracks.json();
      console.log(jsonTracks.data, 'jsonTracks.data')
      this.setState({
        genres: [...jsonTracks.data]
      }, () => {
        console.log(this.state.genres, 'tracks-genres')
      })
    } catch (error) {
      console.log(`error: ${error}`)
      return error
    }
  }