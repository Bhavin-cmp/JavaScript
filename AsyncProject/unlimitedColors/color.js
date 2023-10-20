// generate a random color

const randomColor = function () {
  const hex = '0123456789ABCDEF';

  let color = '#';

  for (let index = 0; index < 6; index++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
};

let intervalId;

const startChangingColor = function () {
  intervalId = setInterval(changeBgColor, 1000);
  function changeBgColor() {
    console.log('ok');
    document.body.style.backgroundColor = randomColor();
  }
};
const stopChangingColor = function () {
  clearInterval(intervalId);
};

document.querySelector('#start').addEventListener('click', startChangingColor);

document.querySelector('#stop').addEventListener('click', stopChangingColor);
