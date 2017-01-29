import React, { PropTypes } from 'react';
import Board from '../../libraries/game/Board.jsx';
import BoardSize from './BoardSize.jsx';
import NewGameButton from './NewGameButton.jsx';
import History from '../game/History.jsx';
import Grid from '../board/Grid.jsx';
import Announcment from './Announcment.jsx';
import styles from '../../index.scss';

'use strict';

class Game extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            width: this.props.width,
            player: 1,
            winner: false,
            history: []
        };

        // setup the board
        this.board = new Board(parseInt(this.props.width));

        // bind the functions to the game object
        this.reset = this.reset.bind(this);
        this.changeBoardSize = this.changeBoardSize.bind(this);
        this.playerMove = this.playerMove.bind(this);
    }

    /**
     * switch player
     * 
     * @returns {Number} the number of the next player that has his turn
     */
    switchPlayer() {
        return this.state.player === 1 ? 2 : 1;
    }

    /**
     * execute the move and check for a winner
     * 
     * @param {Number} x the x coordinate 
     * @param {Number} y the y coordinate
     * @param {Number} player the player value 
     * @param {Object} callback the callback if there is no winner
     * 
     * @returns {void} nothing
     */
    move(x, y, player, callback) {
        this.board.setCell(x, y, player);

        let history = this.state.history;
        // deep copy the grid
        history.push(JSON.parse(JSON.stringify(this.board.grid)));
        this.setState({history: history});        

        const winner = this.board.hasWinner();

        if (winner) {
            this.setState({winner: winner});
        } else {
            callback();
        }
    }

    /**
     * handle the player click move and switch to next player
     * 
     * @param {Object} event the event object
     * 
     * @return {void} nothing
     */
    playerMove(event) {
        if (this.state.winner) {
            return;
        }

        const [x, y] = event.target.dataset.cell.split('_');
        const cellEmpty = this.board.getCell(x, y) === 0;

        if (cellEmpty) {
            this.move(x, y, this.state.player, () => {
                this.setState({player: this.switchPlayer()});
            });
        }
    }

    /**
     * changes the board size

     * @param {Object} event the event object
     * 
     * @return {void} nothing
     */
    changeBoardSize(event) {
        const width = event.target.dataset.width;
        this.setState({ width: width }, this.reset);
    }

    /**
     * resets the board

     * @return {void} nothing
     */
    reset() {
        this.board = new Board(parseInt(this.state.width));
        this.setState({
            player: 1, 
            winner: false,
            history: []
        });
    }

    render() {
        return (
            <div className={styles.game}>
                <BoardSize onClickCallback={this.changeBoardSize} />
                <br />
                <Grid grid={this.board.grid} onClickCallback={this.playerMove.bind(this)} />
                <br />
                <Announcment winner={this.state.winner} />
                <NewGameButton winner={this.state.winner} onClickCallback={this.reset} />
                <br />
                <br />
                <History winner={this.state.winner} data={this.state.history} />
            </div>
        );
    }
}

Game.propTypes = {     
    width: PropTypes.number,
};     

Game.defaultProps = {
    width: 3
};

export default Game;
