const clock = document.querySelector("#clock");

setInterval(() => {
  const myDate = new Date();
  clock.innerHTML = myDate.toLocaleTimeString();
}, 1000);
