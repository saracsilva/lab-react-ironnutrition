// Style Guide:
// In this file you can find a reference example of the structure
// and content that the component should render.
// Remember to import Ant Design components before using them.
import { Divider, Input } from 'antd';
import { useState } from 'react';
// Iteration 4
function AddFoodForm({ foods, setFoods }) {
  const [foodName, setFoodName] = useState();
  const [foodImage, setFoodImage] = useState();
  const [foodCalories, setFoodCalories] = useState();
  const [foodServings, setFoodServings] = useState();
  const handleSubmit = (event) => {
    event.preventDefault();
    setFoods([
      ...foods,
      {
        name: foodName,
        image: foodImage,
        calories: foodCalories,
        servings: foodServings,
      },
    ]);
  };
  return (
    <form onSubmit={handleSubmit}>
      <Divider>Add Food Entry</Divider>

      <label>Name</label>
      <Input
        value={foodName}
        type="text"
        onChange={(event) => setFoodName(event.target.value)}
      />

      <label>Image</label>
      <Input
        value={foodImage}
        type="text"
        onChange={(event) => setFoodImage(event.target.value)}
      />

      <label>Calories</label>
      <Input
        value={foodCalories}
        type="number"
        onChange={(event) => setFoodCalories(event.target.value)}
      />

      <label>Servings</label>
      <Input
        value={foodServings}
        type="number"
        onChange={(event) => setFoodServings(event.target.value)}
      />

      <button type="submit">Create</button>
    </form>
  );
}

export default AddFoodForm;
