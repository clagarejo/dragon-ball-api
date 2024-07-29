import React, { useState, useEffect } from "react";
import { CardPerson } from "../Card";
import { getCharacters } from "../../services/getCharacters";
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'; // Importar iconos de flechas
import './styles.css';

export const LoadingPerson = () => {
    const [characters, setCharacters] = useState([]);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);

    const loadCharacters = async (page) => {
        setLoading(true);
        try {
            const data = await getCharacters(page);
            setCharacters(data);
        } catch (error) {
            console.error('Error fetching characters:', error);
        }
        setLoading(false);
    };

    useEffect(() => {
        loadCharacters(page);
    }, [page]);

    const handlePreviousPage = () => {
        if (page > 1) {
            setPage(page - 1);
        }
    };

    const handleNextPage = () => {
        setPage(page + 1);
    };

    return (
        <div className="container">
            <div className="pagination-controls">
                <button onClick={handlePreviousPage} disabled={page === 1} className="pagination-button">
                    <FaArrowLeft className="pagination-icon" />
                </button>
                <button onClick={handleNextPage} className="pagination-button">
                    <FaArrowRight className="pagination-icon" />
                </button>
            </div>
            {loading ? (
                <div className="loader-container">
                    <div className="spinner"></div>
                </div>
            ) : characters.length > 0 ? (
                <div className="card-style">
                    {characters.map(item => (
                        <CardPerson key={item.id} {...item} />
                    ))}
                </div>
            ) : (
                <p>No characters found.</p>
            )}
        </div>
    );
}
