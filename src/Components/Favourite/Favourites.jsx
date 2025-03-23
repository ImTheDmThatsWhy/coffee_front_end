import "./Favourites.css";
import React, { useState, useEffect } from "react";
import api from "./../../api.jsx";

function Favourites() {
    const [Success, setSuccess] = useState("");
    const [loginData, setLoginData] = useState(null);

    const [Account, setAccount] = useState({
        _id: "",
        displayname: "",
        email: "",
        name: "",
        description: "",
    });
    const getAuthorizationToken = () => {
        return {
            headers: {
                Authorization: "Bearer " + localStorage.getItem("token"),
            },
        };
    };
    const fetchLogin = async () => {
        const user_id = localStorage.getItem("user_id");
        if (user_id) {
            await api
                .get("/user/" + user_id, getAuthorizationToken())
                .then((response) => {
                    setLoginData({ ...response.data });
                })
                .catch((err) => console.log(err));
        }
    };
    useEffect(() => {
        fetchLogin();
    }, []);

    useEffect(() => {
        if (loginData) {
            api.get(
                "/account/" + loginData.displayname,
                getAuthorizationToken()
            )
                .then((response) => {
                    setAccount({ ...Account, ...response.data });
                })
                .catch((err) => {
                    console.log(err);
                });
        }
    }, [loginData]);
    const [records, setRecords] = useState([]);

    useEffect(() => {
        if (!Account._id) return;
        api.get("favourite/account/" + Account._id, getAuthorizationToken())
            .then((response) => {
                console.log("favourites: " + response.data);
                setRecords(response.data);
            })
            .catch((err) => console.log(err));
    }, [Account]);

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
