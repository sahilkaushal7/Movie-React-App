import React, { Component } from 'react';
import '../../App.css';
import {connect} from 'react-redux';
import axios from 'axios';

class Movies extends Component {
  componentDidMount(){
    axios.get('https://akrp-server.herokuapp.com/movies?p=1')
    .then(response=>
      {
          this.props.setMovies(response.data,false)
      })
      .catch(error =>{
          console.log(error);
      })
    window.addEventListener('scroll', this.onScroll, false);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.onScroll, false);
  }
  count = 2;
  onScroll = () => {
    if((window.scrollY) >= (window.innerHeight*2)) {
      axios.get('https://akrp-server.herokuapp.com/movies?p='+ this.count)
      .then(response=>
        {
            this.props.addMovies(response.data)
        })
    }
    this.count = this.count + 1;
  }
  onMovieClick= (id) => {
    this.props.history.push('/'+id);
  }
  render() {
    let movies = null;
    if(this.props.loading)
    {
      movies = (<div style={{color:"white"}}>Still Loading ...</div>)
    }
    else{
      movies = this.props.movieArray.map((movie,index)=>{
        return (<div key= {movie._id} className="App-movie" onClick={()=>this.onMovieClick(movie._id)} style={{backgroundImage: "url("+
          'https://image.tmdb.org/t/p/w500/'+movie.poster_path+")"}}>
        <h3>{movie.original_title}</h3>
        </div>)});
    }
    return (
      <div className="App" ref="iScroll" onScroll={this.check}>
        <div className="App-movies">
          {movies}
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
    return{
        loading : state.loading,
        movieArray: state.movieArray,
    };
};
const mapDispatchToProps = dispatch => {
    return {
        setMovies : (data,loading) => dispatch({type: 'SETMOVIES', value : data, loading:loading}),
        addMovies : (data) => dispatch({type: 'ADDMOVIES', value : data}),
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Movies);

