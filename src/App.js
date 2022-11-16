import './App.css';
import 'antd/dist/antd.min.css';
import dataFoods from './foods.json';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import FoodBox from './components/FoodBox';

function App() {
  const [foods, setFoods] = useState(dataFoods);
  return (
    <div className="App">
      <h1>Food List</h1>
      <hr></hr>
      <div className="foodBox">
        {foods.map((food) => (
          <div key={uuidv4()}>
            <FoodBox food={food} />
            {console.log(food)}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
