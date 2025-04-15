const cardImages = [
    "img1.png", "img2.png", "img3.png", "img4.png",
    "img5.png", "img6.png", "img7.png", "img8.png",
    "img9.png", "img10.png", "img11.png", "img12.png"
];

let flippedCards = [];
let lockBoard = false;
let matchedPairs = 0;
let wrongTurns = 0;

// Load the best score from localStorage
let bestScore = localStorage.getItem("memoryBestScore");

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

function createBoard() {
    const images = [...cardImages, ...cardImages];
    images.sort(() => 0.5 - Math.random());

    const gameBoard = document.getElementById("game-board");
    gameBoard.innerHTML = "";

    flippedCards = [];
    matchedPairs = 0;
    wrongTurns = 0;
    updateTurnCount();
    updateBestScoreDisplay();

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
                    flippedCards = [];
                    lockBoard = false;

                    if (matchedPairs === 12) {
                        // Show win screen
                        document.getElementById("win_popup").style.display = "flex";
                        checkAndUpdateBestScore();
                    }
                } else {
                    wrongTurns++;
                    updateTurnCount();

                    setTimeout(() => {
                        card1.classList.remove("revealed");
                        card2.classList.remove("revealed");
                        flippedCards = [];
                        lockBoard = false;
                    }, 1000);
                }
            }
        });

        gameBoard.appendChild(card);
    });
}

document.getElementById("retry_btn").addEventListener("click", () => {
    // Hide the win popup
    document.getElementById("win_popup").style.display = "none";
    // Restart the game
    createBoard();
});

// Initialize the game board
createBoard();