import React from 'react';
import SearchBarContainer from '../containers/SearchBarContainer';
import MovieListContainer from '../containers/MovieListContainer';

const App = (props) => {
  console.log('PROPS CHILDRENITOS')
  console.log(props.children);
  return (
    <div>
      <nav>NAVBAR</nav>
      <h1>MarsKliff</h1>
      {props.children}
    </div>
  );
}

export default App; 
