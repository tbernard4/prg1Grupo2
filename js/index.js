fetch("https://dummyjson.com/recipes")
  .then(function (response) {
    return response.json();
  })

.then(function (data) {
  let recetas = data.recipes;
  let recipes = "";
  let recipesList = document.querySelector(".recipes-list");  
  recipesList.style.display = "flex"
  recipesList.style.flexWrap = "wrap"
  recipesList.style.justifyContent = "space-evenly"   
   
  for (let i = 0; i < 10; i++) {
    recipes += `
              <article class="articles-recetas">
                     <img src= ${recetas[i].image} alt=''>
                      <h2>Name: ${recetas[i].name} </h2>
                      <p>Instructions: ${recetas[i].instructions} </p>
               </article>
           `;
  }
  console.log(recipes);
  recipesList.innerHTML = recipes
})
  .catch(function (error) {
    console.log("error: ", error);
  });
