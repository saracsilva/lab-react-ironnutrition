import './App.css';
import 'antd/dist/antd.min.css';
import dataFoods from './foods.json';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';

function App() {
  const [foods, setFoods] = useState(dataFoods);

  return (
    <div className="App">
      <hr></hr>
      <AddFoodForm foods={foods} setFoods={setFoods} />
      <hr></hr>
      <h1>Food List</h1>
      <div className="foodBox">
        {foods.map((food) => (
          <div key={uuidv4()}>
            <FoodBox food={food} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
