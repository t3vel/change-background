const button = document.querySelector('.change');
const color = document.querySelector('.color');
let colorsArr = [
    "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"
];
color.innerText = document.body.style.backgroundColor;

function getHexColor(arr) {
    let result = '';
    for (let i = 0; i < 6; i++) {
        result += arr[Math.floor(Math.random() * arr.length)];
    }
    return '#' + result;
}

button.addEventListener('click', () => {
    color.innerText = getHexColor(colorsArr);
    document.body.style.backgroundColor = getHexColor(colorsArr);;

});



