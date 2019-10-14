import React, { useEffect, useState } from "react";
import Recipe from "./Recipe.js";
import "./App.css";

//38.46

const App = () => {
  const App_ID = "dac80b5d";
  const App_KEY = "0487059a0326879ccf77cb7823cd1a5c	";

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('chicken');

  useEffect(() => {
    getRecipes();
  }, [query]);

  const getRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${App_ID}&app_key=${App_KEY}`
    );
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data.hits);
  };

  const updateSearch = e => {
    setSearch(e.target.value);
  };

  const getSearch = e => {
    e.preventDefault(); //Stops the refresh
    setQuery(search);
    setSearch('');
  };

  return (
    <div className="App">
      <header>🍜Recipe App</header>
      <form onSubmit={getSearch} className="search-form">
        <input
          className="search-bar"
          type="text"
          value={search}
          onChange={updateSearch}
        />
        <button className="search-button" type="submit">
          🥧Search
        </button>
      </form>
      <div className="recipes">
        {recipes.map(recipe => (
          <Recipe
            key={recipe.recipe.label}
            key2={recipe.recipe.label}
            title={recipe.recipe.label}
            calories={recipe.recipe.calories}
            image={recipe.recipe.image}
            ingredients={recipe.recipe.ingredients} /*Another array so we have to loop through it*/
          />
        ))}
      </div>
    </div>
  );
};

export default App;
