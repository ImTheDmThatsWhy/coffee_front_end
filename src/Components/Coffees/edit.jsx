import "./edit.css";
import React, { useState, useEffect } from "react";
import api from "./../../api.jsx";

const AdminCoffee = () => {
    const [Coffee, setCoffee] = useState({
        name: "",
        Brand: "",
        Type: "",
        Description: "",
        Rating: "",
    });

    return (
        <main>
            <div className="coffeecontainer">
                <div className="secondcontainer">
                    <div className="headercoffee">Admin Page</div>
                    <p className="welcome">Welcome Admin</p>
                </div>
                <div>
                    <div className="form">
                        <label id="label">name:</label>
                        <input
                            className="input"
                            type="text"
                            value={Coffee.name}
                            onChange={(e) =>
                                setCoffee({
                                    coffee: e.target.value,
                                })
                            }
                        ></input>
                    </div>
                    <div className="form">
                        <label id="label">brand:</label>
                        <input
                            id="brand"
                            className="input"
                            value={Coffee.brand}
                            onChange={(e) =>
                                setCoffee({
                                    ...Coffee,
                                    brand: e.target.value,
                                })
                            }
                        ></input>
                    </div>
                    <div className="form">
                        <label id="label">type:</label>
                        <input
                            id="type"
                            className="input"
                            value={Coffee.type}
                            onChange={(e) =>
                                setCoffee({
                                    ...Coffee,
                                    type: e.target.value,
                                })
                            }
                        ></input>
                    </div>
                    <div className="form">
                        <label id="label">rating:</label>
                        <input
                            id="rating"
                            className="input"
                            value={Coffee.rating}
                            onChange={(e) =>
                                setCoffee({
                                    ...Coffee,
                                    rating: e.target.value,
                                })
                            }
                        ></input>
                    </div>
                    <div className="form">
                        <label id="label">rating:</label>
                        <input
                            id="rating"
                            className="input"
                            value={Coffee.rating}
                            onChange={(e) =>
                                setCoffee({
                                    ...Coffee,
                                    rating: e.target.value,
                                })
                            }
                        ></input>
                    </div>
                    <div className="form">
                        <label id="label">cost:</label>
                        <input
                            id="cost"
                            className="input"
                            value={Coffee.cost}
                            onChange={(e) =>
                                setCoffee({
                                    ...Coffee,
                                    cost: e.target.value,
                                })
                            }
                        ></input>
                    </div>
                    <div className="Submit_container">
                        <div className="submit">
                            <button className="button">Submit</button>
                        </div>
                        <div className="submit">
                            <button className="button">Edit</button>
                            <button className="button">Delete</button>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};
export default AdminCoffee;
