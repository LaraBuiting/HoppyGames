const highlight = document.querySelector('.highlight');

for (let i = 0; i < 12 * 18; i++) {
    const cell = document.createElement('div');
    cell.addEventListener('click', () => {
        cell.classList.toggle('active');
        console.log('clicked');
    });
    highlight.appendChild(cell);
}