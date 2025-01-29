import React from "react";
import { useState, useEffect } from "react";

export default function Hobbies(props) {

    const user = props.user ? props.user : {_id:""};
    const addHobby = props.addHobby;
    const hobbies = props.hobbies ? props.hobbies : [];

    return (
        <>
            <form onSubmit={addHobby} method="POST">
                <label htmlFor="userId"><input id="userId" name="userId" hidden="hidden" value={user._id}/></label>
                <label htmlFor="name">Name<input id="name" name="name" required type="text"/></label>
                <label htmlFor="description">Description<input id="description" name="description" required type="text"/></label>
                <button type="submit">Add Hobby</button>
            </form>
            <table>
                <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                <th>Description</th>
            </tr>
            </thead>
            <tbody id="hobbies">
            {hobbies.map((item) => (
                <tr key={item._id}>
                    <td>{item._id}</td>
                    <td>{item.name}</td>
                    <td>{item.description}</td>
                </tr>
            ))}
            </tbody>
            </table>
        </>
    )
}