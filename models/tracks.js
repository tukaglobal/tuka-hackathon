function MongoDao(mongoUri, dbname) {
    let _this = this;
    let options = {
        useNewUrlParser: true
    };
    _this.mongoClient = new MongoClient(process.env.MONGODB_URI, options);
    return new Promise((resolve, reject) => {
        _this.mongoClient.connect((err, client) => {
            assert.equal(err, null);
            console.log("mongo client successfully connected")
            _this.dbConnection = _this.mongoClient.db(tuka);
            resolve(_this)
        })
    })
    
}



// const mongoose = require('mongoose');

// const TracksSchema = new mongoose.Schema({
//     isrc: {type: String, required: true},
//     talent_name: String,
//     genres: {
        // alternative_pop: Boolean,
        // alternative_rock: Boolean,
        // blues: Boolean,
        // brazillian: Boolean,
        // classic_pop: Boolean,
        // classic_rock: Boolean,
        // classical: Boolean,
        // country: Boolean,
        // dance: Boolean,
        // electronic: Boolean,
        // folk: Boolean,
        // gospel: Boolean,
        // hiphop: Boolean,
        // jazz: Boolean,
        // latin: Boolean,
        // metal: Boolean,
        // modern_pop: Boolean,
        // pop_rock: Boolean,
        // reggae: Boolean,
        // rnb: Boolean,
        // spoken: Boolean
//     }
// })

// const Tracks = mongoose.model('Tracks', TracksSchema);

// module.exports = Tracks;