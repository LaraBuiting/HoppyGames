const highlight = document.querySelector('.highlight');
let score = 0;

for (let i = 0; i < 12 * 18; i++) {
    const cell = document.createElement('div');
    cell.addEventListener('click', () => {
        cell.classList.toggle('active');

        getActiveSquares();

        const result = getActiveSquares();

        if ([8, 9, 10, 11, 12].every(index => result[index]?.isActive)){
            [8, 9, 10, 11, 12].forEach(index => {
                const squares = document.querySelectorAll('.highlight div');
                squares[index].classList.add('foundWord');
                squares[index].classList.remove('active');

                const word = document.getElementById("candy");
                word.style.textDecoration = "line-through";
            });
            score ++;
            if (score === 14){
                console.log('you win')
            }
        }

        if ([22, 23, 24, 25, 26, 27].every(index => result[index]?.isActive)){
            [22, 23, 24, 25, 26, 27].forEach(index => {
                const squares = document.querySelectorAll('.highlight div');
                squares[index].classList.add('foundWord');
                squares[index].classList.remove('active');

                const word = document.getElementById("sunday");
                word.style.textDecoration = "line-through";
            });
            score ++;
            if (score === 14){
                win()
                console.log('you win')
            }
        }

        if ([44, 45, 46, 47, 48, 49, 50, 51, 52].every(index => result[index]?.isActive)){
            [44, 45, 46, 47, 48, 49, 50, 51, 52].forEach(index => {
                const squares = document.querySelectorAll('.highlight div');
                squares[index].classList.add('foundWord');
                squares[index].classList.remove('active');

                const word = document.getElementById("chocolate");
                word.style.textDecoration = "line-through";
            });
            score ++;
            if (score === 14){
                win()
                console.log('you win')
            }
        }

        if ([57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67].every(index => result[index]?.isActive)){
            [57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67].forEach(index => {
                const squares = document.querySelectorAll('.highlight div');
                squares[index].classList.add('foundWord');
                squares[index].classList.remove('active');

                const word = document.getElementById("celebration");
                word.style.textDecoration = "line-through";
            });
            score ++;
            if (score === 14){
                win()
                console.log('you win')
            }
        }

        if ([79, 80, 81, 82, 83, 84, 85, 86].every(index => result[index]?.isActive)){
            [79, 80, 81, 82, 83, 84, 85, 86].forEach(index => {
                const squares = document.querySelectorAll('.highlight div');
                squares[index].classList.add('foundWord');
                squares[index].classList.remove('active');

                const word = document.getElementById("chickens");
                word.style.textDecoration = "line-through";
            });
            score ++;
            if (score === 14){
                win()
                console.log('you win')
            }
        }

        if ([113, 114, 115, 116, 117, 118].every(index => result[index]?.isActive)){
            [113, 114, 115, 116, 117, 118].forEach(index => {
                const squares = document.querySelectorAll('.highlight div');
                squares[index].classList.add('foundWord');
                squares[index].classList.remove('active');

                const word = document.getElementById("easter");
                word.style.textDecoration = "line-through";
            });
            score ++;
            if (score === 14){
                win()
                console.log('you win')
            }
        }

        if ([148, 149, 150, 151, 152].every(index => result[index]?.isActive)){
            [148, 149, 150, 151, 152].forEach(index => {
                const squares = document.querySelectorAll('.highlight div');
                squares[index].classList.add('foundWord');
                squares[index].classList.remove('active');

                const word = document.getElementById("bunny");
                word.style.textDecoration = "line-through";
            });
            score ++;
            if (score === 14){
                win()
                console.log('you win')
            }
        }

        if ([186, 187, 188, 189, 190, 191].every(index => result[index]?.isActive)){
            [186, 187, 188, 189, 190, 191].forEach(index => {
                const squares = document.querySelectorAll('.highlight div');
                squares[index].classList.add('foundWord');
                squares[index].classList.remove('active');

                const word = document.getElementById("basket");
                word.style.textDecoration = "line-through";
            });
            score ++;
            if (score === 14){
                win()
                console.log('you win')
            }
        }

        if ([72, 90, 108, 126, 144].every(index => result[index]?.isActive)){
            [72, 90, 108, 126, 144].forEach(index => {
                const squares = document.querySelectorAll('.highlight div');
                squares[index].classList.add('foundWord');
                squares[index].classList.remove('active');

                const word = document.getElementById("tulip");
                word.style.textDecoration = "line-through";
            });
            score ++;
            if (score === 14){
                win()
                console.log('you win')
            }
        }

        if ([20, 38, 56, 74, 92, 110, 128, 146, 164].every(index => result[index]?.isActive)){
            [20, 38, 56, 74, 92, 110, 128, 146, 164].forEach(index => {
                const squares = document.querySelectorAll('.highlight div');
                squares[index].classList.add('foundWord');
                squares[index].classList.remove('active');

                const word = document.getElementById("jellybean");
                word.style.textDecoration = "line-through";
            });
            score ++;
            if (score === 14){
                win()
                console.log('you win')
            }
        }

        if ([103, 121, 139, 157, 175, 193].every(index => result[index]?.isActive)){
            [103, 121, 139, 157, 175, 193].forEach(index => {
                const squares = document.querySelectorAll('.highlight div');
                squares[index].classList.add('foundWord');
                squares[index].classList.remove('active');

                const word = document.getElementById("spring");
                word.style.textDecoration = "line-through";
            });
            score ++;
            if (score === 14){
                win()
                console.log('you win')
            }
        }

        if ([69, 87, 105, 123].every(index => result[index]?.isActive)){
            [69, 87, 105, 123].forEach(index => {
                const squares = document.querySelectorAll('.highlight div');
                squares[index].classList.add('foundWord');
                squares[index].classList.remove('active');

                const word = document.getElementById("eggs");
                word.style.textDecoration = "line-through";
            });
            score ++;
            if (score === 14){
                win()
                console.log('you win')
            }
        }

        if ([88, 106, 124, 142, 160, 178, 196].every(index => result[index]?.isActive)){
            [88, 106, 124, 142, 160, 178, 196].forEach(index => {
                const squares = document.querySelectorAll('.highlight div');
                squares[index].classList.add('foundWord');
                squares[index].classList.remove('active');

                const word = document.getElementById("sunrise");
                word.style.textDecoration = "line-through";
            });
            score ++;
            if (score === 14){
                win()
                console.log('you win')
            }
        }

        if ([107, 125, 143, 161].every(index => result[index]?.isActive)){
            [107, 125, 143, 161].forEach(index => {
                const squares = document.querySelectorAll('.highlight div');
                squares[index].classList.add('foundWord');
                squares[index].classList.remove('active');

                const word = document.getElementById("lamb");
                word.style.textDecoration = "line-through";
            });
            score ++;
            if (score === 14){
                win()
                console.log('you win')
            }
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

function win(){
    const popUp = document.getElementById("win_popup");
    popUp.style.display = 'block';
}