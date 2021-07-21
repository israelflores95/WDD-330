const serachForm = document.querySelector('form'); // select form for user input
//const viewRecipeBtn = document.querySelector('.detail-recipe');
const searchResultOutput = document.querySelector('.search-cards'); // output search results
const recipeOutput = document.querySelector('.recipe-ingredients'); // output specific recipe
const detailRecipeTitle = document.querySelector('#detail-view-title'); //output recipe title
const savedRecipes = document.querySelector('.saved-recipes'); // output for saved recipes
const customRecipes = document.querySelector('.custom-recipes'); // output for custom/created recipes

//get recipe ID through URL
const queryString = window.location.search
const urlParams = new URLSearchParams(queryString)
const recipeId = urlParams.get('id') // get passed in recipe Id

// const apiKey = '3e2ea81f31c843a3a252cade8934a3f5'; //byui email
// const apiKey = 'ae7a12f6362b4c1dac37ef07fe44d86e'; // second gmail
// const apiKey = '31c0fd7f83ca4209a8d1b6d59174324f'; // protonmail
// const apiKey = 'dc81c54055a74b73b54fdf2284a677c0'; //gmail

const baseAPI = `https://api.spoonacular.com/recipes/`;


// event listener for form submit
serachForm.addEventListener('submit', (e) => {
  e.preventDefault(); // stop form from refreshing the page
  searchQuery = e.target.querySelector('input').value; // gets user input from searchbox

  fetchSearchResult(searchQuery); //call fetch API to get search result
})


