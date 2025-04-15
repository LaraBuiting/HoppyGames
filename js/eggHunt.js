const eggs = document.querySelectorAll('.egg');
const gameScreen = document.getElementById('game_screen');
const counter = document.getElementById('egg_counter');

let foundCount = 0;

const screenWidth = gameScreen.offsetWidth;
const screenHeight = gameScreen.offsetHeight;
const bottomBuffer = 50;

const gameScreenRect = gameScreen.getBoundingClientRect();
const trees = [document.getElementById('tree1'), document.getElementById('tree2')].map(tree => {
    const rect = tree.getBoundingClientRect();
    return {
        left: rect.left - gameScreenRect.left,
        top: rect.top - gameScreenRect.top,
        right: rect.left - gameScreenRect.left + tree.offsetWidth,
        bottom: rect.top - gameScreenRect.top + tree.offsetHeight,
        width: tree.offsetWidth,
        height: tree.offsetHeight,
        centerX: rect.left - gameScreenRect.left + tree.offsetWidth / 2,
        centerY: rect.top - gameScreenRect.top + tree.offsetHeight / 2,
        radius: tree.offsetWidth / 2
    };
});

const noSpawnZones = document.querySelectorAll('#sky_eggs_cannot_spawn1, #sky_eggs_cannot_spawn2, #sky_eggs_cannot_spawn3, #sky_eggs_cannot_spawn4, #sky_eggs_cannot_spawn5, #sky_eggs_cannot_spawn6, #sky_eggs_cannot_spawn7, #sky_eggs_cannot_spawn8, #sky_eggs_cannot_spawn9, #sky_eggs_cannot_spawn10');

function isInNoSpawnZone(x, y, eggWidth, eggHeight) {
    for (const zone of noSpawnZones) {
        const zoneRect = zone.getBoundingClientRect();
        const adjustedZoneRect = {
            left: zoneRect.left - gameScreenRect.left,
            top: zoneRect.top - gameScreenRect.top,
            right: zoneRect.left - gameScreenRect.left + zoneRect.width,
            bottom: zoneRect.top - gameScreenRect.top + zoneRect.height,
        };

        if (
            x + eggWidth > adjustedZoneRect.left &&
            x < adjustedZoneRect.right &&
            y + eggHeight > adjustedZoneRect.top &&
            y < adjustedZoneRect.bottom
        ) {
            return true;
        }
    }
    return false;
}

function isInTreeEdge(x, y, eggWidth, eggHeight) {
    for (const tree of trees) {
        const eggCenterX = x + eggWidth / 2;
        const eggCenterY = y + eggHeight / 2;

        const distanceToCenter = Math.sqrt(
            Math.pow(eggCenterX - tree.centerX, 2) + Math.pow(eggCenterY - tree.centerY, 2)
        );

        const isInsideTreeBounds =
            x + eggWidth > tree.left &&
            x < tree.right &&
            y + eggHeight > tree.top &&
            y < tree.bottom;

        const buffer = 1.3;
        const isInEdgeArea =
            distanceToCenter < tree.radius * buffer &&
            distanceToCenter > tree.radius / buffer;

        if (isInsideTreeBounds && isInEdgeArea) {
            return true;
        }
    }
    return false;
}

function placeEgg(egg) {
    const maxX = screenWidth - egg.offsetWidth;
    const maxY = screenHeight - egg.offsetHeight - bottomBuffer;

    let x, y;
    let tries = 0;
    const maxTries = 100;

    do {
        x = Math.floor(Math.random() * maxX);
        y = Math.floor(Math.random() * maxY);

        const onTreeEdge = isInTreeEdge(x, y, egg.offsetWidth, egg.offsetHeight);
        const insideNoSpawnZone = isInNoSpawnZone(x, y, egg.offsetWidth, egg.offsetHeight);

        if ((onTreeEdge || !trees.some(tree => {
            return (
                x + egg.offsetWidth > tree.left &&
                x < tree.right &&
                y + egg.offsetHeight > tree.top &&
                y < tree.bottom
            );
        })) && !insideNoSpawnZone) {
            break;
        }

        tries++;
    } while (tries < maxTries);

    if (tries >= maxTries) {
        console.warn('Max tries reached, fallback placement used.');
        x = Math.floor(Math.random() * maxX);
        y = Math.floor(Math.random() * maxY);
    }

    egg.style.left = `${x}px`;
    egg.style.top = `${y}px`;
}

function initEggs() {
    eggs.forEach(egg => {
        egg.classList.remove('found');
        egg.style.display = 'block';
        placeEgg(egg);

        egg.onclick = () => {
            if (!egg.classList.contains('found')) {
                egg.classList.add('found');
                egg.style.display = 'none';
                foundCount++;
                counter.textContent = `Eggs found: ${foundCount}`;

                if (foundCount === eggs.length) {
                    document.getElementById('win_popup').style.display = 'flex';
                }
            }
        };
    });
}

// Initialize eggs on first load
initEggs();

// Retry button logic
const retryBtn = document.getElementById('retry_btn');
if (retryBtn) {
    retryBtn.addEventListener('click', () => {
        foundCount = 0;
        counter.textContent = `Eggs found: 0`;
        document.getElementById('win_popup').style.display = 'none';
        initEggs();
    });
}