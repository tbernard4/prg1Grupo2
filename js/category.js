let queryString = location.search;
let queryStringObj = new URLSearchParams(queryString);

let busqueda = queryStringObj.get("q");

let url = `https://dummyjson.com/recipes/search?q=${busqueda}`;

fetch(url)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        let recetas = data.recipes;
        console.log(data);

        let recetas_encontradas = "";
        let categoriaBuscada = document.querySelector(".categoriaBuscada");

        for (let i = 0; i < recetas.length; i++) {
            recetas_encontradas += `
        <article class="recipe">
                    <h2>Name: ${recetas[i].name} </h2>
                    <img src= ${recetas[i].image}>
                    <p>Difficulty: ${recetas[i].difficulty} </p>
        </article>
      `;
        }

        categoriaBuscada.innerHTML = recetas_encontradas;
        categoriaBuscada.style.display = "flex";
        categoriaBuscada.style.flexWrap = "wrap";
        categoriaBuscada.style.justifyContent = "center";
        categoriaBuscada.style.alignItems = "center";
        categoriaBuscada.style.padding = "20px";

    })
    .catch(function (error) {
        console.log("Error: ", error);
    });