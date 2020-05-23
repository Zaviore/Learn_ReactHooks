import React from "react";
import IngredientList from "./IngredientList";

function Recipe(props) {
  const {
    id,
    name,
    cookTime,
    servings,
    instructions,
    ingredients,
    handleRecipeDelete,
  } = props;
  return (
    <div className="recipe">
      <div className="recipe-header">
        <h2 className="recipe-title">{name}</h2>
      </div>
      <div>
        <button className="btn btn--primary mr-1">Edit </button>
        <button
          className="btn btn--dagger"
          onClick={() => handleRecipeDelete(id)}
        >
          Delete
        </button>
      </div>
      <div className="recipe-row">
        <span className="recipe-label">Cook Time : </span>
        <span className="recipe-value">{cookTime}</span>
      </div>
      <div className="recipe-row">
        <span className="recipe-label">Serving : </span>
        <br />
        <span className="recipe-value">{servings}</span>
      </div>
      <div className="recipe-row">
        <span className="recipe-label">Intructions : </span>
        <br />
        <span className="recipe-value recipe-instructions recipe-value-indented">
          {instructions}
        </span>
      </div>

      <div className="recipe-row">
        <span className="recipe-label">Ingredient : </span>
        <span className="recipe-value recipe-value-indented">
          <IngredientList ingredients={ingredients} />
        </span>
      </div>
    </div>
  );
}

export default Recipe;
