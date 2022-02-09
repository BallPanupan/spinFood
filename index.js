const items = [
    "❌",
    "⛄️",
    "🦄",
    "🍌",
    "💩",
    "👻",
    "😻",
    "💵",
    "🤡",
    "🦖",
    "🍎",
    "🍭",
    "❌",
    "⛄️",
    "🦄",
    "🍌",
    "💩",
    "👻",
    "😻",
    "💵",
    "🤡",
    "🦖",
    "🍎",
    "🍭",
    "❌"
  ];


(function () {
  const door = document.querySelectorAll(".door");
  const pool = ["❓"];

  const boxes = document.querySelectorAll(".boxes");

  document.querySelector("#spinner").addEventListener("click", spin);
  document.querySelector("#reseter").addEventListener("click", init);

  async function spin() {
    console.log('spin');
  }

  async function spin() {
    console.log('spin');
  }

  function init() {

  }


  for (let index = 0; index < boxes.length; index++) {
    const box = document.createElement("div");

    box.classList.add("box");
    box.textContent = pool[0];
    boxes[index].appendChild(box);
  }







  init();
})();
