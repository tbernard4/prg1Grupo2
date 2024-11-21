let queryString = location.search;
let queryStringObj = new URLSearchParams(queryString);
let recetaId = queryStringObj.get("id");
console.log("Receta ID: ", recetaId);
let url = `https://dummyjson.com/recipes`;

  fetch(url)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      let receta = data.recipes[recetaId]; 
      let recetaDetail = document.querySelector(".recipe-detail");
      recetaDetail.innerHTML = `
                    <h2>Name: ${receta.name} </h2>
                    <img src= ${receta.image}>
                    <p>Difficulty: ${receta.difficulty} </p>
                    <p>Ingredientes: ${receta.ingredients} </p>
                    <p>Instructions: ${receta.instructions} </p>

                      
      `;
    })
    .catch(function (error) {
      console.log("Error: ", error);
    });
