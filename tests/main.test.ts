import { boggleWordChecker } from "../src/main";

describe('Testing Boggle Word checker with correct input', () => {
    test('using the word "BINGO"', () => {

        const board = [
            ["I","L","A","W"],
            ["B","N","G","E"],
            ["I","U","A","O"],
            ["A","S","R","L"]
         ];
         const word = "BINGO"

        expect(boggleWordChecker(board,word)).toBe(true);
    });
});

describe('Testing Boggle Word checker with correct input', () => {
    test('using the word "LINGO"', () => {

        const board = [
            ["I","L","A","W"],
            ["B","N","G","E"],
            ["I","U","A","O"],
            ["A","S","R","L"]
         ];
         const word = "LINGO"

        expect(boggleWordChecker(board,word)).toBe(true);
    });
});

describe('Testing Boggle Word checker with correct input', () => {
    test('using the word "LINGO", and board with one element', () => {

        const board = [
            ["I"]
         ];
         const word = "LINGO"

        expect(boggleWordChecker(board,word)).toBe(false);
    });
});

describe('Testing Boggle Word checker with not existing word', () => {
    test('using the word "BUNGIE"', () => {

        const board = [
            ["I","L","A","W"],
            ["B","N","G","E"],
            ["I","U","A","O"],
            ["A","S","R","L"]
         ];
         const word = "BUNGIE"

        expect(boggleWordChecker(board,word)).toBe(false);
    });
});

describe('Testing Boggle Word checker with not existing word', () => {
    test('using the word "BINS"', () => {

        const board = [
            ["I","L","A","W"],
            ["B","N","G","E"],
            ["I","U","A","O"],
            ["A","S","R","L"]
         ];
         const word = "BINS"

        expect(boggleWordChecker(board,word)).toBe(false);
    });
});

describe('Testing Boggle Word checker with not existing word', () => {
    test('using the word "1"', () => {

        const board = [
            ["I","L","A","W"],
            ["B","N","G","E"],
            ["I","U","A","O"],
            ["A","S","R","L"]
         ];
         const word = "1"

        expect(boggleWordChecker(board,word)).toBe(false);
    });
});

describe('Testing Boggle Word checker with empty board', () => {
    test('using the word "BINGO"', () => {

        const board = [[]];
         const word = "BINGO"

        expect(boggleWordChecker(board,word)).toBe(false);
    });
});

describe('Testing Boggle Word checker with empty board', () => {
    test('using empty word', () => {

        const board = [[]];
         const word = ""

        expect(boggleWordChecker(board,word)).toBe(false);
    });
});

describe('Testing Boggle Word checker with empty word', () => {
    test('using empty word', () => {

        const board = [
            ["I","L","A","W"],
            ["B","N","G","E"],
            ["I","U","A","O"],
            ["A","S","R","L"]
         ];
         const word = ""

        expect(boggleWordChecker(board,word)).toBe(false);
    });
});

describe('Testing Boggle Word checker with large board size', () => {
    test('using the word "BINGO"', () => {

        const boardTest = [
            ["I","L","A","W"],
            ["B","N","G","E"],
            ["I","U","A","O"],
            ["A","S","R","L"]
         ];
         const word = "BINGO"

         const board = [];
         for(let i = 0; i < 50; i++) {
            board.push(...boardTest);
         }
         console.log(board.length);

        expect(boggleWordChecker(board,word)).toBe(false);
    });
});


describe('Testing Boggle Word checker with lowercase word', () => {
    test('using the word "bingo"', () => {

        const board = [
            ["I","L","A","W"],
            ["B","N","G","E"],
            ["I","U","A","O"],
            ["A","S","R","L"]
         ];
         const word = "bingo"

        expect(boggleWordChecker(board,word)).toBe(false);
    });
});