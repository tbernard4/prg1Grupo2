let url = "https://dummyjson.com/recipes/tags";

fetch(url)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    let tags = data;
    let categorias = "";
    let section = document.querySelector(".categoriesSection");

    for (let i = 0; i < tags.length; i++) {
      categorias += `
        <article class="tagsArticles">
          <a href="#" class="tag-a">${tags[i]}</a>
        </article>
      `;
    }

    section.innerHTML = categorias;
  })
  .catch(function (error) {
    console.log("Error: ", error);
  });
  