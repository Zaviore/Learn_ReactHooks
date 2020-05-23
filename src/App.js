import React, { useState } from "react";
import Recipelist from "./component/Recipelist";
import "./css/app.css";
import uuidv4 from "uuid/v4";

export const RecipeContext = React.createContext();

function App() {
  const [recipes, setRecipes] = useState(sampleRecipes);

  const recipeContextValue = {
    handleRecipeAdd,
    handleRecipeDelete,
  };

  function handleRecipeAdd() {
    const newRecipe = {
      id: uuidv4(),
      name: "New",
      Servings: 1,
      cookTime: "1:11",
      instructions: "Instr",
      ingredients: [{ id: uuidv4(), name: "Name ", amount: "1 Tbs" }],
    };
    setRecipes([...recipes, newRecipe]);
  }

  function handleRecipeDelete(id) {
    setRecipes(recipes.filter((recipe) => recipe.id !== id));
  }
  return (
    <RecipeContext.Provider value={recipeContextValue}>
      <Recipelist recipes={recipes} />
    </RecipeContext.Provider>
  );
}

const sampleRecipes = [
  {
    id: 1,
    name: "Chiken Catbury",
    servings: "3",
    cookTime: "1:15",
    instructions: "1. put salat on chicken\n 2.put merica",
    ingredients: [
      {
        id: 1,
        name: "chiken",
        amount: "2 pounds",
      },
      {
        id: 2,
        name: "salt",
        amount: "1 pounds",
      },
    ],
  },
  {
    id: 2,
    name: "Plain Pork",
    servings: 5,
    cookTime: "0:45",
    instructions: "1. Put paprika on pork\n2. Put pork in oven\n3. Eat pork",
    ingredients: [
      {
        id: 1,
        name: "chiken",
        amount: "2 pounds",
      },
      {
        id: 2,
        name: "salt",
        amount: "1 pounds",
      },
    ],
  },
];

export default App;
