// Promise<Response>, é assíncrono

// try {

// } catch(error) {

// } finally {

// }

function convertPokemonTypesToLi(pokemonTypes) {
    return pokemonTypes.map((typeSlot) => `<li class="type">${typeSlot.type.name}</li>`) 
}

function convertPokemonToLi(pokemon) {
    return `
    <li class="pokemon ${pokemon.type}">
                <span class="number">#${pokemon.number}</span>
                <span class="name">${pokemon.name}</span>
                <div class="details">
                    <ol class="types">
                        ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
                    </ol>
                <img src="${pokemon.photo}"
                    alt="${pokemon.name}">
                </div>
            </li>
    `;
}

const pokemonList = document.querySelector('#pokemonList');


pokeApi.getPokemons().then((pokemons = []) => {

    pokemonList.innerHTML += pokemons.map(convertPokemonToLi).join('');

    // const listItems = [];
    // for (let i = 0; i < pokemons.length; i++) {
    //     const pokemon = pokemons[i];
    //     listItems.push(convertPokemonToLi(pokemon));
    // }
    // console.log(listItems);
})

