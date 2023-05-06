import Slider from "../layout/Slider"
import PopularMoviesSlider from "../layout/PopularMoviesSlider"
import TopRatedMoviesSlider from "../layout/TopRatedMoviesSlider"
import TvOnAirSlider from "../layout/TvOnAirSlider"
import TopRatedTvSlider from "../layout/TopRatedTvSlider"
// import facebook from '../../dist/img/facebook.webp';
// import twitter from '../../dist/img/twitter.webp';
// import youtube from '../../dist/img/youtube.webp';
// import instagram from '../../dist/img/instagram.webp';
// import logo2 from '../../dist/img/logo2.webp';
// import logo3 from '../../dist/img/logo3.webp';
// import logo4 from '../../dist/img/logo4.webp';



// let images = {
//   img: [
//     // facebook,
//     // twitter,
//     // youtube,
//     // instagram,
//     logo2,
//     logo3,
//     logo4,
    
//   ]
// }

const Home = () => {
    return (
        <div>
            <h1>Best movies and TV-shows for your intertainment</h1>
            <div className="slider-wraper">
              <h2>Top rated movies</h2>
              <TopRatedMoviesSlider/>
            </div>
            
            <div className="slider-wraper">
              <h2>Popular Movies</h2>
              <PopularMoviesSlider/>
            </div>
            
            <div className="slider-wraper">
              <h2>Right now on the AIR</h2>
              <TvOnAirSlider/>
            </div>
            
            <div className="slider-wraper">
              <h2>Top Rated TV-shows</h2>
              <TopRatedTvSlider/>
            </div>
            
            {/* <div className="slider-wraper">
              <h2>Romance films</h2>
              <Slider { ...images}/>
            </div>
            
            <div className="slider-wraper">
              <h2>Comedy films</h2>
              <Slider { ...images}/>
            </div> */}
            
        </div>
      )
};

export default Home;