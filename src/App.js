import React, { useState } from "react";
import Header from "./components/Header";
import FullRecipe from "./components/FullRecipe";
import RecipePreview from "./components/RecipePreview";
import Footer from "./components/Footer";
import "./css/bootstrap.min.css";
import "./css/styles.css";

export default function App() {
  const apiURL = "https://www.themealdb.com/api/json/v1/1/random.php";
  const [myRecipes, setRecipes] = useState(null);
  const [recipeExists, setRecipeExists] = useState(false);

  // fetch recipe from API
  function fetchRecipes() {
    fetch(apiURL)
      .then(response => response.json())
      .then(data => setRecipes(data))
      .then(recipeExists => setRecipeExists(true));
  }

  return (
    <div className="App">
      <Header />
      <div className="Main">
        <div className="alert alert-primary" role="alert">
          <p>MAIN CONTENT GOES HERE‚</p>
          The main content will change depending on functions chosen in the app
          (Home,Country, Category, RecipeDisplay)
          <div>
            <button className="fetch-button" onClick={fetchRecipes}>
              Fetch Recipes
            </button>
            <br />
          </div>
        </div>

        <div className="recipe-wrapper">
          {console.log(recipeExists, myRecipes)}
          {recipeExists ? (
            <div>
              {myRecipes.meals[0].strMeal}
              <img src={myRecipes.meals[0].strMealThumb} alt="Hello" />
            </div>
          ) : (
            <div />
          )}
        </div>
        <Footer />
      </div>
    </div>
  );
}
