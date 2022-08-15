function PlaySong(a) {
  for (let i = 0; i < songarr.length; i++) {
    if (songarr[i] === a) {
      a.play();
      continue;
    }
    songarr[i].pause();
  }
}
function PauseSong(a) {
  a.pause();
}

let s1 = new Audio("Music/1.mp3");
let c1 = 0;

document.querySelector(".p1").addEventListener("click", function () {
  c1++;
  if (c1 % 2 !== 0)
    return (
      (document.querySelector(
        ".current"
      ).innerHTML = `Heat Waves Glass animals`),
      PlaySong(s1)
    );
  else return s1.pause();
});

document.querySelector(".bp1").addEventListener("click", () => PlaySong(s9));
document.querySelector(".fp1").addEventListener("click", () => PlaySong(s2));

let s2 = new Audio("Music/2.mp3");
let c2 = 0;

document.querySelector(".p2").addEventListener("click", function () {
  c2++;
  if (c2 % 2 !== 0)
    return (
      (document.querySelector(
        ".current"
      ).innerHTML = `Sweater wheather X after dark`),
      PlaySong(s2)
    );
  else return s2.pause();
});

document.querySelector(".bp2").addEventListener("click", function () {
  return PlaySong(s1);
});
document.querySelector(".fp2").addEventListener("click", function () {
  return PlaySong(s3);
});

let s3 = new Audio("Music/3.mp3");
let c3 = 0;

document.querySelector(".p3").addEventListener("click", function () {
  c3++;
  if (c3 % 2 !== 0)
    return (
      (document.querySelector(
        ".current"
      ).innerHTML = `Running up hill Totem Remix`),
      PlaySong(s3)
    );
  else return s3.pause();
});

document.querySelector(".bp3").addEventListener("click", function () {
  return PlaySong(s2);
});
document.querySelector(".fp3").addEventListener("click", function () {
  return PlaySong(s4);
});

let s4 = new Audio("Music/4.mp3");
let c4 = 0;

document.querySelector(".p4").addEventListener("click", function () {
  c4++;
  if (c4 % 2 !== 0)
    return (
      (document.querySelector(".current").innerHTML = `Fraco Dead To me`),
      PlaySong(s4)
    );
  else return s4.pause();
});

document.querySelector(".bp4").addEventListener("click", function () {
  return PlaySong(s3);
});
document.querySelector(".fp4").addEventListener("click", function () {
  return PlaySong(s5);
});

let s5 = new Audio("Music/5.mp3");
let c5 = 0;

document.querySelector(".p5").addEventListener("click", function () {
  c5++;
  if (c5 % 2 !== 0)
    return (
      (document.querySelector(".current").innerHTML = `Ghostamane Fed up`),
      PlaySong(s5)
    );
  else return s5.pause();
});

document.querySelector(".bp5").addEventListener("click", function () {
  return PlaySong(s4);
});
document.querySelector(".fp5").addEventListener("click", function () {
  return PlaySong(s6);
});

let s6 = new Audio("Music/6.mp3");
let c6 = 0;

document.querySelector(".p6").addEventListener("click", function () {
  c6++;
  if (c6 % 2 !== 0)
    return (
      (document.querySelector(".current").innerHTML = `Sia Unstoppable`),
      PlaySong(s6)
    );
  else return s6.pause();
});

document.querySelector(".bp6").addEventListener("click", function () {
  return PlaySong(s5);
});
document.querySelector(".fp6").addEventListener("click", function () {
  return PlaySong(s7);
});

let s7 = new Audio("Music/7.mp3");
let c7 = 0;

document.querySelector(".p7").addEventListener("click", function () {
  c7++;
  if (c7 % 2 !== 0)
    return (
      (document.querySelector(
        ".current"
      ).innerHTML = `WeekEnd Blinding Lights`),
      PlaySong(s7)
    );
  else return s7.pause();
});

document.querySelector(".bp7").addEventListener("click", function () {
  return PlaySong(s6);
});
document.querySelector(".fp7").addEventListener("click", function () {
  return PlaySong(s8);
});

let s8 = new Audio("Music/8.mp3");
let c8 = 0;

document.querySelector(".p8").addEventListener("click", function () {
  c8++;
  if (c8 % 2 !== 0)
    return (
      (document.querySelector(
        ".current"
      ).innerHTML = `Sia And Zayn Dusk Till Dawn`),
      PlaySong(s8)
    );
  else return s8.pause();
});

document.querySelector(".bp8").addEventListener("click", function () {
  return PlaySong(s7);
});
document.querySelector(".fp8").addEventListener("click", function () {
  return PlaySong(s9);
});

let s9 = new Audio("Music/9.mp3");
let c9 = 0;

document.querySelector(".p9").addEventListener("click", function () {
  c9++;
  if (c9 % 2 !== 0)
    return (
      (document.querySelector(".current").innerHTML = `Murder in my mind`),
      PlaySong(s9)
    );
  else return s9.pause();
});

document.querySelector(".bp9").addEventListener("click", function () {
  return PlaySong(s8);
});
document.querySelector(".fp9").addEventListener("click", function () {
  return PlaySong(s1);
});

let songarr = [s1, s2, s3, s4, s5, s6, s7, s8, s9];

s1.addEventListener("timeupdate", () => {
  let progress = parseInt((s1.currentTime / s1.duration) * 100);
  document.getElementById("ProgressBar").value = progress;
});
s2.addEventListener("timeupdate", () => {
  let progress = parseInt((s2.currentTime / s2.duration) * 100);
  document.getElementById("ProgressBar").value = progress;
});
s3.addEventListener("timeupdate", () => {
  let progress = parseInt((s3.currentTime / s3.duration) * 100);
  document.getElementById("ProgressBar").value = progress;
});
s4.addEventListener("timeupdate", () => {
  let progress = parseInt((s4.currentTime / s4.duration) * 100);
  document.getElementById("ProgressBar").value = progress;
});
s5.addEventListener("timeupdate", () => {
  let progress = parseInt((s5.currentTime / s5.duration) * 100);
  document.getElementById("ProgressBar").value = progress;
});
s6.addEventListener("timeupdate", () => {
  let progress = parseInt((s6.currentTime / s6.duration) * 100);
  document.getElementById("ProgressBar").value = progress;
});
s7.addEventListener("timeupdate", () => {
  let progress = parseInt((s7.currentTime / s7.duration) * 100);
  document.getElementById("ProgressBar").value = progress;
});
s8.addEventListener("timeupdate", () => {
  let progress = parseInt((s8.currentTime / s8.duration) * 100);
  document.getElementById("ProgressBar").value = progress;
});
s9.addEventListener("timeupdate", () => {
  let progress = parseInt((s9.currentTime / s9.duration) * 100);
  document.getElementById("ProgressBar").value = progress;
});


let a = 0;
document.addEventListener("keypress", function (e) {
  switch (e.key) {
    case "1":
      a++;
      if (a % 2 !== 0) PlaySong(s1);
      else PauseSong(s1);
      break;
    case "2":
      a++;
      if (a % 2 !== 0) PlaySong(s2);
      else PauseSong(s2);
      break;
    case "3":
      a++;
      if (a % 2 !== 0) PlaySong(s3);
      else PauseSong(s3);
      break;
    case "4":
      a++;
      if (a % 2 !== 0) PlaySong(s4);
      else PauseSong(s4);
      break;
    case "5":
      a++;
      if (a % 2 !== 0) PlaySong(s5);
      else PauseSong(s5);
      break;
    case "6":
      a++;
      if (a % 2 !== 0) PlaySong(s6);
      else PauseSong(s6);
      break;
    case "7":
      a++;
      if (a % 2 !== 0) PlaySong(s7);
      else PauseSong(s7);
      break;
    case "8":
      a++;
      if (a % 2 !== 0) PlaySong(s8);
      else PauseSong(s8);
      break;
    case "9":
      a++;
      if (a % 2 !== 0) PlaySong(s9);
      else PauseSong(s9);
      break;
  }
});
