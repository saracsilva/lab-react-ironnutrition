// Style Guide:
// In this file you can find a reference example of the structure
// and content that the component should render.
// Remember to import Ant Design components before using them.
import { Divider, Input } from 'antd';
import { useState } from 'react';

// Iteration 5
function Search({ search, setSearch }) {
  const handleSubmit = (event) => {
    setSearch(event.target.value);
    /*    const filteredFood = foods.filter((food) => {
      return food.name.toLowerCase().includes(search.toLowerCase());
    });
    setFoods(filteredFood) */
  };
  return (
    <div>
      <Divider>Search</Divider>

      <label>Search</label>
      <Input value={search} type="text" onChange={handleSubmit} />
    </div>
  );
}

export default Search;
