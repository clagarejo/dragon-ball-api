import { useState, useEffect } from "react";
import { CardPerson } from "../Card";

import { getCharacters } from "../../services/getCharacters";

import './styles.css'

export const LoadingPerson = () => {
    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        getCharacters()
            .then(data => {
                setCharacters(data);
            })
            .catch(error => {
                console.error('Error fetching characters:', error);
            });
    }, []);

    return (
        <div className="card-style">
            {characters.map(item => (
                <CardPerson key={item.id} {...item} />
            ))}
        </div>
    )
}
