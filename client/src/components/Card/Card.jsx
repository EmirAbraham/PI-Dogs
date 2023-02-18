import './Card.css'
import React from "react";
import { Link } from "react-router-dom";


const Card = ({ id, name, image, weight, height, age, temperaments, createInDb, temperament }) => {

    return (
        <div className="container">
            <div className="gradientBorder"></div>

            <Link className="card" to={"/dogs/" + id} style={{ textDecoration: 'none' }}>

                <div className="wrapperImg">
                    <img className="imgDog" src={image} alt={name} />
                </div>

                <div className="cardText">
                    <h2 className="cardTitle">{name}</h2>
                    <h4 className="cardSub">Weight: {weight} kg</h4>
                    <h4 className="cardSub">Height: {height} cm</h4>
                    <h4 className="cardSub">Age: {age}</h4>
                    <h4 className="cardSub"> Temperaments:
                        {createInDb ?
                            temperaments?.map((string, index) => (
                                <p className="cardTemp" key={string}>
                                    {string}
                                    {index !== temperaments.length - 1 ? " " : ""}
                                </p>
                            )) :
                            temperament?.map((string, index) => (
                                <p className="cardTemp" key={string}>
                                    {string}
                                    {index !== temperament.length - 1 ? " " : ""}
                                </p>
                            ))
                        }
                    </h4>
                </div>
            </Link>
        </div>
    );
}


export default Card;