import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import '../../dist/css/articles.css';
import React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

const baseURL = "https://api.themoviedb.org/3/";
const ApiKey = "b03d508a9e788070ca877f98f3f8bbba";
const allTvShows = "discover/tv";
const searchTvShows = "/search/tv";
const imgBaseURL = "https://image.tmdb.org/t/p/w500"
const TvShowsList = () => {
  const [tvshows, setTvShows] = useState(null);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState("");
  const [page, setPage] = React.useState(1);
  const [total_pages, setTotalPages] = React.useState(1);

  async function fetchData(currentPage) {
   let url;
   let params;
    if (search) {
      url = baseURL + searchTvShows;
      params = {
        api_key: ApiKey,
        page: currentPage,
        query: search
      }
    } else {
       url = baseURL + allTvShows;
       params = {
        api_key: ApiKey,
        page: currentPage
      }
    }
    axios.get(url, {
      params: params })
        .then(response => {
          setTvShows(response.data.results);
          setTotalPages(response.data.total_pages)
        })
        .catch(error => {
          setError(error.response.data.message);
        })
  }

  useEffect(() => {
    fetchData(page)
  }, []);

  const handleChange = (event, value) => {
    setPage(value);
    fetchData(value);
  };

  const handleSubmit = e => {
    e.preventDefault()
    fetchData(page)
  }

  if (error)  {
    return <div className="error">
      <h2>{ error }</h2>
    </div>;
  } else if (tvshows) {

    const items = tvshows.map((tvshows, index) =>
        <div key={index} className="article">
          <img src={imgBaseURL + tvshows.poster_path} alt={tvshows.title}/>
          <h2>{tvshows.title}</h2>
          {/* <p>{tvshows.overview}</p> */}
          <p className="rating">IMDB {tvshows.vote_average}</p>
          <Link to={"/tvshows/" + tvshows.id}>More</Link>
        </div>
    );
    return (
        <div>
          <form className="search" onSubmit={handleSubmit}>
            <label>Search:
              <input
                  type="text"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
              />
            </label>
            <input type="submit" value="Search" />
          </form>

          <div className="pagination">
            <Stack spacing={2}>
              <Pagination count={total_pages} variant="outlined" shape="rounded" color="primary" page={page} onChange={handleChange} />
            </Stack>
          </div>

          <div className="articles">{ items }</div>
        </div>
    );
  }

}

export default TvShowsList;
