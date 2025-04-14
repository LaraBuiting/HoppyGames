const eggs = document.querySelectorAll('.egg');
const gameScreen = document.getElementById('game_screen');
const counter = document.getElementById('egg_counter');

let foundCount = 0;

const screenWidth = gameScreen.offsetWidth;
const screenHeight = gameScreen.offsetHeight;

eggs.forEach(egg => {
    // Set random position
    const maxX = screenWidth - egg.offsetWidth;
    const maxY = screenHeight - egg.offsetHeight;
    const x = Math.floor(Math.random() * maxX);
    const y = Math.floor(Math.random() * maxY);

    egg.style.left = `${x}px`;
    egg.style.top = `${y}px`;

    egg.addEventListener('click', () => {
        if (!egg.classList.contains('found')) {
            egg.classList.add('found');
            egg.style.display = 'none';
            foundCount++;
            counter.textContent = `Eggs found: ${foundCount}`;
        }
    });
});