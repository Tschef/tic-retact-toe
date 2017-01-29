import React, { PropTypes } from 'react';
import Grid from '../board/Grid.jsx';
import styles from '../../index.scss';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'; 

'use strict';

class History extends React.Component {
    render() {
        if (this.props.winner === false) {
            return (<div/>);
        }

        const grids = this.props.data.map((grid, gridIndex) => {
            const player = (gridIndex % 2) + 1;
            return (
                <div key={gridIndex}>
                    <p> Step {gridIndex} - player {player}  </p>
                    <Grid grid={grid} />
                </div>
            );
        }); 
        
        return (
            <ReactCSSTransitionGroup transitionName="animation" transitionAppear={true} transitionAppearTimeout={500} transitionEnterTimeout={500} transitionLeaveTimeout={300}>
                <div className={styles.history}>
                    <h3>See the game history of your steps below</h3>
                    {grids}
                </div>
            </ReactCSSTransitionGroup>
        );
    }
}

History.propTypes = {     
    data: PropTypes.array,
    winner: PropTypes.any
};

History.defaultProps = {     
    data: [],
    winner: false
};

export default History;
