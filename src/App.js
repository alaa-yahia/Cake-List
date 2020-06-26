import React, {useState, useEffect} from 'react';
import CakeList from "./Components/CakeList";
import Search from "./Components/Search";
import AddCake from "./Components/AddCake";
import './App.css';

function App() {
  const [cake, setCake] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  function getCake() {
    fetch('https://gist.githubusercontent.com/hart88/198f29ec5114a3ec3460/raw/8dd19a88f9b8d24c23d9960f3300d0c917a4f07c/cake.json')
    .then(response => response.json())
    .then((data) => {
      console.log(data);
      setIsLoading(false);
      setCake(data);
    })
  }

  useEffect(getCake,[]);

  function insertCake(title, desc, image) {
    const item = {title, desc, image };
    const newState = [...cake];
    newState.unshift(item);
    setCake(newState);
  }

  return (
    <div className="App">
      <Search cake ={cake}/>
      <AddCake insertCake={ insertCake }/>
      <CakeList cake={cake} isLoading={isLoading}/>
    </div>
  );
}

export default App;
