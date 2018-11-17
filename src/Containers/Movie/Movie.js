import React,{Component} from 'react';
import axios from 'axios';
import '../../App.css';
import {connect} from 'react-redux';
import {NavLink} from 'react-router-dom';

class Movie extends Component{
    componentDidMount(){
        axios.get(' https://akrp-server.herokuapp.com/movies/' + this.props.match.params.id)
        .then(response=>{
            this.props.setData(response.data,false);
            console.log(response.data);
        })
    }
    
    render(){
        let movie = null;
        if(this.props.loadingMovie)
        {
            movie = (<div>Loading Details ...</div>);
        }
        else{
            movie= (<div className="App-movieone">
            <img alt="poster" align = "left" src = {"http://image.tmdb.org/t/p/original"+this.props.data[0].poster_path} height="550" width="400"></img>
            <table style={{padding: "20px", textAlign: "left"}}>
            <tbody>
                <tr>
                    <td width="100">Title : </td>
                    <td>{this.props.data[0].original_title}</td>
                </tr>
                <tr>
                    <td>Overview : </td>
                    <td>{this.props.data[0].overview}</td>
                </tr>
                <tr>
                    <td>Release Date : </td>
                    <td>{this.props.data[0].release_date}</td>
                </tr>
                <tr>
                    <td>Revenue : </td>
                    <td>${this.props.data[0].revenue}</td>
                </tr>
                <tr>
                    <td>Rating : </td>
                    <td>{this.props.data[0].vote_average}/10</td>
                </tr>
                <tr>
                    <td>Runtime : </td>
                    <td>{this.props.data[0].runtime}</td>
                </tr>
                <tr>
                    <td>Status : </td>
                    <td>{this.props.data[0].status}</td>
                </tr>
                </tbody>
            </table>
            

            </div>)
        }
        return <div>
            
            <button style={{float: "left", color: "white", margin : "20px"}}><NavLink to="/">Go Back</NavLink></button>
            {movie}
        </div>
    }
    
}

const mapStateToProps = state => {
    return{
        loadingMovie : state.loadingMovie,
        data : state.data
    };
};
const mapDispatchToProps = dispatch => {
    return {
        setData : (data,loadingMovie) => dispatch({type: 'SETDATA', value : data, loadingMovie : loadingMovie})
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Movie);