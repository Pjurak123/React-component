import React from "react";
import "./card.css";
import ethereum from "./icon-ethereum.svg";
import clock from "./icon-clock.svg";
import data from "./data";

const equilibrium = require("./image-equilibrium.jpg");
const avatar = require("./image-avatar.png");

function Card(props){
    return(
        <div className="container">
            <div className="card">
                <div className="column1">
                <img src={equilibrium} alt="image" className="equilibrium"/>
                </div>
                <div className="column2">
                    <h2 className="title">Equilibrium #3429</h2>
                    <p className="content">Our Equilibrium collection promotes balance and calm.</p>
                    <div className="data">
                        <div className="left">
                            <img src={ethereum} alt="ethereum" className="ethereum"/>
                            <p>0.041 ETH</p>
                        </div>
                        <div className="right">
                            <img src={clock} alt="clock" className="clock" />
                            <p>3 days left</p>
                        </div>
                    </div>
                    <hr className="line"/>
                    <div className="avatar-info">
                        <img src={avatar} alt="icon" className="avatar" />
                        <p>Creation of <span className="user-name">Jules Wyvern</span></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card;