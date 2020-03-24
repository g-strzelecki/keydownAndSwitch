let red = 125;
let green = 125;
let blue = 125;

document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;

const changeColor = (e) => {

  switch (e.keyCode) {
    case 38:
      document.body.style.backgroundColor = `rgb(${red < 255 ? ++red : red}, ${green < 255 ? ++green : green}, ${blue < 255 ? ++blue : blue})`;
      break;
    case 40:
      document.body.style.backgroundColor = `rgb(${red > 0 ? --red : red}, ${green > 0 ? --green : green}, ${blue > 0 ? --blue : blue})`;
      break;
  }
  document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
}

window.addEventListener('keydown', changeColor);
