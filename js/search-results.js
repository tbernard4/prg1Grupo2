let queryString = location.search;
let queryStringObj = new URLSearchParams(queryString);
let resultadoBuscador = queryStringObj.get("buscador");

let url = `https://dummyjson.com/recipes/search?q=${resultadoBuscador}`
let recetaBuscada = document.querySelector(".search-results")
if (resultadoBuscador) {

    fetch(url)
        .then(function (response) {
            return response.json()
        })
        .then(function (data) {
            let receta = data.recipes;
            console.log(data);

            let recetas_encontradas = ""

            for (let i = 0; i < receta.length; i++) {
                recetas_encontradas += `
            <article>
                   <img src= ${receta[i].image} alt=''>
             </article>
         `;
            }
            recetaBuscada.innerHTML = recetas_encontradas;
        })
        .catch(function(error){
            console.log("error: ", error)
        });

} else {
    recetaBuscada.innerText = `no se encontro la busqueda`;
}
