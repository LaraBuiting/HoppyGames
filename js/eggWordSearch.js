const highlight = document.querySelector('.highlight');

for (let i = 0; i < 12 * 18; i++) {
    const cell = document.createElement('div');
    cell.addEventListener('click', () => {
        cell.classList.toggle('active');

        getActiveSquares();

        const result = getActiveSquares();
        console.log(result);

        if ([8, 9, 10, 11, 12].every(index => result[index]?.isActive)){
            [8, 9, 10, 11, 12].forEach(index => {
                const squares = document.querySelectorAll('.highlight div');
                squares[index].classList.add('foundWord');
                squares[index].classList.remove('active');
            });
            console.log('candy is highlighted');
        }

    });
    highlight.appendChild(cell);
}

function getActiveSquares() {
    const squares = document.querySelectorAll('.highlight div');
    const activeStatus = [];

    squares.forEach((square, index) => {
        activeStatus.push({
            index: index,
            isActive: square.classList.contains('active')
        });
    });
    return activeStatus;
}