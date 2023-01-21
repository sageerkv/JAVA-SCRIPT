const cells = document.querySelectorAll("td");
const resetButton = document.getElementById("reset");
const message = document.getElementById("message");

let currentPlayer = "X";

// Add an event listener to each cell
cells.forEach(function(cell) {
    cell.addEventListener("click", function(e) {
        // Check if the cell is already filled
        if (e.target.textContent === "") {
            // Update the cell with the current player's symbol
            e.target.textContent = currentPlayer;

            // Check for a win
            checkForWin();

            // Switch to the other player
            if (currentPlayer === "X") {
                currentPlayer = "O";
            } else {
                currentPlayer = "X";
            }
        }
    });
});

// Check for a win
function checkForWin() {
    // winning combinations
    const winningCombinations = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    // check all winning combinations
    for (let i = 0; i < winningCombinations.length; i++) {
        if (cells[winningCombinations[i][0]].textContent == currentPlayer
        && cells[winningCombinations[i][1]].textContent == currentPlayer
        && cells[winningCombinations[i][2]].textContent == currentPlayer) {
            message.textContent = currentPlayer + " has won!";
            disableCells();
            return;
        }
    }
    // check for draw
    let emptyCells = 0;
    cells.forEach(function(cell) {
        if (cell.textContent == "") {
            emptyCells++;
        }
    });
    if (emptyCells == 0) {
        message.textContent = "It's a draw";
        disableCells();
    }
}

// // Add an event listener to the reset button
resetButton.addEventListener("click", resetGame);

function resetGame() {
    // Clear the cells and reset the game
    cells.forEach(function(cell) {
        cell.textContent = "";
        cell.addEventListener("click", function(e) {
            // Check if the cell is already filled
            if (e.target.textContent === "") {
                // Update the cell with the current player's symbol
                e.target.textContent = currentPlayer;

                // Check for a win
                checkForWin();

                // Switch to the other player
                if (currentPlayer === "X") {
                    currentPlayer = "O";
                } else {
                    currentPlayer = "X";
                }
            }
        });
    });
    message.textContent = "";
    currentPlayer = "X";
}
