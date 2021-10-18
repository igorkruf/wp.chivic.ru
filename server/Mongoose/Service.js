let mongoose = require('mongoose')

let serviceSchema = new mongoose.Schema({
    //url_logo_service: String,
    nameService: String,
    //paretn_service: Array,
    aboutService: String,
    minPriceService: { type: Number, default: 0 },
},
    {
        collection: 'allservices',
    }



)
let Service = mongoose.model('Service', serviceSchema);
module.exports = Service;


