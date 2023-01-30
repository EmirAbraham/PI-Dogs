import React, { useState, useEffect } from 'react';
import { createDogs, getTemperaments, getDogs } from "../../redux/actions/actions.js";
import { useDispatch, useSelector } from "react-redux";
import IconArrow from '../Detail/IconArrow';
import { Link } from "react-router-dom";
import Logo from '../../img/logo.png';
import LinkedIn from '../../img/linkedin.png';
import GitHub from '../../img/github.png';
import './Form.css'


// validador de errores de los inputs
const validateText = (input) => {
    const err = {};

    if (!input.name) err.name = "Name is a required field!";
    else if (input.name.length > 40) err.name = "Name must be under 40 characters.";

    if (!input.height) err.height = 'You must provide a height!'
    else if (input.height < 5) err.height = "The dog must be higher";
    else if (isNaN(input.height)) err.height = "The height must be a number.";

    if (!input.weight) err.weight = "You must provide a weight!";
    else if (input.weight < 1) err.weight = "The breed must weigh more than 1kg.";
    else if (isNaN(input.weight)) err.weight = "The weight must be a number.";

    if (input.age && input.age < 3) err.age = "The life span must be bigger than 3 years.";
    else if (input.age && isNaN(input.age)) err.age = "The life span must be a number.";

    return err;
};



const Creator = () => {
    // dispatch importado
    const dispatch = useDispatch();

    // obtengo el array de temperamentos y el de perros desde redux
    const temperamentState = useSelector(state => state.temperament);
    const dogs = useSelector(state => state.dogs);

    // elementos de los dropdown menu
    const funciones = Array.from(new Set(dogs.map(d => d.funcion)));
    const grupos = Array.from(new Set(dogs.map(d => d.grupo)));

    // tracker de temperamentos de la DB, errores y el estado de los inputs

    const temperamentsState = useSelector(state => state.temperaments)
    const [tempDB, setTempDB] = useState([]);
    const [errors, setErrors] = useState({});
    const [started, setStarted] = useState(true);
    const [input, setInput] = useState({
        name: '',
        weight: '',
        height: '',
        age: '',
        image: '',
        temperament: [],
    });


    useEffect(() => {
        dispatch(getTemperaments())
        dispatch(getDogs())
    }, [dispatch]);


    // handler del submit
    // si no hay errores en los campos obligatorios, reinicia el estado de
    // los inputs, crea una variable para la nueva raza, y la manda por dispatch.
    const handleSubmit = e => {
        e.preventDefault();
        if (!errors.name && !errors.weight && !errors.height
            && !errors.age) {

            const newDog = {
                ...input,
                name: input.name.trim(),
                image: input.image.length ? input.image.trim() : 'https://lacrafta.com/wp-content/uploads/2020/07/Papercraft-Dog-4.jpg',
                temperament: tempDB
            };

            dispatch(createDogs(newDog))
                .then(res => alert(res.payload))

            setTempDB([]);
            setInput({
                name: '',
                weight: '',
                height: '',
                age: '',
                image: '',
                temperament: [],
            });
        }
    }


    // grupo de handlers varios (cambios, selección y remoción de breed en db)
    const handleChange = (e) => {
        setStarted(false);
        setInput({ ...input, [e.target.name]: e.target.value });
        setErrors(validateText({ ...input, [e.target.name]: e.target.value }));
    }

    const handleSelect = (e) => {
        (!tempDB.includes(e.target.value) && tempDB.length < 6) && setTempDB([...tempDB, e.target.value]);
        if (tempDB.length === 6) alert("You can only pick up to six temperaments.")
    }

    const handleDelete = (e) => {
        e.preventDefault();
        setTempDB(tempDB.filter(t => t !== e.target.value));
    }


    return (
        <div className="containerCreator">
            <div className="creatorNav">
                <div className="returnWrapper">
                    <Link to="/home" className="returnCreator">
                        <IconArrow />
                        <p>Return</p>
                    </Link>
                </div>

                <div className="logoCreator">
                    <img src={Logo} alt="logoPerro" />
                </div>
            </div>


            <div className="creatorMenu">
                <h1 className="creatorTitle">Submit a Breed</h1>
                <p className="requiredSub">Underlined fields are required.</p>

                <div className="allFields">
                    <form onSubmit={e => handleSubmit(e)}>
                        <div className="areaInicio">
                            <div className="firstLabels">
                                <label className="createLabel must">Name:</label>
                                <label className="createLabel must">Height:</label>
                                <label className="createLabel must">Weight:</label>
                                <label className="createLabel must">Life span:</label>
                            </div>

                            <div className="firstFields">
                                <input className="createField nameInput" name="name" type="text" value={input.name} onChange={handleChange} placeholder="Breed name" />
                                <div className="wrapperDual">
                                    <input className="createField" name="height" type="text" value={input.height} onChange={handleChange} placeholder="Height" />
                                </div>
                                <div className="wrapperDual">
                                    <input className="createField" name="weight" type="text" value={input.weight} onChange={handleChange} placeholder="Weight" />
                                </div>
                                <div className="wrapperDual">
                                    <input className="createField" name="age" type="text" value={input.age} onChange={handleChange} placeholder="Lifetime" />
                                </div>
                            </div>
                        </div>

                        <div className="areaOpcional">
                            <div className="opLabels">
                                <label className="createLabel">Image:</label>
                                <label className="createLabel pseudoLbl tempLbl">temperament:</label>
                                <label className="createLabel pseudoLbl hiddenLbl">Temps:</label>
                            </div>

                            <div className="opFields">
                                <input className="createField imageField" name="image" type="text" value={input.image} onChange={handleChange} placeholder="Insert URL" />
                                <select className="createBox" defaultValue='default' onChange={handleSelect}>
                                    <option value="default" disabled>Temperament:</option>
                                    {temperamentsState?.map(t => (
                                        <option key={t} className="fieldTemp" value={t}>
                                            {t}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </div>

                        { <ul className="selectedTemps">
                            {tempDB.map((temp, id) => (
                                <li className="selTempItem" key={id}>
                                    <button className="deleteSelectedTemp" value={temp} onClick={e => handleDelete(e)}>x</button>
                                    {temp}
                                </li>
                            ))}
                        </ul> }

                        <div className="breedButton">
                            <button className={Object.keys(errors).length || started ? "breedSubmit submitDisabled" : "breedSubmit"} type="submit">Create Breed</button>
                        </div>
                    </form>
                </div>

                {Object.keys(errors).length
                    ? <ul className="inputErrors">
                        {Object.keys(errors).map(e => {
                            return <li key={e} className="errorItem">{errors[e]}</li>
                        })}
                    </ul> : null}

            </div>


            <div className="footerCreator">
                <div className="creditsCreator">
                    <ul>
                        <li>
                            <a className="bau" href="/about">Emir Abraham, 2023</a>
                        </li>
                        <li>•</li>
                        <li>
                            <a className="creatorFootWrap" href="https://www.linkedin.com/in/emirabraham/"><img width="30" height="30" src={LinkedIn} alt="linkedin" /></a>
                        </li>
                        <li>•</li>
                        <li>
                            <a className="creatorFootWrap" href="https://github.com/EmirAbraham"><img width="30" height="30" src={GitHub} alt="github" /></a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>)
}

export default Creator;