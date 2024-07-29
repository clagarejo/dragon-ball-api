import './styles.css'

export const CardPerson = ({ name, race, gender, image, ki, maxKi, affiliation }) => {
    return (
        <section className="card">
            <article>
                <div className="card-image">
                    <img src={image} alt={name} />
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
    )
}
