import React from 'react'

function PokemonsDisplay({pokemons, handleNext, handleSeeMore}) {
    return (
        <div className="App">
          <button onClick={handleNext}>Next batch</button>
          {pokemons && pokemons.map
          (pokemon => {
            return (
              <div key={pokemon.name}>
                <h1>{pokemon.name}</h1>
                <button onClick={() => handleSeeMore(pokemon.url )}>See More</button>
              </div>
            )
          })}
        </div>
)}

export default PokemonsDisplay