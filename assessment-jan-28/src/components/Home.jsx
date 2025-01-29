import React, {useEffect, useState} from "react";
import ATMDispencer from "./ATMDispencer";
import Time from "./Time";
import Hobbies from "./Hobbies";
import User from "./User";

const Home = () => {
    const [user, setUser] = useState({_id:""})
    console.log("User state", user)
    const [hobbies, setHobbies] = useState([]);


    const fetchHobbies = () => {
        console.log("fetching hobbies for user", user)
        fetch(`http://localhost:3001/hobby/api/getHobbies/${user? user._id: ""}`, {})
            .then(async (res) => {
                console.log("response from fetching hobbies", res);
                const hobbies = await res.json();
                setHobbies(prevhobbies => hobbies);
            })
            .catch((err) => {
                console.log(err);
            })
    }

    const addHobby = (event) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const hobbies = {
            userId: user._id,
            name: formData.get("name"),
            description: formData.get("description")
        }
        const request = new Request("http://localhost:3001/hobby/api/saveHobby", {
            method: "POST",
            body: JSON.stringify(hobbies),
            headers: {
                "Content-Type": "application/json"
            }
        })
        fetch(request)
            .then((res) => {
                console.log(res);
            })
            .catch((err) => {
                console.log(err);
            })
    }

    let handleLogin = (event) => {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);
        let user = {
            username: formData.get("username"),
            password: formData.get("password"),
            email: formData.get("email"),
            phone: formData.get("phone")
        }

        console.log("saving user", user);
        const request = new Request("http://localhost:3001/user/api/signup", {
            method: "POST",
            body: JSON.stringify(user),
            headers: {
                "Content-Type": "application/json"
            }
        });
        console.log("request", request);
        fetch(request)
            .then( async (res) => {
                console.log(res);
                let user = await res.json();
                console.log(user);
                setUser(prevUser => {return user;});
            })
            .catch((err) => {
            console.log(err);
        })

        event.currentTarget.reset();
    }
    return (
        <>
            <h1>Question 1</h1>
            <Time />
            <br/>
            <h1>Question 2</h1>
            <ATMDispencer />
            <br/>
            <h1>Question 3</h1>
            <User handleLogin={handleLogin} />
            <button onClick={fetchHobbies}>Fetch Hobbies</button>
            <Hobbies addHobby = { addHobby } hobbies={ hobbies } user = { user } />
        </>
    )
};

export default Home;