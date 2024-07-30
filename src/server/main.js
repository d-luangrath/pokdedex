import express from "express";
import ViteExpress from "vite-express";

const app = express();

// middleware
app.use(express.json())
app.use('/pokemon', (req, res, next) => {
  if (!req.query.url){
    res.status(400).send('query url missing')
  }
  next()
})

// external endpoints - express GET POST PUT DELETE

// get Pokemon
app.get('/pokemons', async(req, res) => {
  const {offset} = req.query
  const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/?offset=${offset}`)
  // console.log(response.data
  res.status(200).send(response.data)
})

// internal endpoints
app.get('/pokemons', async(req, res) => {
  const {url} = req.query
  const response = await axios.get(url)
  console.log(response.data)
  res.status(200).send(response.data)
})

ViteExpress.listen(app, 3000, () =>
  console.log("Server is listening on port 3000..."),
);
