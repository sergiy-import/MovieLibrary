import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import '../../dist/css/articles.css';
import React from 'react';
import {Swiper, SwiperSlide} from "swiper/react";

const baseURL = "https://api.themoviedb.org/3";
const ApiKey = "256e1fa5a6f90de9c633ddf66a19c24f";
const tvOnAir = "/tv/on_the_air";
const imgBaseURL = "https://image.tmdb.org/t/p/w500"
const TvOnAirSlider = () => {
  const [swiper, setSwiper] = useState(null);
  const [tvshows, setTvShows] = useState(null);
  const [error, setError] = useState(null);

  async function fetchData() {
    let url;
    let params;
    url = baseURL + tvOnAir;
    params = {
      api_key: ApiKey
    }
    axios.get(url, {
      params: params })
        .then(response => {
          setTvShows(response.data.results);
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
  } else if (tvshows) {

    const slides = tvshows.map((tvshows, index) =>
        <SwiperSlide key={index}>
          <Link to={"/top-tv/" + tvshows.id}>
            <div className="card">
              {/* <h2>{ movie.title }</h2> */}
              <img src={imgBaseURL + tvshows.poster_path} alt={tvshows.title}/>
              {/* <p>{ movie.overview }</p> */}
            </div>
          </Link>
        </SwiperSlide>
    );
    return (<>
      <Swiper
          onSwiper={setSwiper}
          slidesPerView={3}
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

export default TvOnAirSlider;
