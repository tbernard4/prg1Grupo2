fetch("https://dummyjson.com/recipes")
  .then(function (response) {
    return response.json();
  })

.then(function (data) {
  let recetas = data.results;
  let characters = "";
  let characterList = document.querySelector(".character-list");
  characterList.style.display = "flex"
  characterList.style.flexWrap = "wrap"
  characterList.style.justifyContent = "space-evenly"   
   
  for (let i = 0; i < recetas.length; i++) {
    characters += `
              <article>
                     <img src= ${personajes[i].image} alt=''>
                      <p>Name: ${personajes[i].name} </p>
                      <p>Status:${personajes[i].status} </p>
               </article>
           `;
  }
  console.log(characters);
  characterList.innerHTML = characters
})
  .catch(function (error) {
    console.log("error: ", error);
  });
