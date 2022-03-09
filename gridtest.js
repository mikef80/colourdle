function oneGrid(cols, i) {
    let square = document.createElement('div');
    let boardOne = document.querySelector('.board-1');
    boardOne.style.gridTemplateColumns = `repeat(${cols}, 0.25fr)`;
    square.textContent = '(';
    boardOne.appendChild(square);

    for (let j = 0; j < cols - 2; j++) {

        let square = document.createElement('div');
        let boardOne = document.querySelector('.board-1');
        // boardOne.style.gridTemplateColumns = `repeat(${cols}, 0.25fr)`;
        let id = (i * (cols * 3)) + (j + ((0 * cols) + 1));
        square.classList.add('square','container','animate__animated',`sq${id}`);
        square.id = id;
        boardOne.appendChild(square);

    }

    square = document.createElement('div');
    boardOne = document.querySelector('.board-1');
    boardOne.style.gridTemplateColumns = `repeat(${cols}, 0.25fr)`;
    square.textContent = ')';
    boardOne.appendChild(square);
}



function buildGrid(rows,cols) {
    for (let i = 0; i < rows; i++) {

        oneGrid(cols, i);
        // oneGrid(cols, i);

        /* let square = document.createElement('div');
        let boardOne = document.querySelector('.board-1');
        boardOne.style.gridTemplateColumns = `repeat(${cols}, 0.25fr)`;
        square.textContent = '(';
        boardOne.appendChild(square);

        for (let j = 0; j < cols - 2; j++) {

            let square = document.createElement('div');
            let boardOne = document.querySelector('.board-1');
            // boardOne.style.gridTemplateColumns = `repeat(${cols}, 0.25fr)`;
            let id = (i * (cols * 3)) + (j + ((0 * cols) + 1));
            square.classList.add('square','container','animate__animated',`sq${id}`);
            square.id = id;
            boardOne.appendChild(square);

        }

        square = document.createElement('div');
        boardOne = document.querySelector('.board-1');
        boardOne.style.gridTemplateColumns = `repeat(${cols}, 0.25fr)`;
        square.textContent = ')';
        boardOne.appendChild(square); */
    
        /* square = document.createElement('div');
        boardOne = document.querySelector('.board-1');
        boardOne.style.gridTemplateColumns = `repeat(${cols}, 0.25fr)`;
        square.textContent = '(';
        boardOne.appendChild(square);

        for (let j = 0; j < cols - 2; j++) {

            let square = document.createElement('div');
            let boardOne = document.querySelector('.board-1');
            // boardOne.style.gridTemplateColumns = `repeat(${cols}, 0.25fr)`;
            let id = (i * (cols * 3)) + (j + ((0 * cols) + 1));
            square.classList.add('square','container','animate__animated',`sq${id}`);
            square.id = id;
            boardOne.appendChild(square);

        }

        square = document.createElement('div');
        boardOne = document.querySelector('.board-1');
        boardOne.style.gridTemplateColumns = `repeat(${cols}, 0.25fr)`;
        square.textContent = ')';
        boardOne.appendChild(square); */
    }

  }