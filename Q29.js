// Function to determine the winner of the game
function determineWinner(player1Choice, player2Choice) {
    if (player1Choice === player2Choice) {
        return "It's a tie!";
    }
    if (
        (player1Choice === 'rock' && player2Choice === 'scissors') ||
        (player1Choice === 'scissors' && player2Choice === 'paper') ||
        (player1Choice === 'paper' && player2Choice === 'rock')
    ) {
        return "Player 1 wins!";
    } else {
        return "Player 2 wins!";
    }
}

// Function to start the game
function playGame() {
    const player1Choice = prompt("Player 1, enter your choice (rock, paper, or scissors):").toLowerCase();
    const player2Choice = prompt("Player 2, enter your choice (rock, paper, or scissors):").toLowerCase();

    // Validate input
    const validChoices = ['rock', 'paper', 'scissors'];
    if (!validChoices.includes(player1Choice) || !validChoices.includes(player2Choice)) {
        console.log("Invalid input! Please enter rock, paper, or scissors.");
        return;
    }

    // Determine the winner and display the result
    const result = determineWinner(player1Choice, player2Choice);
    console.log(`Player 1 chose: ${player1Choice}`);
    console.log(`Player 2 chose: ${player2Choice}`);
    console.log(result);
}

// Start the game
playGame();
