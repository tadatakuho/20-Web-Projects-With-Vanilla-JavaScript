const movieSelectBox = document.getElementsByClassName("movie-select-box")[0];

movieSelectBox.addEventListener("change", () => {
  console.log(movieSelectBox.value);
});
