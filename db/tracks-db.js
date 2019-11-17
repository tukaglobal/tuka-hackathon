// var db = require('mongodb').Db,
//     MongoClient = require('mongodb').MongoClient,
//     Server = require('mongodb').Server,
//     ReplSetServers = require('mongodb').ReplSetServers,
//     ObjectID = require('mongodb').ObjectID,
//     Binary = require('mongodb').Binary,
//     GridStore = require('mongodb').GridStore,
//     Grid = require('mongodb').Grid,
//     Code = require('mongodb').Code,
//     BSON = require('mongodb').pure().BSON,
//     assert = require('assert');
const MongoClient = require('mongodb').MongoClient;

// Connect to the db
MongoClient.connect("mongodb://localhost:27017/tracks", function(err, client) {
  if(!err) {
      const db = client.db('tracks')
    console.log("We are connected");
    console.log(db, 'db')
    const collection = db.collection('tracks');
    const findOneTrack = collection.findOne({"isrc": "USDW10500170"}, (findErr, result) => {
        if (findErr) throw findErr;
        console.log(result, 'result')
    })
    // console.log(collection, 'mongo collection')
    console.log(findOneTrack, 'find one!')
  }
});


// getTracks = async ( => {
//     db.tracks.find()
// })

// getTracks = async () => {
//     try {
//       const responseGetTracks = await fetch('http://localhost:3000/tracks', {
//         credentials: "include",
//         method: 'GET'
//       })
//       if (responseGetTracks.status !== 200) {
//         throw Error('404 from server')
//       } 
//       const jsonTracks = await responseGetTracks.json();
//       console.log(jsonTracks.data, 'jsonTracks.data')
//       this.setState({
//         genres: [...jsonTracks.data]
//       }, () => {
//         console.log(this.state.genres, 'tracks-genres')
//       })
//     } catch (error) {
//       console.log(`error: ${error}`)
//       return error
//     }
//   }