import React, { useEffect, useState } from "react";
import { useParams, Link, useHistory  } from "react-router-dom";
import RandomDog from "../RandomDog/RandomDog.jsx";
// import Updater from "../Updater/Updater.jsx";
import Loader from "../Loader/Loader.jsx";
import Logo from '../../img/logo.png';
import LinkedIn from '../../img/linkedin.png';
import GitHub from '../../img/github.png';
import IconArrow from './IconArrow'
import axios from 'axios'
import './Detail.css'

const Detail = () => {
    const { id } = useParams();
    const [doggys, setDoggys] = useState({}); 

    useEffect(() => {
        async function fetchData() {
          try {
            const response = await axios.get(`http://localhost:3001/dogs/${id}`);
            const dog = response.data;
            if (dog.id) {
                setDoggys({
                id: dog.id,
                name: dog.name,
                weight: dog.weight,
                image: dog.image,
                height: dog.height,
                age: dog.age,
                temperament: dog.temperament,
              });
            } else {
              alert("Doggy is not available");
            }
          } catch (err) {
            alert(err.message);
          }
        }
        fetchData();
      }, [id]);

    return (
        <div className="detail">
            <div className="detNav">
                <div className="detWrapperReturn">
                    <Link to="/home" className="return">
                        <IconArrow />
                        <p>Return</p>
                    </Link>
                </div>

                <div className="logoDet">
                    <img src={Logo} alt="logoPerro"/>
                </div>
                
                <div className="randomDet">
                    <RandomDog />
                </div>
            </div>
           
            { Object.keys(doggys).length && typeof doggys !== 'string' ? (
                <div className="detailBody">
                    <div className="detVisual">
                        <h1 className="detTitulo pseudoTitle1">{doggys.name}</h1>
                        <img src={doggys.image} alt={doggys.name + ' img'} /> 
                    </div>

                    <div className="detDescripcion">
                        <div className="detText">
                            <h1 className={(doggys.name.length > 20) ? "detTituloGrande pseudoTitle2" : "detTitulo pseudoTitle2"}>{doggys.name}</h1>
                            <div className="itemDet"><span className="detCat">Height: </span><p className="holder">{doggys.height} cm</p></div>
                            <div className="itemDet"><span className="detCat">Weight: </span><p className="holder">{doggys.weight} kg</p></div>
                            {doggys.age && doggys.age[0] !== ' ' ? <div className="itemDet"><span className="detCat">Age: </span><p className="holder">{doggys.age}</p></div> : null}
                        </div>

                        <div className="detTemps">
                            {/* dogs api */}
                            { 
                                Array.isArray(doggys.temperament) && doggys.temperament.length
                                ? (doggys.temperament.length ? <div>Temperaments:<p className="temp">{doggys.temperament?.map(temp => <span>{temp}, </span>)}</p></div> : null)
                                : null
                            }
                        </div>
                    </div>
                </div>
                
            ) : null}

            <div className="footerDet">
                <div className="credits">
                    <ul>
                        <li>
                            <a className="bau" href="/about">Emir Abraham, 2023</a>
                        </li>
                        <li>
                            <ul>
                                <li>•</li>
                            </ul>
                        </li>
                        <li>
                            <a href="https://www.linkedin.com/in/emirabraham/"><img width="30" height="30" src={LinkedIn} alt="linkedin"/></a>
                        </li>
                        <li>
                            <ul>
                                <li>•</li>
                            </ul>
                        </li>
                        <li>
                            <a href="https://github.com/EmirAbraham"><img width="30" height="30" src={GitHub} alt="github"/></a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>       
    )
}

export default Detail;