const firstBtn = document.querySelector('[data-start]');
const secondBtn = document.querySelector('[data-stop]');
let changeTime

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function changeBackgroundColor() {
  changeTime = setInterval(() => {
    const color = getRandomHexColor();
    document.body.style.backgroundColor = color;
  }, 1000)
}


firstBtn.addEventListener("click", () => {
  firstBtn.disabled = true;
  secondBtn.disabled = false;
  changeBackgroundColor();
});

secondBtn.addEventListener("click", () => {
  firstBtn.disabled = false;
  secondBtn.disabled = true;
  clearInterval(changeTime);
});



