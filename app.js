console.log("Hello World");
let music = new Audio("music.mp3");
let ting = new Audio("ting.mp3");
let gameover = new Audio("gameover.mp3");
let turn = "X";
//function to change the turn
const changeTurn = () => {
  return turn === "X" ? "0" : "X";
};

//function to check win
let state = false;
const checkWin = () => {
  let wins = [
    [0, 1, 2, 0, 10, 0],
    [3, 4, 5, 0, 20, 0],
    [6, 7, 8, 0, 30, 0],
    [0, 3, 6, -10, 25, 90],
    [1, 4, 7, 0, 25, 90],
    [2, 5, 8, 10, 25, 90],
    [0, 4, 8,0, 15, 45],
    [2, 4, 6, 0, 25, 135],
  ];
  wins.forEach((e) => {
    let boxtext = document.getElementsByClassName("boxtext");

    if (
     ( boxtext[e[0]].innerText === boxtext[e[1]].innerText) &&
     ( boxtext[e[2]].innerText === boxtext[e[1]].innerText )&&
     ( boxtext[e[0]].innerText !== "*")
    ) {
        console.log( document.getElementsByClassName("line"))
        document.getElementsByClassName("line")[0].style.width="30vw";
      document.querySelector(".info").innerText =
        boxtext[e[0]].innerText + " Won";

        //
        setTimeout(() => {
        Array.from(boxtext).forEach((element) => {
          element.innerText = "*";
        });
        document.getElementsByClassName("line")[0].style.width = "0px";
        document
        .querySelector(".imgbox")
        .getElementsByTagName("img")[0].style.width = "0px";
        turn = "X";
        document.getElementsByClassName("info")[0].innerText = `Turn for ${turn}`;
    }, 2000);


        //

      music.pause();
      gameover.play();
      state = true;

      document
        .querySelector(".imgbox")
        .getElementsByTagName("img")[0].style.width = "180px";
      document.querySelector(
        ".line"
      ).style.transform = `translate(${e[3]}vw,${e[4]}vh) rotate(${e[5]}deg)`;
    }
  });
};
//game logic
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach((element) => {
  let e = element.querySelector(".boxtext");
  element.addEventListener("click", () => {
    if (e.innerText === "*") {
      e.innerText = turn;
      turn = changeTurn();
      ting.play();
      checkWin();

      if (!state) {
        document.getElementsByClassName(
          "info"
        )[0].innerText = `Turn for ${turn}`;
      }
    }
  });
});

document.getElementById("reset").addEventListener("click", () => {
  let boxtext = document.getElementsByClassName("boxtext");
  Array.from(boxtext).forEach((element) => {
    element.innerText = "*";
  });
  turn = "X";
  document.getElementsByClassName("info")[0].innerText = `Turn for ${turn}`;

document
        .querySelector(".imgbox")
        .getElementsByTagName("img")[0].style.width = "0px";
    document.getElementsByClassName("line")[0].style.width = "0px";
  state = false;
});
