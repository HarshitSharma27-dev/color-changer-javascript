const colorName = document.getElementById("Color-name");
const red = document.getElementById("red-btn");
const blue = document.getElementById("blue-btn");
const brown = document.getElementById("brown-btn");
const violet = document.getElementById("violet-btn");


red.addEventListener("click", function () {

  document.body.style.backgroundColor = "red";

  colorName.innerText = "Current Color:Red";

});

blue.addEventListener("click", function () {

  document.body.style.backgroundColor = "blue";

  colorName.innerText = "Current Color:blue";

});
brown.addEventListener("click", function () {

  document.body.style.backgroundColor = "brown";

  colorName.innerText = "Current Color:brown";

});
violet.addEventListener("click", function () {

  document.body.style.backgroundColor = "violet";

  colorName.innerText = "current Color:violet";

});