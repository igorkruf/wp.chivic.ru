let mongoose = require('mongoose')


let RazdelInteresSchema = new mongoose.Schema({
    url_logo_razdel_interes: String,
    name_razdel_interes: String,

},
    {
        collection: 'allrazdelinteres',
    }


)
let RazdelInteres = mongoose.model('RazdelInteres', RazdelInteresSchema);
module.exports = RazdelInteres;