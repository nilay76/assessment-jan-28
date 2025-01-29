import React from "react";
import { useState } from "react";

export default function Time(props) {
    const [time, setTime] = useState(new Date());
    const formattedTime = (time) =>{
        const hours = time.getHours().toString().padStart(2, "0");
        const minutes = time.getMinutes().toString().padStart(2, "0");
        const seconds = time.getSeconds().toString().padStart(2, "0");
        return `${hours}:${minutes}:${seconds}`;
    }

    const updateTime =() => { setTimeout(() => {
       setTime(new Date())
    }, 1000)}

    updateTime();
    return (
        <>
            <div className="App">
                <h1>Time</h1>
                <p>{formattedTime(time)}</p>
            </div>

        </>
    )
}