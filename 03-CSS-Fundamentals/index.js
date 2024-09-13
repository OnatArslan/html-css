const button = document.querySelector(`.show-btn`);
const text = document.querySelector(`.twy`);

button.addEventListener(`click`, (event) => {
  text.style.opacity = 0.8;
});
