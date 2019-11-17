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
    const collection = db.collection('tracks');

    //find many
    collection.find().toArray((findErr, result) => {
        if (!findErr) {
            const genreAltPop = []
            const genreAltRock = []
            const genreBlues = []
            const genreBrazillian = []
            const genreClassicPop = []
            const genreClassicRock = []
            const genreClassical = []
            const genreCountry = []
            const genreDance = []
            const genreElectronic = []
            const genreFolk = []
            const genreGospel = []
            const genreHipHop = []
            const genreJazz = []
            const genreLatin = []
            const genreMetal = []
            const genreModernPop = []
            const genrePopRock = []
            const genreReggae = []
            const genreRnB = []
            const genreSpoken = []
            const newMap = result.map((e, i) => {
                    if (e.genre.alternative_pop !== 0) {
                        genreAltPop.push(e.isrc)
                    }                                       
                    if (e.genre.alternative_rock !== 0) {
                        genreAltRock.push(e.isrc)
                    }                                       
                    if (e.genre.blues !== 0) {
                        genreBlues.push(e.isrc)
                    }                                       
                    if (e.genre.brazillian !== 0) {
                        genreBrazillian.push(e.isrc)
                    }                                       
                    if (e.genre.classic_pop !== 0) {
                        genreClassicPop.push(e.isrc)
                    }                                       
                    if (e.genre.classic_rock !== 0) {
                        genreClassicRock.push(e.isrc)
                    }                                       
                    if (e.genre.classical !== 0) {
                        genreClassical.push(e.isrc)
                    }                                       
                    if (e.genre.country !== 0) {
                        genreCountry.push(e.isrc)
                    }                                       
                    if (e.genre.dance !== 0) {
                        genreDance.push(e.isrc)
                    }                                       
                    if (e.genre.electronic !== 0) {
                        genreElectronic.push(e.isrc)
                    }                                       
                    if (e.genre.folk !== 0) {
                        genreFolk.push(e.isrc)
                    }                                       
                    if (e.genre.gospel !== 0) {
                        genreGospel.push(e.isrc)
                    }                                       
                    if (e.genre.hiphop !== 0) {
                        genreHipHop.push(e.isrc)
                    }                                       
                    if (e.genre.jazz !== 0) {
                        genreJazz.push(e.isrc)
                    }                                       
                    if (e.genre.latin !== 0) {
                        genreLatin.push(e.isrc)
                    }                                       
                    if (e.genre.metal !== 0) {
                        genreMetal.push(e.isrc)
                    }                                       
                    if (e.genre.modern_pop !== 0) {
                        genreModernPop.push(e.isrc)
                    }                                       
                    if (e.genre.pop_rock !== 0) {
                        genrePopRock.push(e.isrc)
                    }                                       
                    if (e.genre.reggae !== 0) {
                        genreReggae.push(e.isrc)
                    }                                       
                    if (e.genre.rnb !== 0) {
                        genreRnB.push(e.isrc)
                    }                                       
                    if (e.genre.spoken !== 0) {
                        genreSpoken.push(e.isrc)
                    }                                 
                })
            }
        })
    }
})


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