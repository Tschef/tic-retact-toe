import React, { PropTypes } from 'react';
import styles from '../../index.scss';

'use strict';

class Cell extends React.Component {
    /**
     * returns the class name of the string
     * 
     * @param {Number} player the player number
     * 
     * @returns {String} the class name
     */
    getClassAttributeFromPlayer(player) {
        player = parseInt(player);

        switch (player) {
            case 1:
                return styles.cell1;
            case 2:
                return styles.cell2;
        }

        return styles.cell;
    }

    render() {
        const className = this.getClassAttributeFromPlayer(this.props.player);

        return (
            <div className={className} onClick={this.props.onClickCallback} data-cell={this.props.cell}>
            </div>
        );
    }
}

Cell.propTypes = {     
    onClickCallback: PropTypes.func.isRequired,
    player: PropTypes.number,
    cell: PropTypes.string 
};

Cell.defaultProps = {     
    onClickCallback: () => {},
    player: 0,
    cell: ''
};

export default Cell;
