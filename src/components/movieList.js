import { Component } from "react";
import { movies } from "../movieData"
import axios from "axios"

class MovieList extends Component {
    constructor(){
        super();
        this.state={
            hover:"",
            pArr :[1],
            movies:[],
            currPage:1,
            favourites: []
        };
    }
    
    async componentDidMount(){
        const res = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=81242a2aa2066e052c78ec9ac1700c59&language=en-US&page=${this.state.currPage}`)
        this.setState({
            movies:[...res.data.results]
        })
    }

    changeMovies = async()=>{
        const res = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=81242a2aa2066e052c78ec9ac1700c59&language=en-US&page=${this.state.currPage}`)
        this.setState({
            movies:[...res.data.results]
        })
    }

    handleNext=()=>{
        console.log(movies)
        this.setState({
            pArr:[...this.state.pArr, this.state.pArr.length+1],
            currPage:this.state.currPage+1
        },this.changeMovies)
        window.scroll(0, 0);
    }

    handlePrev=()=>{
        if(this.state.currPage !== 1){
            let temp = this.state.pArr.slice(0, -1) ;
            this.setState({
                pArr:[...temp],
                currPage:this.state.currPage-1
            },this.changeMovies);
        }
        // window.scroll(0, 0);
    }

    handlePageClick=(ele)=>{
        if(ele !== this.state.currPage){
            this.setState({
                currPage: ele
            },this.changeMovies);
        }
        // window.scroll(0, 0);
    }

    handleFavourites = (movieObj)=>{
        let oldData = JSON.parse(localStorage.getItem('movies-app') || '[]')
        if(this.state.favourites.includes(movieObj.id)){
            oldData = oldData.filter((movies)=>movies.id !== movieObj.id)
        }
        else{
            oldData.push(movieObj)
        }
        localStorage.setItem("movies-app",JSON.stringify(oldData));
        this.handleFavouritesState();
    }

    handleFavouritesState = ()=>{
        let oldData = JSON.parse(localStorage.getItem('movies-app')|| '[]')
        let temp = oldData.map((movie)=>movie.id);

        this.setState({
            favourites:[...temp]
        })
    }
     
 

    
    render() {
        
        return (
            <div onMouseEnter={() => this.handleFavouritesState()} style={{paddingTop:"15px"}}>
                <div>
                    <h3 className="text-center heading"><strong>Trending</strong></h3>
                </div>
                <div className="movies-list">
                    {this.state.movies.map((movieEle) => (
                        // <div className="card-hover"> 
                        <div className="card movie-card" onMouseEnter={()=>this.setState({hover:movieEle.id})} onMouseLeave={()=>this.setState({hover:""})} >
                            <img src={`https://image.tmdb.org/t/p/w220_and_h330_face${movieEle.backdrop_path}`}  className="card-img-top movie-img movie-card-img" alt="..." />
                            <h3 className="movie-rating" style={{color: movieEle.vote_average > 6.5 ?"green":"red"  }}>{movieEle.vote_average}</h3>
                            <h5 className="card-title movie-title">{movieEle.title}</h5>
                            <div className="fav-btn" style={{ display: 'flex', justifyContent: "center" }}>
                                {this.state.hover === movieEle.id && (
                                    <button  className="movies-button" onClick={()=>this.handleFavourites(movieEle)}>
                                    {this.state.favourites.includes(movieEle.id)
                                    ?<i className="fa fa-heart-circle-minus" style={{fontSize:"2rem",  paddingTop:"5px"}}></i>
                                    :<i className="fa fa-heart-circle-plus" style={{fontSize:"2rem",  paddingTop:"5px"}}></i>}
                                </button>)}
                            </div>
                        </div>
                    ))}
                </div>

                <div style={{display:"flex",justifyContent:"center"}}>
                <nav aria-label="Page navigation example">
                    <ul className="pagination">
                        <li className="page-item"><h2 className="page-link"  onClick={this.handlePrev}>Previous</h2></li>
                        {this.state.pArr.map((ele)=>(
                            <li className="page-item"><h2 className="page-link" onClick={()=>this.handlePageClick(ele)}>{ele}</h2></li>
                        ))}
                        <li className="page-item"><h2 className="page-link" onClick={this.handleNext}>Next</h2></li>
                    </ul>
                </nav>
                </div>
            </div>
        )
    }
}

export default MovieList;