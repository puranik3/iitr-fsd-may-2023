import { Snake } from './Snake.js';
import { Grid } from './Grid.js';
import * as Constants from './constants.js';

export class Game {
    constructor() {
        this.running = false;
        this.score = 0;

        this.canvas = document.getElementById( 'game' );

        // CSS width and height
        this.canvas.style.width = Constants.WIDTH * Constants.CELLSIZE + 'px';
        this.canvas.style.height = Constants.HEIGHT * Constants.CELLSIZE + 'px';

        // width and height of the canvas
        this.canvas.width = Constants.WIDTH * Constants.CELLSIZE;
        this.canvas.height = Constants.HEIGHT * Constants.CELLSIZE;
        
        this.configuration = {
            level: 1,
            speed: Constants.SPEED,
            width: this.canvas.width,
            height: this.canvas.height,
            nbCellsX: Constants.WIDTH,
            nbCellsY: Constants.HEIGHT,
            cellSize: Constants.CELLSIZE,
            color: Constants.COLORS[0]
        };

        this.nextMove = 0;

        this.snake = new Snake( this );
        this.grid = new Grid( this );

        window.addEventListener( 'keydown', this.onKeyDown );
    }

    start() {
        this.running = true;
        // console.log( `Game is running? ${this.running}` );
        requestAnimationFrame( this.loop );
    }

    loop = timestamp => {
        // console.log( timestamp );
        requestAnimationFrame( this.loop );

        // how the board will look like before the next refresh
        if( this.running && timestamp > this.nextMove ) {
            this.nextMove = timestamp + this.configuration.SPEED;
            
            this.snake.move();

            const status = this.checkMove();

            if( status === -1 ) {
                this.running = false;
                this.gameOver();
            }

            if( status === 1 ) {
                this.score += 100;
                this.grid.eatApple( this.snake.head );
                this.snake.grow();

                if( this.isLevelOver() ) {
                    this.gotoNextLevel();
                }
            }

            this.paint();
        }
    }

    gameOver() {
        alert( `You scored ${this.score}` );
    }

    isLevelOver() {
        return this.grid.areAllApplesEaten();
    }

    gotoNextLevel() {
        ++this.configuration.level;
        this.configuration.color = Constants.COLORS[this.configuration.level - 1];
        this.score += 1000;
        this.grid.seed();
        this.configuration.speed -= 10;
        if( this.configuration.level > 10 ) {
            alert( `Great job boss!` );
            this.gameOver();
        }
    }

    checkMove() {
        const head = this.snake.head;
        const { nbCellsX, nbCellsY } = this.configuration;

        // if game is over (goes outside board, or eats itself)
        if( head.x < 0 || head.x >= nbCellsX || head.y < 0 || head.y >= nbCellsY ) {
            return -1;
        }

        if( this.snake.hasEatenItself() ) {
            return -1;
        }

        // if it ate an apple
        if( this.grid.hasEatenApple( head ) ) {
            return 1;
        }
    }

    paint() {
        const { width, height, color } = this.configuration;

        const context = this.canvas.getContext( '2d' );
        context.fillStyle = color;
        context.fillRect( 0, 0, width, height );

        this.grid.paint( context );
        this.snake.paint( context );
    }
    
    onKeyDown = event => {
        // console.log( event.key );
        const direction = event.key.substring( 5 );
        this.snake.changeDirection( direction );
    }
}