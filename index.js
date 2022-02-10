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
  const doors = document.querySelectorAll(".door");
  const pool = ["❓"];

  const boxes = document.querySelector(".boxes");
  const boxesClone = boxes.cloneNode(false);

  document.querySelector("#spinner").addEventListener("click", spin);
  document.querySelector("#reseter").addEventListener("click", init);

  async function spin() {
    console.log('spin');
  }

  async function spin() {
    console.log('spin');
  }

  function init() {
    for (const door of doors) {
      for (let index = 0; index < 2; index++) {
        const boxes = door.querySelector(".boxes");
        const box = document.createElement("div");

        box.classList.add("box");
        box.textContent = pool[0];
        boxes.appendChild(box);
        
      }

    }
  }

  for (const door of doors) {
    const boxes = door.querySelector(".boxes");
    const box = document.createElement("div");
    box.classList.add("box");
    box.textContent = pool[0];
    boxes.appendChild(box);

    boxes.style.transitionDuration = "1s";
    boxes.style.transform = `translateY(-${
    door.clientHeight * (pool.length - 1)
    }px)`;
  }














  init();
})();
