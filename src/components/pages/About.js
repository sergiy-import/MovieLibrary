import '../../dist/css/about-page.css';
// import Slider from "../layout/Slider"
// import MoviesList from "../layout/ActionMovies";

// let images = {
//     img: [
//         MoviesList.index,
//         MoviesList.id,
//         MoviesList.movie,
      
//     ]
//   }

const About = () => {
    return (
        <div className="about">
            <h1>About Page</h1>
            <div className="content">
                <h3>What is Lorem Ipsum?</h3>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
            </div>
            {/* <div>
                <h3>Top Rated</h3>
                <MoviesList/>
                
            </div> */}
        </div>
    )
};

export default About;