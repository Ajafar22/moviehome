import React from "react"

function MovieCard({movie:{imdbID, Year, Poster, Type, Title}}){
    return(
        <div className="movie_card" key={imdbID}>
        <div>
        <p>{Year}</p>
        </div>
       
            <div>
           
            <img className="movie_img" 
            src={Poster !== "N/A"? Poster: "https://via.placeholder.com/400" }  
            alt={Title} />
            </div>
            <div >
            <p>{Type}</p>
            <h3>{Title}</h3>
            </div>
        </div>
    )
}
export default MovieCard;