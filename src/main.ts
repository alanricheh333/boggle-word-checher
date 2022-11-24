import { board, guess } from "./input";


 function boggleWordChecker(board = [], guess = ''){
    //get rows and columns size
    const numRows = board.length;
    const numCols = board[0].length;

    //check if array is larger than 150
    if (numRows > 150 || numCols > 150) {
        console.log(
            'Please enter a matrix with a smaller size (less than 150 entries)'
        );
        return false;
    }

    //scan for the first letter of the word in the matrix
    //once found push into the queue along with the position in the matrix and the path to it
    let queue = [];
    for(let row of board) {
      row.forEach((letter, columnIndex) => {
         if (letter === guess[0]) {
            let rowIndex = board.indexOf(row);
            queue.push({
               position: {
                  row: rowIndex,
                  column: columnIndex
               },
               nextIndex: 1,
               path: [numCols * rowIndex + columnIndex]
            })
         }
      })
    }


    let searchWord = (currentItem, queue) => {
       //define all the possible moves from the current position
       let allMoves = [ 
       {row: currentItem.position.row - 1, col: currentItem.position.column },
       {row: currentItem.position.row + 1, col: currentItem.position.column },
       {row: currentItem.position.row, col: currentItem.position.column - 1 },
       {row: currentItem.position.row, col: currentItem.position.column + 1 },
       {row: currentItem.position.row - 1, col: currentItem.position.column - 1 },
       {row: currentItem.position.row - 1, col: currentItem.position.column + 1 },
       {row: currentItem.position.row + 1, col: currentItem.position.column - 1 },
       {row: currentItem.position.row + 1, col: currentItem.position.column + 1 }];
       //iterate over all the defined moves to search for the next letter
       allMoves.forEach((move) => {
         //get the index of the next letter depending on a defined move
          let index = numCols * move.row + move.col;
          //check if the next move is not outside the board
          if (move.row >= 0 && move.row < numRows && move.col >= 0 && move.col < numCols) {
            //check if the letter is the next letter in the guess word and it not already in the path of the current letter in board
             if (board[move.row][move.col] === guess[currentItem.nextIndex] && !currentItem.path.includes(index)) {
               //copy the current item to edit it
                let cloneItem = JSON.parse(JSON.stringify(currentItem));
                //edit the position to be the current position of the move
                cloneItem.position = { row: move.row, column: move.col };
                //increase the next index by one
                cloneItem.nextIndex += 1;
                //add the index of the letter in board to item path
                cloneItem.path.push(index);
                //add cloned item to queue to investigate later
                queue.push(cloneItem);
             }
          }
       });
    };
    //get every item in the queue and search for the word
    while (queue.length > 0) {
       let currentItem = queue.shift();
       //if the next index reaches the length of the guess word then the word is found in the board
       if (currentItem.nextIndex === guess.length) {
          return true;
       }
       searchWord(currentItem, queue);
    }
    return false;
 };

 console.log(boggleWordChecker(board, guess));