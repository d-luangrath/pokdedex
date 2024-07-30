import React from 'react'

function PokeInfoDisplay({pokeInfo, handleGoBack}) {
  return (
    <div>
    <img src={pokeInfo.sprites['front_shiny']}></img>
    <h2>Name: {pokeInfo.name}</h2>
    <h4>Height: {pokeInfo.height}</h4>
    <h4>Weight: {pokeInfo.weight}</h4>
    <button onClick={handleGoBack}>Go Back</button>
    </div>
  )
}

export default PokeInfoDisplay