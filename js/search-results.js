let queryString = location.search;
let queryStringObj = new URLSearchParams(queryString);
let resultadoBuscador = queryStringObj.get("buscador");

let url = `https://dummyjson.com/recipes/search?q=${resultadoBuscador}`;
let recetaBuscada = document.querySelector(".search-results");

fetch(url)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        let recetas = data.recipes;

        if (recetas && recetas.length > 0) {
            let recetas_encontradas = "";
            for (let i = 0; i < recetas.length; i++) {
                recetas_encontradas += `
                    <article>
                        <div class="recipeCategoryDiv">
                            <h2>Name: ${recetas[i].name}</h2>
                            <h3>Difficulty: ${recetas[i].difficulty}</h3>
                            <img src="${recetas[i].image}" class="imageRecetasCategory"> 
                        </div>       
                    </article>
                `;
            }
            recetaBuscada.innerHTML = recetas_encontradas;
        } else {
            recetaBuscada.innerHTML = `<p>No se encontraron resultados para "${resultadoBuscador}".</p>`;
        }
    })
    .catch(function (error) {
        console.log("Error: ", error);
        recetaBuscada.innerHTML = `<p>Hubo un problema al buscar recetas. Intenta de nuevo más tarde.</p>`;
    });