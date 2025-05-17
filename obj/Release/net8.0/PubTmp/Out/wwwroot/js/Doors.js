const doorContainer = document.getElementById('doorContainer');
const secretButton = document.getElementById('secretButton');
const key1 = document.getElementById('key1');
const key2 = document.getElementById('key2');
const key3 = document.getElementById('key3');

// Variables to track door conditions
let condition1 = false;
let condition2 = false;
let condition3 = false;

// Function to check all conditions
function checkConditions() {
    condition1 = key1.innerHTML == "Key 1 - Key found" ? true : false;
    condition2 = key2.innerHTML == "Key 2 - Key found" ? true : false;
    condition3 = key3.innerHTML == "Key 3 - Key found" ? true : false;

    console.log(condition1);

    if (condition1 && condition2 && condition3) {
        doorContainer.classList.add('open');
        secretButton.style.display = 'block';
    } else {
        doorContainer.classList.remove('open');
        secretButton.style.display = 'none';
    }
}

checkConditions();
// Secret button click handler
secretButton.addEventListener('click', function () {
    // Change this URL to your desired destination
    window.location.href = 'https://example.com/secret-room.html';
});