import { Component } from "react";
import {movies} from "../movieData";

class Banner extends Component {
    render() {
            let movie = movies.results[Math.floor(Math.random() * 10) ];
            let backdrop_path = movie.backdrop_path;

            return (
            // <>
// <div className="card banner-card">
                <div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img className="d-block w-100 banner-img" src={`https://image.tmdb.org/t/p/w1920_and_h800_multi_faces//${backdrop_path}`}  alt="..."/>
                        </div>
                        {/* <div className="carousel-item">
                            <img className="d-block w-100" src={`https://image.tmdb.org/t/p/original${(movie+1).backdrop_path}`} alt="..."/>
                        </div>
                        <div className="carousel-item">
                            <img className="d-block w-100" src={`https://image.tmdb.org/t/p/original${(movie+2).backdrop_path}`}  alt="..."/>
                        </div> */}

                        <div className="banner-intro">
                            <h1 className="card-title banner-title">{movie.title}</h1>
                            <p className="card-text banner-text">{movie.overview}</p>
                        </div>
                    </div>
                </div>





// </div>


            // <div className="card banner-card">
            //     <img src={`https://image.tmdb.org/t/p/original${backdrop_path}`} className="card-img-top banner-img" alt="..."/>
            //     <div className="banner-intro">
            //         <h1 className="card-title banner-title">{movie.title}</h1>
            //         <p className="card-text banner-text">{movie.overview}</p>
            //     </div>
            // </div>
        )
    }
}

export default Banner;