  const url = "https://api.spoonacular.com/recipes/complexSearch";
fetch(url, {
  method: "GET",
  headers: {
    "X-Auth-Token": "686e568d7f334f2293f63a20ad502174"
  }
})