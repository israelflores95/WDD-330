const serachForm = document.querySelector('form'); // select form for user input
const searchResultOutput = document.querySelector('.search-cards');

const appId = "a5ce5878";
const appKey = "76e3335921371cdb58467273143ec771";
// const baseURL = `https://api.edamam.com/search?q=${serachForm}&app_id=${appId}&app_key=${appKey}`;

// event listaner for form submit
serachForm.addEventListener('submit', (e) => {
  e.preventDefault(); // stop form from refreshing the page
  searchQuery = e.target.querySelector('input').value; // gets user input from searchbox

  fetchAPI(searchQuery); //call fetch API to get search result
})

// fetch API passing in user input for search.
async function fetchAPI(searchQuery) {
  const baseURL = `https://api.edamam.com/search?q=${searchQuery}&app_id=${appId}&app_key=${appKey}&to=20`; // base url with user input, appid, and appkey

  const response = await fetch(baseURL); //get API promise
  const data = await response.json(); // convert promise to JSON (usuable code)

  generateHTML(data.hits) // Wrap results in HTML
  console.log(data);
}

//wrap result into HTML
function generateHTML(results) {
  let HTML = '';
  results.map(result => { //loop through results and create HTML
    HTML += `
    <div class='cards'>
    <h3>${result.recipe.label}</h3>
    <img src="${result.recipe.image}">
    <div class='card-content'>
    <p>Total Time: ${result.recipe.totalTime} Minutes</p>
    <p>Dish Type: ${result.recipe.dishType}</p>
    <a href = '#'>View Recipe</a>
    </div>
    </div>
    `
  })

searchResultOutput.innerHTML = HTML;
}