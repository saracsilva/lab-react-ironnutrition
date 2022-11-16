import './App.css';
import 'antd/dist/antd.min.css';
import dataFoods from './foods.json';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';
import Search from './components/Search';

function App() {
  const [foods, setFoods] = useState(dataFoods);
  const [search, setSearch] = useState('');
  const handleDelete = (name) => {
    setFoods(foods.filter((food) => food.name !== name));
  };

  return (
    <div className="App">
      <h1>Hello</h1>
      <hr></hr>
      <div>
        <Search search={search} setSearch={setSearch} />
      </div>
      <hr></hr>
      <div className="form">
        <AddFoodForm foods={foods} setFoods={setFoods} />
      </div>
      <hr></hr>
      <h1>Food List</h1>
      <div className="foodBox">
        {foods
          .filter((food) => {
            return food.name.toLowerCase().includes(search.toLowerCase());
          })
          .map((food) => (
            <div key={uuidv4()}>
              <FoodBox food={food} handleDelete={handleDelete} />
            </div>
          ))}
      </div>
    </div>
  );
}

export default App;
