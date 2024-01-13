import { Directions } from "./constants.js";

export class Snake {
    constructor( game ) {
        this.game = game;
        this.size = 3;
        this.direction = Directions.Right;

        this.head = {
            x: 1,
            y: 1
        };
        this.tail = []; // no tail cells
    }

    paint( context ) {
        const { cellSize } = this.game.configuration;

        // head
        context.fillStyle = '#111111';
        context.fillRect(
            this.head.x * cellSize,
            this.head.y * cellSize,
            cellSize,
            cellSize
        );

        // tail
        context.fillStyle = '#333333';
        this.tail.forEach( tailCell => {
            context.fillRect(
                tailCell.x * cellSize,
                tailCell.y * cellSize,
                cellSize,
                cellSize
            )
        });
    }

    move() {
        // console.log( this.tail, this.head );

        this.tail.unshift( this.head );
        if( this.tail.length > this.size ) {
            this.tail.pop();
        }

        this.head = this.getNextHeadPosition();
    }

    getNextHeadPosition() {
        switch( this.direction ) {
            case Directions.Right:
                return {
                    x: this.head.x + 1,
                    y: this.head.y
                };
            case Directions.Left:
                return {
                    x: this.head.x - 1,
                    y: this.head.y
                };
            case Directions.Up:
                return {
                    x: this.head.x,
                    y: this.head.y - 1
                };
            case Directions.Down:
                return {
                    x: this.head.x,
                    y: this.head.y + 1
                };
        }
    }

    changeDirection( direction ) {
        if( this.direction === Directions.Up && direction === Directions.Down ) {
            return;
        }

        if( this.direction === Directions.Down && direction === Directions.Up ) {
            return;
        }
        
        if( this.direction === Directions.Left && direction === Directions.Right ) {
            return;
        }
        
        if( this.direction === Directions.Right && direction === Directions.Left ) {
            return;
        }

        this.direction = direction;
    }

    // when snake eats an apple it grows in size by 3 cells
    grow() {
        this.size += 3;
    }

    hasEatenItself() {
        return this.tail.some(
            tailCell => {
                return tailCell.x === this.head.x && tailCell.y === this.head.y
            }
        );
    }
}