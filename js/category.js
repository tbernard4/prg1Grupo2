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
        let recetas_encontradas = "";
        let categoriaBuscada = document.querySelector(".categoriaBuscada");

        if (recetas.length === 0) {
            categoriaBuscada.innerHTML =
                `
                    <section class="imagen-no-recetas">
                        <img src="./images/no-results.png" alt="Sin recetas" class="imagen-no-recetas">
                    </section>
                `
        } else {
            for (let i = 0; i < recetas.length; i++) {
                recetas_encontradas += `
                    <article class="recipeCategory">
                        <div class="recipeCategoryDiv">
                            <h2>Name: ${recetas[i].name} </h2>
                            <h3>Difficulty: ${recetas[i].difficulty} </h3>
                            <img src="${recetas[i].image}" class="imageRecetasCategory"> 
                        </div>       
                    </article>
                `;
            }

            categoriaBuscada.innerHTML = recetas_encontradas;
            categoriaBuscada.style.display = "flex";
            categoriaBuscada.style.flexWrap = "wrap";
            categoriaBuscada.style.justifyContent = "center";
            categoriaBuscada.style.alignItems = "center";
            categoriaBuscada.style.padding = "20px";
        }
    })
    .catch(function (error) {
        console.log("Error: ", error);
    });