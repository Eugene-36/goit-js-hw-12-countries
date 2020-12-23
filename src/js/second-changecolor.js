import btnRefs from "../refs/change-color-refs"; // TODO: Доступ к нашим кнопкам
console.log(btnRefs);

const colors = [
  "#FFFFFF",
  "#2196F3",
  "#4CAF50",
  "#FF9800",
  "#009688",
  "#795548",
];
console.log(colors);

// TODO: Функции

function randomIntegerFromInterval(max) {
  return Math.floor(Math.random() * (max + 1));
}

function setRandomColor() {
  const color = colors[randomIntegerFromInterval(colors.length - 1)];
  console.log(color);
  document.body.style.backgroundColor = color;
}

let interval = undefined;

btnRefs.startChange.addEventListener(
  "click",
  (e) =>
    (interval = interval
      ? interval
      : setInterval(() => setRandomColor(), 1000)),
);

btnRefs.stopChange.addEventListener("click", (e) => clearInterval(interval));
