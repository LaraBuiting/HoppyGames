const cardImages = [
    "img1.png", "img2.png", "img3.png", "img4.png",
    "img5.png", "img6.png", "img7.png", "img8.png",
    "img9.png", "img10.png", "img11.png", "img12.png"
];
let playerScores = {
    1: 0,
    2: 0
};
let flippedCards = [];
let lockBoard = false;
let matchedPairs = 0;
let wrongTurns = 0;
let bestScore = localStorage.getItem("memoryBestScore");

let isMultiplayer = false;
let currentPlayer = 1;
let scores = { 1: 0, 2: 0 };

function updateTurnCount() {
    document.getElementById("turn-count").textContent = wrongTurns;
}

function updateBestScoreDisplay() {
    const display = document.getElementById("best-score");
    display.textContent = bestScore !== null ? bestScore : "–";
}

function checkAndUpdateBestScore() {
    if (bestScore === null || wrongTurns < parseInt(bestScore)) {
        bestScore = wrongTurns;
        localStorage.setItem("memoryBestScore", bestScore);
        updateBestScoreDisplay();
    }
}

function updatePlayerDisplay() {
    const playerTurnEl = document.getElementById("player-turn");
    if (playerTurnEl && typeof currentPlayer !== "undefined") {
        playerTurnEl.textContent = `Player ${currentPlayer}'s turn`;
    }

    if (typeof playerScores !== "undefined") {
        const player1ScoreEl = document.getElementById("player1-score");
        const player2ScoreEl = document.getElementById("player2-score");

        if (player1ScoreEl) player1ScoreEl.textContent = `Player 1: ${playerScores[1]}`;
        if (player2ScoreEl) player2ScoreEl.textContent = `Player 2: ${playerScores[2]}`;
    }
}

function switchPlayer() {
    currentPlayer = currentPlayer === 1 ? 2 : 1;
    updatePlayerDisplay();
}

function createBoard() {
    const images = [...cardImages, ...cardImages];
    images.sort(() => 0.5 - Math.random());

    const gameBoard = document.getElementById("game-board");
    gameBoard.innerHTML = "";
    gameBoard.style.display = "grid";

    flippedCards = [];
    matchedPairs = 0;
    wrongTurns = 0;
    scores = { 1: 0, 2: 0 };
    currentPlayer = 1;

    updateTurnCount();
    updateBestScoreDisplay();
    updatePlayerDisplay();

    images.forEach((img) => {
        const card = document.createElement("div");
        card.classList.add("card");

        const realImage = document.createElement("img");
        realImage.src = `../assets/img-memory/${img}`;
        realImage.classList.add("real-img");

        const coverImage = document.createElement("img");
        coverImage.src = "../assets/img-memory/cover.png";
        coverImage.classList.add("cover-img");

        card.appendChild(coverImage);
        card.appendChild(realImage);

        card.addEventListener("click", () => {
            if (lockBoard || card.classList.contains("revealed")) return;

            card.classList.add("revealed");
            flippedCards.push(card);

            if (flippedCards.length === 2) {
                lockBoard = true;
                const [card1, card2] = flippedCards;
                const img1 = card1.querySelector(".real-img").src;
                const img2 = card2.querySelector(".real-img").src;

                if (img1 === img2) {
                    matchedPairs++;
                    if (isMultiplayer) {
                        scores[currentPlayer]++;
                        updatePlayerDisplay();
                    }
                    flippedCards = [];
                    lockBoard = false;

                    if (matchedPairs === 12) {
                        document.getElementById("win_popup").style.display = "flex";
                        if (!isMultiplayer) checkAndUpdateBestScore();
                    }
                } else {
                    if (!isMultiplayer) {
                        wrongTurns++;
                        updateTurnCount();
                    }
                    setTimeout(() => {
                        card1.classList.remove("revealed");
                        card2.classList.remove("revealed");
                        flippedCards = [];
                        lockBoard = false;
                        if (isMultiplayer) switchPlayer();
                    }, 1000);
                }
            }
        });

        gameBoard.appendChild(card);
    });
}

// 🎮 Menu buttons
document.getElementById("singleplayer-btn").addEventListener("click", () => {
    isMultiplayer = false;
    document.getElementById("menu").style.display = "none";
    document.querySelector(".game-wrapper").style.display = "block";
    document.getElementById("game-board").style.display = "grid";
    document.getElementById("player-info").style.display = "none";
    document.getElementById("high-score-wrapper").style.display = "block";
    createBoard();
});

document.getElementById("multiplayer-btn").addEventListener("click", () => {
    isMultiplayer = true;
    document.getElementById("menu").style.display = "none";
    document.querySelector(".game-wrapper").style.display = "block";
    document.getElementById("game-board").style.display = "grid";
    document.getElementById("player-info").style.display = "block";
    document.getElementById("high-score-wrapper").style.display = "none";
    createBoard();
});

// Retry button on win screen
document.getElementById("retry_btn").addEventListener("click", () => {
    document.getElementById("win_popup").style.display = "none";
    createBoard();
});

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("menu").style.display = "flex";
    document.querySelector(".game-wrapper").style.display = "none";
    document.getElementById("win_popup").style.display = "none";

    // Attach event listeners after DOM is fully loaded
    document.getElementById("singleplayer-btn").addEventListener("click", () => {
        isMultiplayer = false;
        document.getElementById("menu").style.display = "none";
        document.querySelector(".game-wrapper").style.display = "block";
        document.getElementById("game-board").style.display = "grid";
        document.getElementById("player-info").style.display = "none";
        document.getElementById("high-score-wrapper").style.display = "block";
        createBoard();
    });

    document.getElementById("multiplayer-btn").addEventListener("click", () => {
        isMultiplayer = true;
        document.getElementById("menu").style.display = "none";
        document.querySelector(".game-wrapper").style.display = "block";
        document.getElementById("game-board").style.display = "grid";
        document.getElementById("player-info").style.display = "block";
        document.getElementById("high-score-wrapper").style.display = "none";
        createBoard();
    });

    document.getElementById("retry_btn").addEventListener("click", () => {
        document.getElementById("win_popup").style.display = "none";
        createBoard();
    });
});