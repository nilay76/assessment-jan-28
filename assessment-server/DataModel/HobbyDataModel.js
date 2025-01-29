let mongoose = require('mongoose');
Schema = mongoose.Schema;

mongoose.connect("mongodb://127.0.0.1/mernstack19");

let hobbySchema = new Schema({
    userId: {type: String, required: true},
    name: {type: String, required: true},
    description: {type: String, required: true}
}, {
    versionKey: false
})

let HobbyModel = mongoose.model("hobby", hobbySchema);
module.exports = HobbyModel;