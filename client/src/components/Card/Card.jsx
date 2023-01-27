import './Card.css'
import React from "react";
import { Link } from "react-router-dom";


const Card = ({ id, name, image, weight, height, age, temperaments }) => {
    // cuando creo razas en la DB, vienen como array de obj. 
    // asi las connvierto a string (iguales a las de la API)


    return (
        <div className="container">
            <div className="gradientBorder"></div>

            <Link className="card" to={"/dogs/" + id} style={{ textDecoration: 'none' }}>

                <div className="wrapperImg">
                    <img className="imgDog" src={image} alt={name} />
                </div>

                <div className="cardText">
                    <h2 className="cardTitle">{name} Name</h2>
                    <h4 className="cardSub">{weight.metric} kg</h4>
                    <h4 className="cardSub">{height.metric} m</h4>
                    <h4 className="cardSub">{age} years</h4>

                    <div className="temp-wrapper">
                        <p className="cardTemp">{temperaments?.map((string, index) => (
                            <span key={index}>
                                {string}
                                {index !== temperaments.length - 1 ? " " : ""}
                            </span>
                        ))} temps</p>

                    </div>
                </div>
            </Link>
        </div>
    );
}


export default Card;