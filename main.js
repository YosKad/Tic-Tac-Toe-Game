const box = document.querySelectorAll(".box");
const resetBtn = document.querySelector("#resetBtn");
const xscore = document.querySelector("#xscore");
const oscore = document.querySelector("#oscore");

let turn = "x";
let x = 0;
let o = 0;

box.forEach((e) => {
  e.onclick = () => {
    if (e.innerText == "") {
      e.innerText = turn;
      turn == "x" ? (turn = "o") : (turn = "x");
      winner();
    }
  };
});

function winner() {
  const winCombination = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  winCombination.forEach((e) => {
    if (
      box[e[0]].innerText == box[e[1]].innerText &&
      box[e[[1]]].innerText == box[e[2]].innerText &&
      box[e[0]].innerText
    ) {
      alert(box[e[0]].innerText + " won!");
      
      box[e[0]].classList.add("win");
      box[e[1]].classList.add("win");
      box[e[2]].classList.add("win");
      box[e[0]].innerText == "x" ? x++ : o++;
    //   reset();
    }
    xscore.innerText = x;
    oscore.innerText = o;
  });
}

resetBtn.onclick = () => reset();
function reset() {
  box.forEach((e) => (e.innerText = ""));
  turn = "x";
  setTimeout(() => {
    xscore.innerText = x;
    oscore.innerText = o;
    x = 0;
    o = 0;
  }, 4000);
}
