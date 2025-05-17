// Triangle target positions
const targetPositions = [
    { x: 150, y: 0 },    // Top Center
    { x: 0, y: 200 },  // Bottom Left
    { x: 300, y: 200 }   // Bottom Right
];

let pearlIndex = null;
let canGuess = false;
let shellMap = [0, 1, 2]; // shellId -> position index (0,1,2)

function setShellPosition(shellId, posIndex) {
    const shell = document.getElementById(`shell${shellId}`);
    const pos = targetPositions[posIndex];
    shell.style.transform = `translate(${pos.x}px, ${pos.y}px)`;
}

function startGame() {
    document.getElementById("message").textContent = "";
    canGuess = false;
    document.querySelectorAll('.pearl').forEach(p => p.style.display = 'none');
    // Reset shells
    for (let i = 0; i < 3; i++) {
        setShellPosition(i, i);
    }
    shellMap = [0, 1, 2];

    // Hide pearls
    

    // Random pearl position
    pearlIndex = Math.floor(Math.random() * 3);
    document.querySelector(`#shell${pearlIndex} .pearl`).style.display = 'block';
    // Hide pearl after a bit, then shuffle
    setTimeout(() => {
        document.querySelectorAll('.pearl').forEach(p => p.style.display = 'none');
        shuffleShells();
    }, 1000);
}

function shuffleShells() {
    let swaps = 5;
    let delay = 0;

    for (let i = 0; i < swaps; i++) {
        delay += 800;
        setTimeout(() => {
            let idx1 = Math.floor(Math.random() * 3);
            let idx2;
            do {
                idx2 = Math.floor(Math.random() * 3);
            } while (idx1 === idx2);
            let flag = false;
            // Swap their assigned positions
            if (pearlIndex == idx1 || pearlIndex == idx2) {
                if (pearlIndex == idx1) {
                    pearlIndex == idx2;
                } else {
                    pearlIndex == idx1;
                }
            }
            [shellMap[idx1], shellMap[idx2]] = [shellMap[idx2], shellMap[idx1]];




            // Animate them to new locations
            for (let s = 0; s < 3; s++) {
                setShellPosition(s, shellMap[s]);
            }

            // Adjust pearl index
            //   if (pearlIndex === idx1) pearlIndex = idx2;
            //  else if (pearlIndex === idx2) pearlIndex = idx1;

        }, delay);

    }

    setTimeout(() => {
        document.getElementById("message").textContent = "Which shell has the pearl?";
        canGuess = true;
    }, delay + 1000);
}

function guess(index) {

    if (!canGuess) return;
    const token = document.querySelector('input[name="__RequestVerificationToken"]').value;
    if (index === pearlIndex) {
        document.getElementById("message").textContent = "You found it! You've obtained first key! 🔑";
 
        fetch('?handler=CorrectGuess', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'RequestVerificationToken': token
            
            },
            body: JSON.stringify({})
        })
            .then(response => response.json())
            .then(data => {
                console.log("Correct guess count:", data.count);
                document.getElementById("key1header").innerText = "Key 1 🔑";
            });
        document.querySelector(`#shell${index} .pearl`).style.display = 'block';
    } else {
        document.getElementById("message").textContent = "Try again.";
    }

    canGuess = false;
}