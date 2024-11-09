let queryString = location.search;
let queryStringObj = new URLSearchParams(queryString);
let resultadoBuscador = queryStringObj.get("buscador");
console.log(resultadoBuscador);

let url = `https://dummyjson.com/recipes/?name=${resultadoBuscador}`
let recetaBuscada = document.querySelector(".search-results")
if(resultadoBuscador){

    fetch(url)

    .then(function(res){
        return res.json
    })
    .then(function(data){
        let receta = data.results;
    })

    let recetas_encontradas = ""

    for (let i = 0; i < receta.length; i++) {
        recetas_encontradas += `
            <article>
                   <img src= ${receta[i].image} alt=''>
             </article>
         `;
    }
    recetaBuscada.innerHTML = recetas_encontradas;


}else{
    characterList.innerHTML = `no se encontro la busqueda`;
}