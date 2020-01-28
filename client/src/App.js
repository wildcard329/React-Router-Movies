import React, { useState } from 'react';
import MovieList from './Movies/Movie';
import SavedList from './Movies/SavedList';
import { Route, BrowserRouter as Router } from 'react-router-dom';

const App = () => {
  const [savedList, setSavedList] = useState( [] );

  const addToSavedList = movie => {
    setSavedList( [...savedList, movie] );
    
  };

  return (
    <div>
      <SavedList list={savedList} />
    <Router>
      <Route path='/Movies/MovieList' component={MovieList} />
      {/* <Route path='/movies/:id' component={id}></Route> */}
    </Router>
    </div>
  );
};

export default App;
