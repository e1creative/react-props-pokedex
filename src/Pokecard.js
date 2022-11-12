import React from 'react';
import './Pokecard.css';


const Pokecard = ({id, name, image_src, type, base_experience }) => {
    return (
        <div className="Pokecard">
            <p className="Pokecard-title">{name}</p>
            <img className="Pokecard-image" src={image_src} alt={name}/>
            <p className="Pokecard-type">Type: {type}</p>
            <p className="Pokecard-experience">Exp: {base_experience}</p>
        </div>
    )
}

export { Pokecard };