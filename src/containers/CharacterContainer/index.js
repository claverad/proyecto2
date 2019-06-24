import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux'
import { getCharacters, getNextPage } from '../../redux/characters/thunks'
import './App.css';
import Header from '../../pages/Header'
import LikeButton from '../LikeButton'

const CharacterContainer = (props) => {
  const {
    liked,
    getNextPage,
    getCharacters,
    loading,
    characters,
    error
  } = props

  console.log('aca va',liked)

  useEffect(() => {
    getCharacters()
  }, [])

  return (
    <div>
      <Header />
      <table className="table table-bordered table-dark">
            <thead >
              <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Species</th>
                <th scope="col">Origin</th>
                <th scope="col"></th>
              </tr>
            </thead>
              {error}

              {loading && (
                <div>
                  IS LOADING...
                </div>
              )}

            {!loading && characters.map((character, index) => (
              <tbody key={index} style={{marginBottom: '40px'}}>
                
                <tr>
                  <td>{character.id}</td>
                  <td>{character.name}</td>
                  <td>{character.species}</td>
                  <td>{character.origin.name}</td>
                  <td>  
                    < LikeButton />
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
    error,
    liked
  } = state.characters

  return {
    loading,
    characters: entities,
    error,
    id:liked
  }
}
 
const mapDispatchToProps = {
  getCharacters,
  getNextPage
}

export default connect(mapStateToProps, mapDispatchToProps)(CharacterContainer);
