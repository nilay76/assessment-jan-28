const express = require('express');
const router = express.Router({strict:true, caseSensitive:true});

const HobbyModel = require ("../DataModel/HobbyDataModel");

router.post("/api/saveHobby", (req, res) => {
    let hobby = req.body;
    console.log(hobby);

    let HobbySchema = new HobbyModel(hobby);

    HobbySchema
        .save()
        .then((savedHobby) => {
            console.log("saved Hobby");
            res.send(savedHobby);
        })
        .catch((err) => {
            console.log("error saving product", err);
            res.send("error saving hobby")
        })
})

router.get("/api/getHobbies/:userId", (req, res) => {
    let userId = req.params.userId;
    console.log("userId", userId);

    let hobby = HobbyModel
        .find({userId: userId})
        .exec()
        .then((hobby) => {
            console.log("hobby", hobby);
            res.send(hobby);
        })
        .catch((err) => {
            console.log("error fetching hobby", err);
            res.status(404).send("No hobby found");
        });

    console.log(hobby);
})

module.exports = router;