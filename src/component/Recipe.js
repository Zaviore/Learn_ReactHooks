import React from "react";
import IngredientList from "./IngredientList";

function Recipe(props) {
  const { name, cookTime, servings, instructions, ingredients } = props;
  return (
    <div>
      <div>
        <h2>{name}</h2>
      </div>
      <div>
        <button>Edit </button>
        <button>Delete</button>
      </div>
      <div>
        <span>Cook Time : </span>
        <span>{cookTime}</span>
      </div>
      <div>
        <span>Serving : </span>
        <span>{servings}</span>
      </div>
      <div>
        <span>Intructions : </span>
        <span>{instructions}</span>
      </div>

      <div>
        <span>Ingredient : </span>
        <span>
          <IngredientList ingredients={ingredients} />
        </span>
      </div>
    </div>
  );
}

export default Recipe;
