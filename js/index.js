fetch("https://dummyjson.com/recipes")
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    let recetas = data.recipes;
    let recipes = "";
    let recipesList = document.querySelector(".recipes-list");
    let cargarMasBoton = document.querySelector(".cargarMasBoton");

    recipesList.style.display = "flex";
    recipesList.style.flexWrap = "wrap";
    recipesList.style.justifyContent = "space-evenly";

    let cargarMas = 10;

    for (let i = 0; i < Math.min(10, recetas.length); i++) {
      recipes += `
        <article class="articles-recetas">
          <img src="${recetas[i].image}" alt="">
          <h2>Name: ${recetas[i].name}</h2>
          <p>Difficulty: ${recetas[i].difficulty}</p>
          <a href="./receta.html?id=${recetas[i].id}" class="verMasA">Ver más</a>
        </article>
      `;
    }
    recipesList.innerHTML = recipes;


    cargarMasBoton.addEventListener("click", function () {
      let nuevasRecetas = "";
      let limite = cargarMas + 10;

      for (let i = cargarMas; i < Math.min(limite, recetas.length); i++) {
        nuevasRecetas += `
          <article class="articles-recetas">
            <img src="${recetas[i].image}" alt="">
            <h2>Name: ${recetas[i].name}</h2>
            <p>Difficulty: ${recetas[i].difficulty}</p>
            <a href="./receta.html?id=${recetas[i].id}" class="verMasA">Ver más</a>
          </article>
        `;
      }

      recipesList.innerHTML += nuevasRecetas;
      cargarMas += 10;

      if (cargarMas >= recetas.length) {
        cargarMasBoton.style.display = "none";
      }
    });
  })
  .catch(function (error) {
    console.log("error: ", error);
  });