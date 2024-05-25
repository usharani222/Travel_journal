import React from "react";
// import img from "../images/image.png";
import loc from "../images/loc.png";
export default function Card(props) {
    return(
        <div className="card">
            <div className="left">
                <img src={require(`../images/${props.img}`)} alt="image" className="image" />
            </div>
            <div className="right">
                <div className="top">
                    <img src={loc} alt="location" />
                    <p>{props.location}</p>
                    <a href="{props.map}">View on Google Maps</a>
                </div>
                <div className="mid">
                    <h1>{props.title}</h1>
                    <p>{props.date}</p>
                </div>
                <div className="down">
                    <p>{props.description}</p>
                </div>
            </div>
        </div>
    )
}