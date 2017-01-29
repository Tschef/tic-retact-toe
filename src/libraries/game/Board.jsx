import HasEqualValues from '../array/HasEqualValues.jsx';

'use strict';

class Board {
    constructor(size, grid = []) {
        if (size < 2) {
            throw new Error('That would be a pretty short and boring game right? ...');
        }

        if (size > 5) {
            throw new Error('This would take all day pal. Please choose a number under under 6 ...');
        }

        this.grid = grid;

        if (this.grid.length === 0) {
            this.setup(size);
        }
    }

    /**
   * setup the board with a given size
   * 
   * @param {Number} size the size of the board
   * 
   * @returns {void} nothing
   */
    setup(size) {
        for (let i = 0; i < size; i++) {
            let row = [];

            for (let j = 0; j < size; j++) {
                row.push(0);
            }

            this.grid.push(row);
        }
    }

    /**
   * return the dimensions

   * @returns {Number} the board dimensions
   */
    getDimensions() {
        return this.grid.length;
    }

    /**
   * return the value of a cell
   * 
   * @param {Number} x the x coord 
   * @param {Number} y the y coord
   
   * @returns {Number|Boolean} the value of the cell
   */
    getCell(x, y) {
        return this.grid[x][y];
    }

    /**
   * assign the value of a cell
   * 
   * @param {Number} x the x coord 
   * @param {Number} y the y coord
   * @param {Number} player the player (1 or 2)
   * 
   * @returns {void} nothing   
   */
    setCell(x, y, player) {
        this.grid[x][y] = player;
    }

    /**
   * retrieve the coordinates of all empty cells
   * 
   * @returns {Array} an array of [x,y] array values
   */
    getAllEmptyCells() {
        return this.grid.map((row, rowIndex) => {
            return row.map((cell, cellIndex) => {
                if (cell === 0) {
                    return [rowIndex, cellIndex];
                }
            });
        }).reduce((a, b) => {
            return a.concat(b);
        }).filter((cell) => {
            return typeof cell !== 'undefined';
        });
    }

    /**
   * check for winning rows and return the winner if one found
   *
   * @returns {Number|Boolean} return the winner if one found or false
   */
    checkRows() {
        const boardWidth = this.getDimensions();

        for (let rowIndex = 0; rowIndex < boardWidth; rowIndex++) {
            let row = this.grid[rowIndex];

            if (HasEqualValues(row) && row[0] > 0) {
                return row[0];
            }
        }

        return false;
    }

    /**
   * check for winning columns and return the winner if one found
   *
   * @returns {Number|Boolean} return the winner if one found or false
   */
    checkColumns() {
        const boardWidth = this.getDimensions();

        for (let rowInd = 0; rowInd < boardWidth; rowInd++) {
            let col = [];

            for (let colInd = 0; colInd < boardWidth; colInd++) {
                col.push(this.getCell(colInd, rowInd));
            }

            if (HasEqualValues(col) && col[0] > 0) {
                return col[0];
            }
        }

        return false;
    }

    /**
   * check for winning columns and return the winner if one found
   *
   * @returns {Number|Boolean} return the winner if one found or false
   */
    checkDiagonals() {
        const boardWidth = this.getDimensions();
        let diags = {
            left: [],
            right: []
        };

        for (let i = 0; i < boardWidth; i++) {
            diags.left.push(this.getCell(i, i));
            diags.right.push(this.getCell(boardWidth - i - 1, i));
        }

        for (let key in diags) {
            let diag = diags[key];

            if (HasEqualValues(diag) && diag[0] > 0) {
                return diag[0];
            }
        }

        return false;
    }

    /**
   * check for ties
   *
   * @returns {Number|Boolean} return the a 3 if we have a tie or false
   */
    checkTies() {
        let tie = !this.grid.reduce((a, b) => {
            return a.concat(b);
        }).some((cell) => {
            return cell === 0;
        });

        if (tie) {
            return 3;
        }

        return false;
    }

    /**
    * return the player number that has won, or a 3 for a tie, or false if the game is still ongoing
    *
    * @returns {Number|Boolean} return the winner if one found, or a 3 for a tie, or false
    */
    hasWinner() {
        let checks = [
                this.checkRows(),
                this.checkColumns(),
                this.checkDiagonals(),
                this.checkTies()
            ];

        for (let index = 0; index < checks.length; index++) {
            let winner = checks[index];

            if (winner) {
                return winner;
            }
        }

        return false;
    }
}

export default Board;
