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

function updateValues() {
    animateTime = rangeInput.value;
    waitTime = animateTime * 40;
    speedText.textContent = animateTime;
    waitingTimeText.textContent = waitTime;
}

function animateColorBoxes() {
    interval = setInterval(function() {
        const opacityValues = calculateOpacityValues();

        colorBoxes.forEach((box, index) => {
            const opacity = opacityValues[index];
            box.style.backgroundColor = `rgba(255, 0, 0, ${opacity})`;
        });

        currentIndex += direction;
        if (currentIndex >= colorBoxes.length - 2) {
            currentIndex = colorBoxes.length - 2;
            direction = -1;
        } else if (currentIndex < 0) {
            currentIndex = 0;
            direction = 1;
        }
    }, animateTime);
}

function calculateOpacityValues() {
    const opacityValues = [0, 0, 0, 0, 0, 0];
    if (direction === 1) {
        opacityValues[currentIndex - 1] = 0.25;
        opacityValues[currentIndex] = 0.5;
        opacityValues[currentIndex + 1] = 1;
    } else {
        opacityValues[currentIndex + 1] = 1;
        opacityValues[currentIndex + 2] = 0.5;
        opacityValues[currentIndex + 3] = 0.25;
    }
    return opacityValues;
}

btnStart.addEventListener('click', function() {
    if (!isAnimating) {
        updateValues();
        animateColorBoxes();
        isAnimating = true;
        audio.play().catch(function(error) {
            console.log(error.message);
        });
    }
});

btnStop.addEventListener('click', function() {
    clearInterval(interval);
    isAnimating = false;
    audio.pause();
});

rangeInput.addEventListener('input', function() {
    clearInterval(interval);
    isAnimating = false;
    updateValues();
    animateColorBoxes();
    isAnimating = true;
});

audio.addEventListener('ended', function() {
    audio.currentTime = 0;
    audio.play();
});