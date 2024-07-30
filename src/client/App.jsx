import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import axios from "axios";
import "./App.css";
import PokemonsDisplay from "./components/PokemonsDisplay";
import PokeInfoDisplay from "./components/PokeInfoDisplay";

function App() {
  const [pokemons, setPokemons] = useState(null);
  const [pokeInfo, setPokeInfo] = useState(null)
  const [offset, setOffset] = useState(0);
  const [showPokeInfo, setShowPokeInfo] = useState(false)
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

  const handleSeeMore = (url) => {
    axios.get(`/pokemon/?url=${url}`)
    .then(res => {
      console.log(res.data)
      setPokeInfo(res.data)
      setShowPokeInfo(true)
    }) 
    .catch(err)
    console.log(err)
  }

  const handleGoBack = () => {
    setShowPokeInfo(fasle)
  }
  return (
    <div className="App">
      {pokeInfo && showPokeInfo ? (
      <PokeInfoDisplay  pokeInfo={pokeInfo}
        handleGoBack={handleGoBack}/> 
      ) : (
      <PokemonsDisplay
      pokemons={pokemons} 
      handleNext={handleNext} 
      handleSeeMore={handleSeeMore}
      />
      )}
    </div>
  );
}

export default App;
