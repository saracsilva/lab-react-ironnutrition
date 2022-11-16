import './App.css';
import 'antd/dist/antd.min.css';
import dataFoods from './foods.json';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [foods, setFoods] = useState(dataFoods);
  return (
    <div className="App">
      <h1>Food List</h1>
      <hr></hr>
      {foods.map((food) => (
        <div key={uuidv4()}>
          <p> {food.name} </p>
          <img src={food.image} width={100} />
        </div>
      ))}
    </div>
  );
}

export default App;
