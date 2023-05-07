import {useParams} from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import React from "react";
const baseURL = "https://api.themoviedb.org/3/tv/"
const ApiKey = "b03d508a9e788070ca877f98f3f8bbba"
const imgBaseURL = "https://image.tmdb.org/t/p/original"

const TopTV = () => {
  const params = useParams();
  const id = params.id;
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get(baseURL + id, {
      params: {
        api_key: ApiKey
      } })
        .then(response => {
          setMovie(response.data);
        })
        .catch(error => {
          setError(error.response.data.message);
        })
  }, []);


  if (!movie) return null;

  return (
      <div className="single-movie">
        <div className="poster">
          <img src={imgBaseURL + movie.poster_path} alt={movie.title}/>
        </div>
        
        <div className="about-movie">
          <h2>{movie.title}</h2>
          <p>{movie.overview}</p>
          <p className="rating">IMDB {movie.vote_average}</p>
        </div>
        
      </div>
  )
};

export default TopTV;