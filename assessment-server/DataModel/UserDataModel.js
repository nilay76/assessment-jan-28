let mongoose = require('mongoose');
schema = mongoose.Schema;

mongoose.connect("mongodb://127.0.0.1/mernstack19");

let userSchema = new schema(
    {
        username: { type: String, required: true },
        password: { type: String, required: true },
        email: { type: String, required: true},
        phone: Number
    },
    {
        versionKey: false
    }
)

let UserModel = mongoose.model("user", userSchema);
module.exports = UserModel;