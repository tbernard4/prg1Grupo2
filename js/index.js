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

    for (let i = 0; i < 10; i++) {
      recipes += `
        <article class="articles-recetas">
          <img src="${recetas[i].image}" alt="">
          <h2>Name: ${recetas[i].name}</h2>
          <p>Difficulty: ${recetas[i].difficulty}</p>
          <a href="./receta.html?id=${i}" class="verMasA">Ver más</a>
        </article>
      `;
    }
    recipesList.innerHTML = recipes;

    let cargarMas = 10;

    cargarMasBoton.addEventListener("click", function () {
      let nuevasRecetas = "";
      let limite = cargarMas + 10;

      if (limite < recetas.length) {
        for (let i = cargarMas; i < limite; i++) {
          nuevasRecetas += `
            <article class="articles-recetas">
              <img src="${recetas[i].image}" alt="">
              <h2>Name: ${recetas[i].name}</h2>
              <p>Difficulty: ${recetas[i].difficulty}</p>
              <a href="./receta.html?id=${i}" class="verMasA">Ver más</a>
            </article>
          `;
        }

        cargarMas += 10;
        recipesList.innerHTML += nuevasRecetas;

      } else {
        cargarMasBoton.style.display = "none";
      }
    });

    if (recetas.length <= cargarMas) {
      cargarMasBoton.style.display = "none";
    }

  })
  .catch(function (error) {
    console.log("error: ", error);
  });