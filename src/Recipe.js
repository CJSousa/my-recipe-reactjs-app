import React from "react";
import style from "./recipe.module.css";

const Recipe = ({ title, calories, image, ingredients }) => {

  calories = Math.round(calories);

  return (
    <div className={style.recipe}>
      <h1>{title}</h1>
      <li> {/*Ordered List*/}
        {
          ingredients.map(ingredient => (
            <li>{ingredient.text}</li>
          ))
        }
      </li>
      <p>Calories: {calories}</p>
      <img className={style.image} src={image} alt="" />
      <br />
    </div>
  );
};

export default Recipe;
