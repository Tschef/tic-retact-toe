import React, {PropTypes} from 'react';
import styles from '../../index.scss';

'use strict';

class BoardSize extends React.Component {
    render() {
        return ( 
            <div>
                <span>Board Size</span>&nbsp; 
                <a href="#" className={styles.buttonSmall} data-width="3" onClick={this.props.onClickCallback}>3</a>&nbsp;
                <a href="#" className={styles.buttonSmall} data-width="4" onClick={this.props.onClickCallback}>4</a>&nbsp;
                <a href="#" className={styles.buttonSmall} data-width="5" onClick={this.props.onClickCallback}>5</a>&nbsp;
            </div>
        );
    }
}

BoardSize.propTypes = {     
    onClickCallback: PropTypes.func.isRequired
};

BoardSize.defaultProps = {     
    onClickCallback: () => {}
};

export default BoardSize;
