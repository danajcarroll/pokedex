// Using fetch api to get information about the pokemon
const fetchPokemon = () => {
    const url = 'https://pokeapi.co/api/v2/pokemon/1';
    fetch(url)
        .then( res => {
            return res.json();
        })
        .then ( data => {
            console.log(data);
        })
};

fetchPokemon();