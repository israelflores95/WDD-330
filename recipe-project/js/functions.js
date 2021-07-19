const queryString = window.location.search
const urlParams = new URLSearchParams(queryString)
const recipeId = urlParams.get('id') // get passed in recipi Id

fetchRecipeDetail(recipeId); //call fetch API to get search result

// fetch API passing in user input for search.
async function fetchSearchResult(searchQuery) {

    const seachURL = `${baseAPI}complexSearch?apiKey=${apiKey}&analyze&query=${searchQuery}&number=35&maxReadyTime=90`;
  
    const response = await fetch(seachURL); //get API promise
    const data = await response.json(); // convert promise to JSON (usuable code)
  
    generateSearchResult(data.results) // Wrap results in HTML

    console.log(data.results);
  }

// fetch recipe with recipeId
async function fetchRecipeDetail(recipeId) {

  const seachURL = `${baseAPI}${recipeId}/information?apiKey=${apiKey}&includeNutrition=true`;

  const response = await fetch(seachURL); //get API promise
  const data = await response.json(); // convert promise to JSON (usuable code)

  const instructions = data.analyzedInstructions[0].steps;
  const ingredients = data.extendedIngredients;

  generatePageTitle(data);
  generateRecipe(data, instructions, ingredients)
  console.log(data, instructions, ingredients);
}




