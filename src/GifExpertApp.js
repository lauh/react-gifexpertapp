import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {
  const initialState = ['Ardilla'];
  //, 'Comida', 'Cocktail', 'Risas'
  const [categories, setCategories] = useState(initialState);

  // const handleAdd = () => {
  //   setCategories([...categories, 'Tontería']);
  // };
  return (
    <>
      <h2>GifExpertApp</h2>
      <AddCategory setCategories={setCategories} />
      <hr />
      {/* <button onClick={handleAdd}>Añadir</button> */}
      <ol>
        {categories.map((category) => (
          <GifGrid key={category} category={category} />
        ))}
      </ol>
    </>
  );
};
