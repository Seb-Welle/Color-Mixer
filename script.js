const redSlider = document.querySelector("#red");
const greenSlider = document.querySelector("#green");
const blueSlider = document.querySelector("#blue");
const colorValue = document.querySelector("#color-value");
const btnRandom = document.querySelector("#btn-random");

function setBackgroundColor() {
  const red = rangeValueToHex(redSlider.value);
  const green = rangeValueToHex(greenSlider.value);
  const blue = rangeValueToHex(blueSlider.value);

  const color = "#" + red + green + blue;
  document.body.style.backgroundColor = color;
  colorValue.innerText = color;
  //console.log(colorValue);
}
setBackgroundColor();

function rangeValueToHex(value) {
  value = Number.parseInt(value);
  return ("0" + value.toString(16)).substr(-2);
}

document.body.addEventListener("input", setBackgroundColor);

btnRandom.addEventListener("click", function () {
  fetch("https://dummy-apis.netlify.app/api/color")
    .then(function (response) {
      return response.json();
    })
    .then(function (color) {
      //console.log(color);
      redSlider.value = color.rgb.r;
      greenSlider.value = color.rgb.g;
      blueSlider.value = color.rgb.b;
      setBackgroundColor();
    });
});
