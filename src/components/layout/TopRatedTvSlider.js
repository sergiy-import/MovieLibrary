import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import '../../dist/css/articles.css';
import React from 'react';
import {Swiper, SwiperSlide} from "swiper/react";

const baseURL = "https://api.themoviedb.org/3";
const ApiKey = "256e1fa5a6f90de9c633ddf66a19c24f";
const topRatedTv = "/tv/top_rated";
const imgBaseURL = "https://image.tmdb.org/t/p/w500"
const TopRatedTvSlider = () => {
  const [swiper, setSwiper] = useState(null);
  const [movies, setMovies] = useState(null);
  const [error, setError] = useState(null);

  async function fetchData() {
    let url;
    let params;
    url = baseURL + topRatedTv;
    params = {
      api_key: ApiKey
    }
    axios.get(url, {
      params: params })
        .then(response => {
          setMovies(response.data.results);
        })
        .catch(error => {
          setError(error.response.data.message);
        })
  }

  useEffect(() => {
    fetchData()
  }, []);

  const handleNext = () => {
    if (swiper !== null) {
      swiper.slideNext();
    }
  };

  const handlePrev = () => {
    if (swiper !== null) {
      swiper.slidePrev();
    }
  };

  if (error)  {
    return <div className="error">
      <h2>{ error }</h2>
    </div>;
  } else if (movies) {

    const slides = movies.map((movie, index) =>
        <SwiperSlide key={index}>
          <Link to={"/top-tv/" + movie.id}>
            <div className="card">
              {/* <h2>{ movie.title }</h2> */}
              <img src={imgBaseURL + movie.poster_path} alt={movie.title}/>
              {/* <p>{ movie.overview }</p> */}
            </div>
          </Link>
        </SwiperSlide>
    );
    return (<>
      <Swiper
          onSwiper={setSwiper}
          slidesPerView={4}
          spaceBetween={30}
          navigation={{ prevEl: '.swiper-button-prev', nextEl: '.swiper-button-next' }}>
        { slides }
      </Swiper>
      <div className="swiper-buttons">
        <button className="swiper-button-prev" onClick={handlePrev}></button>
        <button className="swiper-button-next" onClick={handleNext}></button>
      </div>
    </>);
  }

}

export default TopRatedTvSlider;
