# The Tic Re(t)act Toe project

## General

The intent of this project is to have a well structured simple tic tac toe implementation with some nice extra features.
While playing, the game keeps track of the board state, and later produces a history of the moves.
To keep it simple, no other tools like e.g. redux were used.
The size of the board can be changed, to allow longer and more interesting games.


## The game

The game starts with player 1 making his **X** and then player 2 making his **O**.
If one of the later explained conditions is met, the game finishes and shows the game history.


### Board and Logic

In this game we have 2 players, player 1 and player 2. Player 1 plays with the **X** symbol, and player 2 with the **O** symbol.
The state of the board is kept in a simple 2D matrix. The initial state of the board has all cells empty. (For the example we will use a 3x3 matrix)

```
[[0, 0, 0],
 [0, 0, 0],
 [0, 0, 0]]
```

 If player 1 makes his **X** in the upper left corner, that would conclude in the following setup:

```
[[1, 0, 0],
 [0, 0, 0],
 [0, 0, 0]]
```
 
If player 2 now puts his **O** in the middle, then we would have the following matrix:

```
[[1, 0, 0],
 [0, 2, 0],
 [0, 0, 0]]
```

As we can see, 0 are the cells where a player cann still make either an **O** or a **X**.

There are 3 logical winning conditions: (all shown with player 1 winning here)

**Row**:

```
[[1, 1, 1],
 [0, 2, 0],
 [2, 2, 0]]
```

**Column**

```
[[1, 1, 0],
 [1, 2, 2],
 [1, 2, 0]]
```

**Diagonal**

```
[[1, 2, 1],
 [2, 1, 2],
 [1, 2, 0]]
```


There is a simple helper function to check if all values in an array are the same.
The board logic checks if there is a winner after every move.
It returns either the number of the winning player (1 or 2) or a 0 if there is a tie, or false if the game is ongoing.
It does this by checking the 2 diagonal rows, and all the rows and columns after every move and informs the game component.


## Application code and structure

* The code implementation is done in ES6/JSX syntax.
* The components are kept in the src/components folder.
* For the sake of simplicity all files have the ending jsx.
* The libraries and helper functions are kept in the src/libraries folder.
* Most components are actual class extensions of React.Component. Where applicable, I use pure components, whenever there is no state or heavy logic involved.


The application consists of three main categories of components.

* page components
* game components
* board components


### Page components

There are only 2 pages, the **Tic Tac Toe** page component itself, and this very **Info** page component, that you are reading right now.


### Game components

The **Game** component takes care of the state of the game, of the history at each player move, of the status of the game in terms of winning, restarting and changing the board size.
It keeps track of the grid matrix changes, by simply having them stored in a history state.

The history state is used in the **History** component. When the game ends, you can see the boards at every player step that concluded in the outcome of the game.
The logic of the board is kept separate and will be discussed later.

The **BoardSize** component makes it possible to change the size of the board between 3 and 5. It automatically resets the game as well, because the matrix changes.

The **NewGameButton** component allows to reset the game when the last game has ended.



### Board components

The **Cell** component prints a cell, according to a player status. It also takes care when a player clicks on a cell, and executes the callback (that it got from the game component in our case).

The **Grid** component gets a matrix from the game components and prints all rows and its cells, according to the board size.



## Technologies, Tools and Libraries

I use [ESLint](http://eslint.org/) to lint JavaScript/React code, to ensure code quality and follow specific style guidelines.

I use [webpack](https://webpack.github.io/) for asset bundling and minifaction, as well as to load this very document that you are reading now and to translate it to html the browser can read.
Webpack and [Babel](http://babeljs.io/) take care of the transpiling to ES5 to ensure wide browser support.
In development mode there is also HMR (Hot Module Replacment) which makes saved changes instantly accesible in the browser.
As a last option it produces production ready asset bundles with timestamping enabled.

I use [React Router](https://react-router.now.sh/) to do the simple navigation.

I use SASS to have variables, OO functionality and nesting for the CSS output. The CSS is also enhanced with cross browser output over [PostCSS](http://postcss.org/).
The SASS files are directly loaded into the components and produce their local CSS classes.

I use [Markdown](https://en.wikipedia.org/wiki/Markdown) for the readme and the webpack markdown parser and converter to show this exact page in html format.

The sizing is responsive and should scale well until 350px screen width with a board size of 5, if the board is 3 until 200px.
The scaling was done with [Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/) and em units.


## Credits

A great help was the [Simple React Webpack Babel Starter Kit](https://github.com/alicoding/react-webpack-babel) from **Ali Al Dallal** that helped to get the project strucutre going fast.

Another great help were the [Airbnb guidelines](https://github.com/airbnb/javascript/tree/master/react).


## Code and License

The [code](https://github.com/Tschef/tic-retact-toe) is freely available under the MIT license.

## Contribute

Please contribute to the project if you know how to make it better :)


Developed by **Stefan Reischmann**.
