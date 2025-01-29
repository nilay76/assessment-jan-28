const express = require("express");
const router = express.Router({strict:true, caseSensitive:true});

const userDataModel = require("../DataModel/UserDataModel");

router.post("/api/signup", (req, res) => {

    console.log("signing in", req.body);
    let user = req.body;
    console.log("user", user);

    userDataModel.findOne({username: req.body.username}).then((userFromDB) => {
       if(userFromDB) {
           res.send(userFromDB);
       } else {
           let userSchemaObj = new userDataModel(req.body);

           userSchemaObj.save().then((newUser) => {
               console.log("successful signup", newUser);
               res.send(newUser);
           }).catch(err => {
               console.log("error signing up ", err);
               res.send("error while signing up");
           })
       }
    }).catch((err) => {
        console.log("error fetching user, ", user);
        res.send("error fetching user");
    })
})

router.get("/api/users", (req, res) => {

    userDataModel
        .find()
        .then((users) => {
            res.send(users);
        })
        .catch((err) => {
            console.log("errors fetching users, ", err);
            res.send("error fetching users");
        })
})

module.exports = router;