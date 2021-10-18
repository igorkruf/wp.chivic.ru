let mongoose = require('mongoose');

let interesSchema = new mongoose.Schema({
    url_logo_interes: String,
    name_interes: String,
    id_roditel_razdel_interes: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Interes'
    },
},
    {
        collection: 'allinteres',
    }
);
let Interes = mongoose.model('Interes', interesSchema);
module.exports = Interes;