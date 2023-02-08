import { useState,useEffect } from 'react'
import './App.css'
import { MoviesCard } from './components/MoviesCard'
import axios from 'axios'

const URL_BASE = 'https://movies-crud-2.academlo.tech/swagger/'

function App() {

  const [movies, setMovies] = useState([])

  const hanleSubmit = (e) => {
    e.preventDefault()
    const data = {
      name: e.target.name.value,
      genre: e.target.genre.value,
      duration: e.target.duration.value,
      release_date: e.target.release.value,
    }
    createMovie(data)
    e.target.reset()
  }

  const createMovie = (data) => {
    axios.post(`${URL_BASE}movies/`, data)
    .then(()=> getAllMovies())
    .catch((err) => console.log(err))
  }

  const getAllMovies =() => {
    axios.get(`${URL_BASE}movies/`)
    .then((res)=> setMovies(res.data))
    .catch((err) => console.log(err))
  } 
  
  const deleteMovie = (id) => {
    axios.delete(`${URL_BASE}movies/${id}/`)
    .then((res) => getAllMovies(res.data))
    .catch((err) => console.log(err))
  }

  useEffect(() => {
    getAllMovies()    
  },[])  
  
  return (
    <div className="App">
      <h1> Movies App</h1>

      <form onSubmit={hanleSubmit}>
        <div>
          <label>Name:</label>
          <input id='name' type= "text"/>
        </div>
        <div>
          <label>Genre:</label>
          <input id='genre' type= "text"/>
        </div>
        <div>
          <label>Duration (min):</label>
          <input id='duration' type= "text"/>
        </div>
        <div>
          <label>Release date: </label>
          <input id='*' type= "date"/>
        </div>
        <button> Create</button>

      </form>
      <section>
        {
          movies.map(movie => <MoviesCard key={movie.id} deleteMovie={deleteMovie} movie={movie}/>)
        }
      </section>
    </div>
  )
}

export default App
