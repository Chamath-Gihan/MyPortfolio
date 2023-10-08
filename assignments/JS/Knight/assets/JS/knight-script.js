const colorBoxes = document.querySelectorAll('.colour-box div div');
const btnStart = document.getElementById('button-start');
const btnStop = document.getElementById('button-stop');
const rangeInput = document.getElementById('range');
const speedText = document.getElementById('speed');
const waitingTimeText = document.getElementById('waiting-time');
const audio = new Audio('assets/knightRider-music/knightrider.mp3');

let interval;
let animateTime = 50;
let waitTime = 2000;
let isAnimating = false;
let direction = 1;
let currentIndex = 0;