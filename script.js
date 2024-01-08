console.log("Welcome to Tic Tac Toe!");
let music = new Audio("/music.mp3");
let audioTurn = new Audio("/ting.mp3");
let gameOver = new Audio("/gameover.mp3");
let gameOver2 = false;

let turn = "X";

// function to change the turn
const changeTurn = ()=>{
    return turn === "X"?"0": "X";
}


//  function to check win
const checkWin = ()=>{
  let boxText = document.getElementsByClassName('boxtext');
  let wins = [
    [0, 1, 2, 5, 5, 0],
    [3, 4, 5, 5, 15, 0],
    [6, 7, 8, 5, 25, 0],
    [0, 3, 6, -5, 15, 90],
    [1, 4, 7, 5, 15, 90],
    [2, 5, 8, 15, 15, 90], 
    [0, 4, 8, 5, 15, 45],
    [2, 4, 6, 5, 15, 135]
  ]
  wins.forEach(e =>{
    if((boxText[e[0]].innerText === boxText[e[1]].innerText) && (boxText[e[1]].innerText === boxText[e[2]].innerText) && (boxText[e[0]].innerText !== "")){
      document.querySelector('.info').innerText = boxText[e[0]].innerText + " Won!";
      gameOver2 = true;
      document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "200px";
      boxText[e[0]].style.color = "rgb(128, 17, 239)";
      boxText[e[1]].style.color = "rgb(128, 17, 239)";
      boxText[e[2]].style.color = "rgb(128, 17, 239)";
      // document.querySelector('.line').style.width = `20vw`;
      // document.querySelector('.line').style.transform = `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`;
      // document.querySelector('.line').style.display = "inline";
      music.pause();
    }
  })
}


// Game Logic
// music.play();

let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element =>{
  let boxText = element.querySelector('.boxtext');
  element.addEventListener("click",()=>{
    if(boxText.innerText === ''){
      boxText.innerText = turn;
      turn = changeTurn();
      // audioTurn.play();
      checkWin();
      if(!gameOver2){
        document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
      }
    }
  })
})


// add onclick listener to reset button
reset.addEventListener("click",()=>{
  let boxTexts = document.querySelectorAll('.boxtext');
  Array.from(boxTexts).forEach(element =>{
    element.innerText = "";
    element.style.color = "black";
  });
  turn = "X";
  gameOver2 = false;
  document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
  document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "0px";
  // document.querySelector('.line').style.display = "none";
  // document.querySelector('.line').style.width = `0vw`;
})
