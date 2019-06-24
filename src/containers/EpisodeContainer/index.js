import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux'
import {  getEpisodes } from '../../redux/episodes/thunks'
import './App.css';
import Header from '../../pages/Header';



  const EpisodeContainer = props => {
    const {
      getEpisodes,
      loading,
      episodes,
      error
    } = props

    
  

  useEffect(() => {
    getEpisodes()
  }, [])

  return (
  <div>

    <Header />
      
    <table className="table table-bordered table-dark">
        <thead >
          <tr>
            <th scope="col">#</th>
            <th scope="col">Nombre</th>
            <th scope="col"></th>
          </tr>
        </thead>
        
        {error}

        {loading && (
          <div>
            IS LOADING...
          </div>
        )}
        {!loading && episodes.map((episode, index) => (
          
          <tbody key ={index} style={{marginBottom: '20px'}}>
            
            <tr>
              <td>{episode.id}</td>
              <td>{episode.name}</td>
            <td>  
              
            </td>
            </tr>
          </tbody>
        ))}
      </table>
    </div>
  );
}

const mapStateToProps = state => {
  const {
    loading,
    entities,
    error
  } = state.episodes

  return {
    loading,
    episodes: entities,
    error
  }
}
 
const mapDispatchToProps = {
  getEpisodes
}

export default connect(mapStateToProps, mapDispatchToProps)(EpisodeContainer);
