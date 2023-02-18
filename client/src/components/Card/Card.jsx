import './Card.css'
import React from "react";
import { Link } from "react-router-dom";


const Card = ({ id, name, image, weight, height, age, temperaments, createInDb, temperament }) => {
    // cuando creo razas en la DB, vienen como array de obj. 
    // asi las connvierto a string (iguales a las de la API)
    let aux = "";
    // if (Array.isArray(temperament)) {
    //     temperament.forEach(t => aux += t.name + ", ");
    //     temperament = aux.slice(0, -2);
    // }


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
                    <div className="cardTemp"> Temperaments:
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
                    </div>
                </div>
            </Link>
        </div>
    );
}


export default Card;