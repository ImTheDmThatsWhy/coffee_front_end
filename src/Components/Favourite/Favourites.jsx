import "./Favourites.css";
import React, { useState, useEffect } from "react";

function Favourites() {
    const [records, setRecords] = useState([]);

    useEffect(() => {
        fetch("https://buzz-my-day-app-xaqh.onrender.com/coffee")
            .then((response) => response.json())
            .then((data) => setRecords(data))
            .catch((err) => console.log(err));
    }, []);

    return (
        <div className="card-wrapper">
            {records.map((coffee, index) => (
                <div className="card" key={index}>
                    <h3>{coffee.name}</h3>
                    <p>Brand: {coffee.brand}</p>
                    <p>Type: {coffee.type}</p>
                    <p>Description: {coffee.description}</p>
                    <p>Cost: ${coffee.cost}</p>
                    <p>Rating: {coffee.rating}/5</p>
                </div>
            ))}
        </div>
    );
}

export default Favourites;
