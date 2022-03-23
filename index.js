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
  document.querySelector("#reseter").addEventListener("click", reset);

  async function spin() {
    console.log('spin');
  }

  async function spin() {
    console.log('spin');
    

    for (const door of doors) {
      const boxes = door.querySelector(".boxes");
      boxes.style.transform = `translateY(0px)`;
    }

  }

  totleItem = 10;

  function reset(){
    console.log('Click Reset...')
  }

  function init() {
    for (const door of doors) {
      for (let index = 0; index < totleItem; index++) {
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
    (door.clientHeight * totleItem)
    }px)`;
  }





  init();
})();
