// Using fetch api to get information about the pokemon
const fetchPokemon = () => {
// empty array of promises
const promises = [];

// for each one of our requests, we push that promises INTO our array of promises
    for (i = 1; i <= 150; i++){
    const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
    promises.push(fetch(url).then((res) => res.json()));
}
// promise.all will let all of these asyncronous calls run in parallel, same time instead of one after the other
Promise.all(promises).then((results) => {
    const pokemon = results.map((data) => ({
        name: data.name,
        id: data.id,
        image: data.sprites['front_default'],
        type: data.types.map((type) => type.type.name).join(', ')
    }));
    displayPokemon(pokemon);
});
};

const displayPokemon = (pokemon) => {
    console.log(pokemon);
}

fetchPokemon();