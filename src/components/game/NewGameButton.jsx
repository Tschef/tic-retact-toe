import React, { PropTypes } from 'react';
import styles from '../../index.scss';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

'use strict'; 

class NewGameButton extends React.Component {
    render() {
        if (this.props.winner === false) {
            (<div/>)
        }

        return (
            <ReactCSSTransitionGroup transitionName="animation" transitionAppear={true} transitionAppearTimeout={500} transitionEnterTimeout={500} transitionLeaveTimeout={300}>
                <a href="#" className={styles.button} onClick={this.props.onClickCallback}>New Game</a>
            </ReactCSSTransitionGroup>                
        );
    }
}

NewGameButton.propTypes = {     
    onClickCallback: PropTypes.func.isRequired,
    winner: PropTypes.any
};

NewGameButton.defaultProps = {     
    onClickCallback: () => {},
    winner: false
};

export default NewGameButton;
