// the very first thing in every CompositionEvent,
// its to import 
import React, {Component} from 'react';

class Poster extends Component{
    render(){
        const imagePath = `http://image.tmdb.org/t/p/w300${this.props.movie.poster_path}`;        
        const moviePath = `http://www.themoviedb.org/movie/${this.props.movie.id}`
        const title = this.props.movie.title;
        return(
            <div className="image">
                <a href={moviePath}>
                    <img src={imagePath} />
                </a>
                <div className="title">
                    {title}
                </div>
            </div>
        )
    }
}

export default Poster;