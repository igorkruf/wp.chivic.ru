let mongoose = require('mongoose')

let testserviceSchema = new mongoose.Schema({
    nameService: String,
    ageService: { type: Number, default: 23 },
    aboutService: String
},
    {
        collection: 'allservices',
    }



)
let testService = mongoose.model('testService', testserviceSchema);
module.exports = testService;


