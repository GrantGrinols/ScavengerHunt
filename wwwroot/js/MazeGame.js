const gameContainer = document.getElementById('game-container');
const maze = document.getElementById('maze');
const start = document.getElementById('start');
const message = document.getElementById('message');
const instructions = document.getElementById('instructions');

let gameActive = false;
let playerInMaze = false;

// Maze configuration
const walls = [
    // Outer walls
    { x: 0, y: 0, width: 400, height: 20 },
    { x: 0, y: 380, width: 400, height: 20 },
    { x: 0, y: 0, width: 20, height: 400 },
    { x: 380, y: 0, width: 20, height: 400 },

    // Inner walls
    { x: 60, y: 20, width: 20, height: 140 },
    { x: 60, y: 140, width: 140, height: 20 },
    
    { x: 60, y: 240, width: 160, height: 20 },
    { x: 100, y: 340, width: 160, height: 20 },
    { x: 240, y: 60, width: 20, height: 220 },
    { x: 260, y: 60, width: 120, height: 20 },
    
    { x: 280, y: 180, width: 100, height: 20 },
    
    { x: 100, y: 280, width: 20, height: 80 },
    { x: 180, y: 280, width: 20, height: 80 },
    { x: 220, y: 280, width: 40, height: 40 },
    { x: 120, y: 280, width: 40, height: 40 },
    { x: 20, y: 180, width: 160, height: 20 },
    { x: 60, y: 220, width: 40, height: 20 },
    { x: 140, y: 200, width: 40, height: 20 },
    { x: 60, y: 240, width: 20, height: 120 },
    { x: 300, y: 280, width: 80, height: 20 },
    { x: 200, y: 140, width: 20, height: 120 },
    { x: 240, y: 360, width: 20, height: 20 },
    { x: 280, y: 100, width: 20, height: 100 },
    { x: 280, y: 100, width: 80, height: 20 },
    { x: 280, y: 220, width: 80, height: 20 },
    { x: 340, y: 240, width: 20, height: 40 },
    { x: 340, y: 120, width: 20, height: 40 },
    { x: 160, y: 60, width: 20, height: 80 },
    { x: 160, y: 60, width: 60, height: 20 },
    { x: 100, y: 80, width: 80, height: 20 },
    { x: 100, y: 40, width: 20, height: 80 }

];

const exit = { x: 340, y: 340, width: 40, height: 40 };

// Create the maze walls
function createMaze() {
    maze.innerHTML = '';

    // Create exit
    const exitElement = document.createElement('div');
    exitElement.id = 'exit';
    exitElement.style.left = exit.x + 'px';
    exitElement.style.top = exit.y + 'px';
    exitElement.style.width = exit.width + 'px';
    exitElement.style.height = exit.height + 'px';
    exitElement.textContent = 'Exit';
    maze.appendChild(exitElement);

    // Create walls
    walls.forEach((wall, index) => {
        const wallElement = document.createElement('div');
    //    if (index === walls.length - 1) {
    //        wallElement.className = 'test-wall'; //for testing purposes
   //     } else {
            wallElement.className = 'wall';
 //       }
        
        wallElement.style.left = wall.x + 'px';
        wallElement.style.top = wall.y + 'px';
        wallElement.style.width = wall.width + 'px';
        wallElement.style.height = wall.height + 'px';
        maze.appendChild(wallElement);
    });
}

// Check if mouse is in any wall
function isInWall(x, y) {
    for (const wall of walls) {
        if (x >= wall.x && x <= wall.x + wall.width &&
            y >= wall.y && y <= wall.y + wall.height) {
            return true;
        }
    }
    return false;
}

// Check if mouse is in exit
function isInExit(x, y) {
    return x >= exit.x && x <= exit.x + exit.width &&
        y >= exit.y && y <= exit.y + exit.height;
}

// Start the game
start.addEventListener('mouseover', () => {
    console.log("You're on start");
    if (!gameActive) {
        gameActive = true;
        start.style.display = 'none';
        maze.style.display = 'block';
        createMaze();
        message.textContent = 'Navigate to the exit!';
        instructions.textContent = 'Guide your mouse to the red exit without touching walls';
        playerInMaze = true;
    }
});

// Check for wall collisions or victory
gameContainer.addEventListener('mousemove', (e) => {
    if (!gameActive || !playerInMaze) return;

    const rect = gameContainer.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    if (isInWall(x, y)) {
        playerInMaze = false;
        message.textContent = 'You hit a wall! Try again.';
        setTimeout(resetGame, 1500);
    } else if (isInExit(x, y)) {
        playerInMaze = false;
        message.textContent = 'You won! Congratulations! Key obtained: 🔑';
        sendKey();
        setTimeout(resetGame, 2000);
    }
});

// Reset the game
function resetGame() {
    gameActive = false;
    playerInMaze = false;
    maze.style.display = 'none';
    start.style.display = 'flex';
    message.textContent = '';
    instructions.textContent = 'Hover over the green start point to begin';
}
//sends the key to backend
function sendKey() {
    document.getElementById("key3header").innerText = "Key 3 🔑";
    const token = document.querySelector('input[name="__RequestVerificationToken"]').value;

    fetch('?handler=CorrectMaze', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'RequestVerificationToken': token

        },
        body: JSON.stringify({})
    })
        .then(response => response.json())
}