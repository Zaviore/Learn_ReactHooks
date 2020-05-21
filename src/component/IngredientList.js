import React from "react";
import Incredient from "./Incredient";

function IngredientList({ ingredients }) {
  const ingredientElement = ingredients.map((ingredient) => {
    return <Incredient key={ingredient.id} {...ingredient} />;
  });
  return <div className="ingredient-grid">{ingredientElement}</div>;
}

export default IngredientList;
