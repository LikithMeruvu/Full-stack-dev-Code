let fn = 0;
let sn = 0;
let tn = 0;
let Fn = 0;

function addNames() {
  const FirstName = document.getElementById("first").value;
  const SecondName = document.getElementById("second").value;
  const ThirdName = document.getElementById("third").value;
  const FourthName = document.getElementById("fourth").value;

  fn = FirstName;
  sn = SecondName;
  tn = ThirdName;
  Fn = FourthName;

  document.querySelector(".p1").innerHTML = `<h1>${FirstName}</h1>`;
  document.querySelector(".p2").innerHTML = `<h1>${SecondName}</h1>`;
  document.querySelector(".p3").innerHTML = `<h1>${ThirdName}</h1>`;
  document.querySelector(".p4").innerHTML = `<h1>${FourthName}</h1>`;
}

var imgArr = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg"];

let count = 0;
let score = 0;
function rollDice() {
  count++;
  if (count > 3) {
    alert("Out of Chances!");
    return (document.querySelector(".pl1").innerHTML = `<h4>${score}</h4>`);
  } else {
    var num = Math.floor(Math.random() * imgArr.length);
    document.getElementById("i1").src = "images/" + imgArr[num];
    score += num + 1;
  }
}
function scoreP1() {
  document.querySelector(".scoreP1").innerHTML = `<h4>${score}</h4>`;
}

let count1 = 0;
let score1 = 0;
function rollDice1() {
  count1++;
  if (count1 > 3) {
    alert("Out of Chances!");
    return (document.querySelector(".pl2").innerHTML = `<h4>${score1}</h4>`);
  } else {
    var num1 = Math.floor(Math.random() * imgArr.length);
    document.getElementById("i2").src = "images/" + imgArr[num1];
    score1 += num1 + 1;
  }
}
function scoreP2() {
  document.querySelector(".scoreP2").innerHTML = `<h4>${score1}</h4>`;
}

let count2 = 0;
let score2 = 0;
function rollDice2() {
  count2++;
  if (count2 > 3) {
    alert("Out of Chances!");
    return (document.querySelector(".pl3").innerHTML = `<h4>${score2}</h4>`);
  } else {
    var num2 = Math.floor(Math.random() * imgArr.length);
    document.getElementById("i3").src = "images/" + imgArr[num2];
    score2 += num2 + 1;
  }
}
function scoreP3() {
  document.querySelector(".scoreP3").innerHTML = `<h4>${score2}</h4>`;
}

let count3 = 0;
let score3 = 0;
function rollDice3() {
  count3++;
  if (count3 > 3) {
    alert("Out of Chances!");
    return (document.querySelector(".pl4").innerHTML = `<h4>${score3}</h4>`), winner();
  } else {
    var num3 = Math.floor(Math.random() * imgArr.length);
    document.getElementById("i4").src = "images/" + imgArr[num3];
    score3 += num3 + 1;
  }
}
function scoreP4() {
  document.querySelector(".scoreP4").innerHTML = `<h4>${score3}</h4>`;
}

function winner() {
    if(fn === 0 && ismax(score,score1,score2,score3)) return document.getElementById("winName").innerHTML = `Player One Wins The Game`;
    if(sn === 0 && ismax(score1,score,score2,score3)) return document.getElementById("winName").innerHTML = `Player Two Wins The Game`;
    if(tn === 0 && ismax(score2,score,score1,score3)) return document.getElementById("winName").innerHTML = `Player Three Wins The Game`;
    if(Fn === 0 && ismax(score3,score,score1,score2)) return document.getElementById("winName").innerHTML = `Player Four Wins The Game`;

    if(ismax(score,score1,score2,score3)) return document.getElementById("winName").innerHTML = `${fn} Wins The Game`;
    if(ismax(score1,score,score2,score3)) return document.getElementById("winName").innerHTML = `${sn} Wins The Game`;
    if(ismax(score2,score,score1,score3)) return document.getElementById("winName").innerHTML = `${tn} Wins The Game`;
    if(ismax(score3,score,score1,score2)) return document.getElementById("winName").innerHTML = `${Fn} Wins The Game`;
}

function ismax(a,b,c,d){
  if(a >b && a >c && a>d) 
    return true;
  else 
    return false;
}

let chance = 3;

function info(){
  if(chance === 0) {chance++;}
  chance--;
  return document.getElementById("info1").innerHTML = `You have only ${chance} Chances Left`;
}

let chance1 = 3;

function info1(){
  if(chance1 === 0){chance1++;}
  chance1--;
  return document.getElementById("info2").innerHTML = `You have only ${chance1} Chances Left`;
}

let chance2 = 3;

function info2(){
  if(chance2 === 0) {chance2++;}
  chance2--;
  return document.getElementById("info3").innerHTML = `You have only ${chance2} Chances Left`;
}

let chance3 = 3;

function info3(){
  if(chance3 === 0){chance3++;}
  chance3--;
  return document.getElementById("info4").innerHTML = `You have only ${chance3} Chances Left`;
}