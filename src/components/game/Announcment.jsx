import React, { PropTypes } from 'react';
import styles from '../../index.scss';

'use strict';

class Announcement extends React.Component {
    render() {
        if (this.props.winner === false) {
            return  (<div/>);
        }

        const noWinner = 'Nobody wins this time! :)';
        const theWinner = `!! Player ${this.props.winner} won !!`;
        const msg = this.props.winner > 2 ? noWinner : theWinner;

        return (
            <div className={styles.announcment}>
                <h2>{msg}</h2>
            </div>
        );
    }
}

Announcement.propTypes = {     
    winner: PropTypes.any,
};

Announcement.defaultProps = {     
    winner: 0
};

export default Announcement;
