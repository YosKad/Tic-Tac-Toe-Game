const box = document.querySelectorAll(".box");
const resetBtn = document.querySelector("#resetBtn");
const xscore = document.querySelector("#xscore");
const oscore = document.querySelector("#oscore");

let turn = "x";
let x = 0;
let o = 0;
let winningElements = [];

box.forEach((e) => {
  e.onclick = () => {
    if (e.innerText == "") {
      e.innerText = turn;
      turn == "x" ? (turn = "o") : (turn = "x");
      checkForWin();
    }
  };
});

function checkForWin() {
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

  let draw = true;

  winCombination.forEach((e) => {
    if (
      box[e[0]].innerText == box[e[1]].innerText &&
      box[e[[1]]].innerText == box[e[2]].innerText &&
      box[e[0]].innerText
    ) {
      draw = false;
      setTimeout(() => {
        swal({
            title: "Game Over!",
            text: "Congratulations Player " + box[e[0]].innerText + " You are the winner!" ,
            icon: "success",
            color: "blue",
          });
      }, 1000);
      box[e[0]].classList.add("win");
      box[e[1]].classList.add("win");
      box[e[2]].classList.add("win");
      winningElements = [box[e[0]], box[e[1]], box[e[2]]];
      box[e[0]].innerText == "x" ? x++ : o++;
    }
  });

  if (draw) {
    let emptyBoxes = false;
    box.forEach((e) => {
      if (e.innerText == "") {
        emptyBoxes = true;
      }
    });

    if (!emptyBoxes) {
      setTimeout(() => {
        swal({
            title: "Game Over!",
            text: "It's a Draw!",
            icon: "info",
            color: "gray",
          });
      }, 1000);
    }
  }

  xscore.innerText = x;
  oscore.innerText = o;
}

resetBtn.onclick = () => reset();

function reset() {
  box.forEach((e) => (e.innerText = ""));
  winningElements.forEach((el) => el.classList.remove("win"));
  turn = "x";
  setTimeout(() => {
    xscore.innerText = x;
    oscore.innerText = o;
    x = 0;
    o = 0;
  }, 4000);
}
