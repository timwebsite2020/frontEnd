// var hexEl = document.querySelector(".hexagon");
// var textEl = hexEl.querySelector(".text");
var nameEl;

function withmouse(x) {
  nameEl = document.querySelector('.' + sampleData[x].name);
  nameEl.classList.add("hover");
  nameEl.innerHTML = '<p class="text"></p>';
  // hexEl.querySelector(".text").textContent = "bye";
  nameEl.querySelector(".text").textContent = sampleData[x].message;
}
function withoutmouse(x) {
  nameEl = document.querySelector('.' + sampleData[x].name);
  nameEl.classList.remove("hover");
  nameEl.innerHTML = '<img class="icons" src="icons/' + sampleData[x].name + '.png">';
  // nameEl.querySelector(".text").textContent = '';
}