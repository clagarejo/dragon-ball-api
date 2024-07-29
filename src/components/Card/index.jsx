import { useState } from 'react';
import './styles.css';

export const CardPerson = ({ name, race, gender, image, ki, maxKi, affiliation }) => {
    const [loaded, setLoaded] = useState(false);

    const handleImageLoad = () => {
        setLoaded(true);
    };

    return (
        <section className="card">
            <article>
                <div className="card-image">
                    <img 
                        src={image} 
                        alt={name} 
                        onLoad={handleImageLoad} 
                        className={loaded ? 'loaded' : ''} 
                    />
                </div>

                <div className="card-content">
                    <h1>{name}</h1>
                    <p>{race} - {gender}</p>
                    <p>Base Ki: {ki}</p>
                    <p>Total Ki: {maxKi}</p>
                    <span>Affiliation: {affiliation}</span>
                </div>
            </article>
        </section>
    );
};
