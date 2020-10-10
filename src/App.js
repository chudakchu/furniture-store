import React from 'react';

import Layout from './components/Layout/Layout';
import Carousel from './components/Carousel/Carousel';
import Categories from './components/Categories/Categories';
import Safety from './components/Safety/Safety';
import './App.css';


function App() {
  return (
    <div className="App">
      <Layout>
        <Carousel />
        <Categories />
        <Safety />
      </Layout>
    </div>
  );
}

export default App;
