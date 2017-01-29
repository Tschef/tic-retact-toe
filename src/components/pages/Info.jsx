import React from 'react';
import info from '../../../README.md';
import styles from '../../index.scss';

'use strict'; 

const Info = () => (
    <div className={styles.info} dangerouslySetInnerHTML={{__html: info}}></div>
);

export default Info;
