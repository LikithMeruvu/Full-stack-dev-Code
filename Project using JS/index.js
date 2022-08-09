let fn= 0;
let sn = 0;


function addNames() {
  let FirstName = document.getElementById("first").value;
  let secondName = document.getElementById("second").value;
  fn = FirstName;
  sn = secondName;

  document.querySelector(".p1").innerHTML = `<h1>${FirstName}</h1>`;
  document.querySelector(".p2").innerHTML = `<h1>${secondName}</h1>`;
}

var imgArr = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg"];

let count = 0;
let score = 0;
function rollDice() {
  count++;
  if (count > 3) {
    alert("Out of Chances!");
    return (document.querySelector(".btnp1").innerHTML = `<h4>${score}</h4>`);
  } 
  else {
    var num = Math.floor(Math.random() * imgArr.length);
    document.canvas.src = "images/" + imgArr[num];
    score += num +1;
  }
}

function scoreP1(){
    document.querySelector('.btnp1').innerHTML = `<h4>${score}</h4>`;
}

let count1 = 0;
let score1 = 0;
function rollDice1() {
  count1++;
  if (count1 >= 4) {
    // console.log(count);
    // document.getElementById("dice1").disabled = true;
    alert("Out of Chances!");
    return (document.querySelector(".btnp2").innerHTML = `<h4>${score1}</h4>`) ,winner();;
  }
  var num1 = Math.floor(Math.random() * imgArr.length);
  document.canvas1.src = "images/" + imgArr[num1];
  score1 += num1+1;
}

function scoreP2() {
  document.querySelector(".btnp2").innerHTML = `<h4>${score1}</h4>`;
}

function winner() {
  if(fn === 0 && score > score1){
    return  document.getElementById("winName").innerHTML = `Player One Wins The Game`;
  }
  if(sn === 0 && score < score1){
    return  document.getElementById("winName").innerHTML = `Player Two Wins The Game`;
  }
  
  if(score > score1){
    return document.getElementById("winName").innerHTML = `${fn} Wins The Game`;
  }
  if(score < score1){
    return document.getElementById("winName").innerHTML = `${sn} Wins The Game`;
  }
  return document.getElementById("winName").innerHTML = `Tie Game Refresh the Page to play again`;
}

let chance = 3;

function info(){
  if(chance === 0) {chance++;}
  chance--;
  return document.getElementById("info1").innerHTML = `You have only ${chance} Chances Left`;
}

let chance1 = 3;

function info2(){
  if(chance1 === 0){chance1++;}
  chance1--;
  return document.getElementById("info2").innerHTML = `You have only ${chance1} Chances Left`;
}