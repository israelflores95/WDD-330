fetch('https://api.spoonacular.com/recipes/complexSearch')
  .then(response => response.json())
  .then(data => console.log(data));