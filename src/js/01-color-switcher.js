const firstBtn = document.querySelector(['data-start']);
const secondBtn = document.querySelector(['data-stop'])

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }

