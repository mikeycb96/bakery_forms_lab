import { useState } from "react";
const Cake = ({cake}) => {

  const {cakeName, ingredients, price, rating} = cake;
  return (
    <>
      <h2>{cakeName}</h2>
      <p>Rating: {rating}</p>
      <p>Price: {price}</p>
      <ul>
        <h3>List of Ingredients</h3>
        {ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
    </>
);
};


export default Cake;