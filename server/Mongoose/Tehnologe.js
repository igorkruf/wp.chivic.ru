let mongoose = require('mongoose')

let tehnologeSchema = new mongoose.Schema({
    //url_logo_tehnologe: String,
    nameTehnologe: String,
    //paretn_service: Array,
    aboutTehnologe: String,
    //minPriceService: { type: Number, default: 0 },
},
    {
        collection: 'alltehnologes',
    }



)
let Tehnologe = mongoose.model('Tehnologe', tehnologeSchema);
module.exports = Tehnologe;


