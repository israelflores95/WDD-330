const serachForm = document.querySelector('form'); // select form for user input
const viewRecipeBtn = document.querySelector('.detail-recipe');
const searchResultOutput = document.querySelector('.search-cards'); //insert results

const apiKey = '3e2ea81f31c843a3a252cade8934a3f5';
const baseAPI = `https://api.spoonacular.com/recipes/`;

// event listaner for form submit
serachForm.addEventListener('submit', (e) => {
  e.preventDefault(); // stop form from refreshing the page
  searchQuery = e.target.querySelector('input').value; // gets user input from searchbox

  fetchAPI(searchQuery); //call fetch API to get search result
})

// fetch API passing in user input for search.
async function fetchAPI(searchQuery) {

  const seachURL = `${baseAPI}complexSearch?apiKey=${apiKey}&analyze&query=${searchQuery}&number=35&maxReadyTime=90`;

  const response = await fetch(seachURL); //get API promise
  const data = await response.json(); // convert promise to JSON (usuable code)

  generateHTML(data.results) // Wrap results in HTML
  console.log(data.results);
}

//wrap result into HTML
function generateHTML(results) {
  let HTML = '';
  results.map(result => { //loop through results and create HTML
    HTML += `
    <div class='cards'>
    <h3>${result.title}</h3>
    <img src="${result.image}">

    <a href="/detail-view.html?id='${result.id}'">View Recipe</a>
    <a href="#">Save for later</a>
    </div>
    `
  })

searchResultOutput.innerHTML = HTML;
}