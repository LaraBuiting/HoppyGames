const cardImages = [
    "img1.png", "img2.png", "img3.png", "img4.png",
    "img5.png", "img6.png", "img7.png", "img8.png",
    "img9.png", "img10.png", "img11.png", "img12.png"
];

let flippedCards = []; // Store flipped cards
let lockBoard = false; // To prevent multiple clicks at the same time

function createBoard() {
    const images = [...cardImages, ...cardImages]; // 12 pairs = 24 cards
    images.sort(() => 0.5 - Math.random());

    images.forEach((img) => {
        const card = document.createElement("div");
        card.classList.add("card");

        // Front (real image, initially hidden)
        const realImage = document.createElement("img");
        realImage.src = `../assets/img-memory/${img}`;
        realImage.classList.add("real-img");

        // Back (cover image)
        const coverImage = document.createElement("img");
        coverImage.src = "../assets/img-memory/cover.png";
        coverImage.classList.add("cover-img");

        // Add the images to the card
        card.appendChild(coverImage);
        card.appendChild(realImage);

        // Add click functionality to reveal the image
        card.addEventListener("click", () => {
            if (lockBoard) return; // Prevent clicking while the board is locked

            card.classList.add("revealed");
            flippedCards.push(card); // Store the flipped card

            // If two cards are flipped, check if they match
            if (flippedCards.length === 2) {
                lockBoard = true;

                const [card1, card2] = flippedCards;
                const img1 = card1.querySelector(".real-img").src;
                const img2 = card2.querySelector(".real-img").src;

                // If the cards match, leave them revealed
                if (img1 === img2) {
                    flippedCards = []; // Reset the flipped cards
                    lockBoard = false;
                } else {
                    // If they don't match, flip them back after a short delay
                    setTimeout(() => {
                        card1.classList.remove("revealed");
                        card2.classList.remove("revealed");
                        flippedCards = []; // Reset the flipped cards
                        lockBoard = false;
                    }, 1000); // 1 second delay
                }
            }
        });

        document.getElementById("game-board").appendChild(card);
    });
}

createBoard();