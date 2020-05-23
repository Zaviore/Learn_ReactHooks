import React from "react";
import Recipe from "./Recipe";
function Recipelist(props) {
  const { recipes, handleRecipeAdd, handleRecipeDelete } = props;
  return (
    <div className="recipe-list">
      <div>
        {recipes.map((recipe) => {
          return (
            <Recipe
              key={recipe.id}
              handleRecipeDelete={handleRecipeDelete}
              {...recipe}
            />
          );
        })}
      </div>

      <div className="recipe-list-addbtn">
        <button className="btn btn--primary" onClick={handleRecipeAdd}>
          Add Recipe
        </button>
      </div>
    </div>
  );
}

export default Recipelist;
