import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import SavedList from './Movies/SavedList';
import MovieList from './Movies/MovieList';
import Movie from './Movies/Movie';

const App = () => {
  const [savedList, setSavedList] = useState( [] );

  const addToSavedList = movie => {
    setSavedList( [...savedList, movie] );
    
  };

  return (
    <div>
      <SavedList list={savedList} />
      <Route exact path="/">
        <MovieList />
      </Route>
      <Route path="/movie/:id">
        <Movie />
      </Route>
    </div>
  );
};
//Establish hooks and define routes. Routes are defined by  
//declaring the path to the component and specifying which 
//component it is going to. Routes going outside the directory
//are started with a dot, followed by a backslash to denote
//the filepath.



export default App;
