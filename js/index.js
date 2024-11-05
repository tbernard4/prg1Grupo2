fetch("https://dummyjson.com/recipes")
  .then(function (response) {
    return response.json();
  })
  .catch(function (error) {
    console.log("error: ", error);
  });