import React, { useState } from 'react';
import MovieList from './Movies/Movie';
import SavedList from './Movies/SavedList';
import { Route } from 'react-router-dom';
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
      <Route path="/Movie/:id">
        <Movie />
      </Route>
    </div>
  );
};
//Establish hooks and define routes. Routes are defined by  
//declaring the path to the component and specifying which 
//component it is going to.



export default App;
