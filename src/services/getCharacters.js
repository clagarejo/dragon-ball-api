export const getCharacters = () => {
    const baseUrl = 'https://dragonball-api.com/api/characters?limit=12';

    return fetch(baseUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            return data.items; // Devolver los datos para que la promesa los resuelva
        })
        .catch(error => {
            console.error('Fetch error:', error);
            throw error; // Lanzar el error para que el llamador pueda manejarlo
        });
};
