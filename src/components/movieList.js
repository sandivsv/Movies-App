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
            favourites:[]
        };
    }

    async componentDidMount(){
        // console.log("Component Did Mount");
        const res = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=81242a2aa2066e052c78ec9ac1700c59&language=en-US&page=${this.state.currPage}`)
        // console.log(res.data);
        this.setState({
            movies:[...res.data.results]
        })
    }

    changeMovies = async()=>{
        const res = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=81242a2aa2066e052c78ec9ac1700c59&language=en-US&page=${this.state.currPage}`)
        // console.log(res.data);
        this.setState({
            movies:[...res.data.results]
        })
    }

    handleNext=()=>{
        this.setState({
            pArr:[...this.state.pArr,this.state.pArr.length+1],
            currPage:this.state.currPage+1
        },this.changeMovies)
    }

    handleFavourites = (movieObj)=>{
        let oldData = JSON.parse(localStorage.getItem('movies-app') || '[]')
        if(this.state.favourites.includes(movieObj.id)){
            oldData = oldData.filter((movie)=>movie.id !== movieObj.id)
        }else{
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
        let moviesArr = movies.results
        return (
            <>
                <div>
                    <h3 className="text-center"><strong>Trending</strong></h3>
                </div>
                <div className="movies-list">
                    {moviesArr.map((movieEle) => (
                        <div className="card movie-card" onMouseEnter={()=>this.setState({hover:movieEle.id})} onMouseLeave={()=>this.setState({hover:""})} >
                            <img src={`https://image.tmdb.org/t/p/original${movieEle.backdrop_path}`}  className="card-img-top movie-img movie-card-img" alt="..." />
                            <h5 className="card-title movie-title">{movieEle.title}</h5>
                            <div style={{ display: 'flex', justifyContent: "center" }}>
                                {this.state.hover === movieEle.id && (
                                    <h1 type="button" className="btn btn-primary movies-button" onClick={()=>this.handleFavourites(movieEle)}>
                                        {this.state.favourites.includes(movieEle.id)?"Remove from Favourites":"Add to Favourites"}
                                    </h1>)}
                            </div>
                        </div>
                    ))}
                </div>
                <div style={{display:"flex",justifyContent:"center"}}>
                <nav aria-label="Page navigation example">
                    <ul className="pagination">
                        <li className="page-item"><a className="page-link" href=" ">Previous</a></li>
                        {this.state.pArr.map((ele)=>(
                            <li className="page-item"><a className="page-link" href=" ">{ele}</a></li>
                        ))}
                        
                        <li className="page-item"><a className="page-link" href=" ">Next</a></li>
                    </ul>
                </nav>
                </div>
            </>
        )
    }
}

export default MovieList;