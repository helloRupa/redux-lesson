import React from 'react';
import './App.css';
import CatPage from './CatPage';
import Text from './Text';
// import TestMyConnect from './my_connect/TestMyConnect';

function App() {
  return (
    <>
    <Text text={'Hi there'} />
    <CatPage />
    {/* <TestMyConnect extraTest={'Just being extra'} /> */}
    </>
  );
}

export default App;
