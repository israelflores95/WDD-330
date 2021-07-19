//wrap search Results in HTML
function generateSearchResult(results) {
    let HTML = '';
    results.map(result => { //loop through results and create HTML
      HTML += `
      <div class='cards'>
      <h3>${result.title}</h3>
      <img src="${result.image}" alt="image of ${result.title}">
  
      <a href="detail-view.html?id=${result.id}">View Recipe</a>
      <a href="/recipe-project/my-recipes.html?${result.id}" class="btn" id="recipe-back-btn">Save Recipe</a>
      </div>
      `
    })
    
  searchResultOutput.innerHTML = HTML;
  }

  function generatePageTitle(data) {
      let HTML ='';
      HTML += `${data.title}`;

      detailRecipeTitle.innerHTML = HTML;
  }



//wrap recipe into HTML
function generateRecipe(data, instructions, ingredients) {
    let HTML = '';

    HTML += `
    <h2>${data.title}</h2>

    <div id="full-recipe">

    <div class="recipe-cards">
    <h3>Ingredients</h3>
    <ol id="ingredientsList">`
        ingredients.map( ingredientsAll => {
            HTML += `
                <li>${ingredientsAll.original}</li>
            `
        })
    HTML += `
    </ol>
    </div>`


//start recipe instructions
    HTML += `
    <div class="recipe-cards">

    <h3>Instructions</h3>
    <ol id="instructionsList">`

    instructions.map( instruction => {
        HTML += `
            <li>${instruction.step}</li>
        `
    })
    HTML += `
    </ol>
    </div>`
    
//start images
    HTML += `
    <div class="recipe-cards">
    <h3>Images</h3>
    <img src="${data.image}" alt="image of ${data.title}">    
    </div>
    `

//start recipe details
    HTML += `
    <div class="recipe-cards">
        <h3>Nutrition and Summary</h3>
        <p id="summary">${data.summary}</p>
    </div>

    </div>

    <a href="/recipe-project/index.html" class="btn" id="recipe-back-btn">Back to Search</a>
    <a href="/recipe-project/my-recipes.html?${data.id}" class="btn" id="recipe-back-btn">Save Recipe</a>
    `
    recipeOutput.innerHTML = HTML;
}
