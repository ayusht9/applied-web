const container = document.getElementById("pokemon-container");
const API_URL = "https://pokeapi.co/api/v2/pokemon?limit=20";

async function fetchPokemon() {
    const response = await fetch(API_URL);
    const data = await response.json();

    data.results.forEach(pokemon => {
        fetchPokemonDetails(pokemon.url);
    });
}

async function fetchPokemonDetails(url) {
    const res = await fetch(url);
    const pokemon = await res.json();

    createCard(pokemon);
}

function createCard(pokemon) {
    const card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `
    <img src="${pokemon.sprites.front_default}" alt="${pokemon.name}">
    <h3>${pokemon.name}</h3>
    <span class="type">${pokemon.types[0].type.name}</span>
  `;

    container.appendChild(card);
}

fetchPokemon();
