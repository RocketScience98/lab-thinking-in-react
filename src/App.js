import React from 'react';
import logo from './logo.svg';
import './App.css';
import jsondata from '../data.json'
import FilterableProductTable from './components/FilterableProductTable';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <FilterableProductTable products ={jsondata.data} />
    </div>
  );
}

export default App;
