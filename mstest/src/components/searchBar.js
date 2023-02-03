import {useState, useEffect} from 'react'
import Recipes from './Recipes';


function Recipe(){
  const [ recipeData, setRecipeData ] = useState([]);

  useEffect( () => {
    getRecipe();
  }, []);
  const getRecipe = async () => {
    const api = await fetch(
      `https://api.spoonacular.com/recipes/random?apikey=${process.env.REACT_APP_API_KEY}`
    );
    const data = await api.json();
    console.log(data);
  };
  return<div>Recipes</div>;
}

export default Recipe;



//API KEY
// https://api.spoonacular.com/recipes/716429/information?apiKey=1
// da91af22e2e4bbcac6bb30d067e4c61