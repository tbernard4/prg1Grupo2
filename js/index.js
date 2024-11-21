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

    for (let i = 1; i <= 10; i++) {
      recipes += `
              <article class="articles-recetas">
                     <img src= ${recetas[i].image} alt=''>
                      <h2>Name: ${recetas[i].name} </h2>
                      <p>Difficulty: ${recetas[i].difficulty} </p>
                      <a href="./receta.html?id=${[i]}" class="verMasA">Ver mas</a>
               </article>
           `;
    }
    recipesList.innerHTML = recipes;


    let cargarMasBoton = document.querySelector(".cargarMasBoton")
    let cargarMas = 10

    cargarMasBoton.addEventListener("click", function () {
    let nuevasRecetas = ""
      for (let i = cargarMas; i < (cargarMas + 10); i++) {
        nuevasRecetas += `
                        <article class="articles-recetas">
                               <img src= ${recetas[i].image} alt=''>
                                <h2>Name: ${recetas[i].name} </h2>
                                <p>Difficulty: ${recetas[i].difficulty} </p>
                         </article>
                     `;
      }
    cargarMas += 10
    recipesList.innerHTML += nuevasRecetas
    });

})
.catch(function (error) {
    console.log("error: ", error);
})

