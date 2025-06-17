import React, {useState, useEffect} from "react"
import MovieCard from './MovieCard'
import { IoSearch } from "react-icons/io5";

const Movie = () => {
     const [movies, setMovies] = useState([])
  const [searchValue, setSearchValue] = useState("")


 const API_URL = "http://www.omdbapi.com?i=tt3896198&apikey=524709c3"
  const fetchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`)
    const data = await response.json()
    setMovies(data.Search)
   
  }

    useEffect(() => {
    fetchMovies("Batman")
  }, [])

  return (
    <div>
    <div className="header">
        <div className="navbar">
    <h1>Movie<span>Home</span></h1>
    <div className="search">
        <input
           value={searchValue}
           onChange={(e)=>setSearchValue(e.target.value)}
           placeholder="Search a Movie"
           />
           <div className="search_icon">
          <IoSearch onClick={()=>fetchMovies(searchValue)} size={25} />
             </div>
      </div>
    </div>
    </div>
    <div className="container">
     
      
      {movies?.length > 0 ? (
      <div className="card_container">
      {movies.map((movie) => (
        <MovieCard movie={movie} />
      ))}
      </div>
     ):(
      <div className="card_empty">
      <h1>No movies found!</h1>
      </div>
     )}
    </div>
   
    </div>
  )
}

export default Movie
