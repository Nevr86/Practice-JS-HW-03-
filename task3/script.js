const redLight = document.getElementById('red');
const yellowLight = document.getElementById('yellow');
const greenLight = document.getElementById('green');

let currentColor = 'black';

function changeColor(light, color) {
    redLight.style.background = 'black';
    yellowLight.style.background = 'black';
    greenLight.style.background = 'black';

    light.style.background = color;
}

redLight.addEventListener('click', function () {
    currentColor = 'red';
    changeColor(redLight, currentColor);
});

yellowLight.addEventListener('click', function () {
    currentColor = 'yellow';
    changeColor(yellowLight, currentColor);
});

greenLight.addEventListener('click', function () {
    currentColor = 'green';
    changeColor(greenLight, currentColor);
});