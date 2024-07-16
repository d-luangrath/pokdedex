import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import axios from "axios";
import "./App.css";

function App() {
  const [pokemons, setPokemons] = useState(null);
  const [offset, setOffset] = useState(0);
  // invoke useEffect at the top level. It needs 2 args(cb, dependency array)
  
  useEffect(() => {
    // code to be executed
    axios.get(`https://pokeapi.co/api/v2/pokemon/?offset=${offset}`)
    .then((res) => {
      console.log(res.data)
      setPokemons(res.data.results)
    })
    .catch((err) => console.log(err))
    // clean up function for unmount(optional)
    return () => {}

  }, [offset]) // dependency array will control how and when the info is fetched

  const handleNext = () => {
    setOffset(offset + 20)
  }
  return (
    <div className="App">
      <button onClick={handleNext}>Next batch</button>
      {pokemons && pokemons.map
      (pokemon => {
        return (
          <div key={pokemon.name}>
            <h1>{pokemon.name}</h1>
            <a href={pokemon.url}>
            <p>Click me</p></a>
          </div>
        )
      })}
    </div>
  );
}

export default App;
