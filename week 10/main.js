fetch('https://api.spoonacular.com/recipes') // call api url using fetch
    .then(res => res.json) //create variable res and converting res to a json object
    .then(data => console.log(data)) //logout the data