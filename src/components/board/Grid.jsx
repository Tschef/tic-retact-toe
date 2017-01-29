import React, { PropTypes } from 'react';
import Cell from './Cell.jsx';
import styles from '../../index.scss';

'use strict';

class Grid extends React.Component {
    render() {
        const grid = this.props.grid.map((row, rowIndex) => {
            const cells = row.map((cell, cellIndex) => {
                const coords = `${rowIndex}_${cellIndex}`;

                return <Cell player={cell} key={cellIndex} onClickCallback={this.props.onClickCallback} row={rowIndex} col={cellIndex} cell={coords} />;
            }); 

            return <div className={styles.row} key={rowIndex}>{cells}</div>; 
        }); 
        
        return (
            <div className={styles.grid}>
                {grid}
            </div>
        );
    } 
}

Grid.propTypes = {     
    onClickCallback: PropTypes.func.isRequired,
    grid: PropTypes.array 
};

Grid.defaultProps = {     
    onClickCallback: () => {},
    grid: []
};

export default Grid;
