import React from "react";
import Recipelist from "./component/Recipelist";
import "./css/app.css";
function App() {
  return (
    <div>
      <Recipelist recipes={sampleRecipes} />
    </div>
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
