import React from 'react';
import TicTacToe from './components/pages/TicTacToe.jsx';
import Info from './components/pages/Info.jsx';
import Router from 'react-router/BrowserRouter'
import Match from 'react-router/Match'
import Link from 'react-router/Link'
import TicTacToeImage from '../assets/tictactoe.png';

'use strict';

const App = () => (
    <Router>
        <div>
            <header>
                <img src={TicTacToeImage} />
                &nbsp;
                &nbsp;
                <h1>Tic Re(t)act Toe</h1>
                <ul>
                    <li><Link to="/">Game</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><a href="https://github.com/Tschef/tic-retact-toe" target="_blank">Github</a></li>
                </ul>
            </header>

            <Match exactly pattern="/" component={TicTacToe} />
            <Match pattern="/about" component={Info} />
        </div>
    </Router>
);

export default App;
