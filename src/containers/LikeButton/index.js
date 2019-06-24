import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import ReactDOM from 'react-dom'
import { getCharacters } from '../../redux/characters/thunks'

class LikeButton extends React.Component {
    constructor() {
      super();
      this.state = {
        liked: false
      };
      this.handleClick = this.handleClick.bind(this);
    }  
    
    handleClick() {
      this.setState({
        liked: !this.state.liked
      });
     
    }
    
    render() {
      //const text = this.state.liked ? 'Me Gusta' : 'No me Gusta';
      const label = this.state.liked ? 'No me Gusta' : 'Me Gusta'
      return (
        <div className="customContainer">
          <button className="btn btn-primary" onClick={this.handleClick}>
            {label}</button>
          <p>
           Click para cambiar.
          </p>
        </div>
      );
    }
  }


  export default LikeButton