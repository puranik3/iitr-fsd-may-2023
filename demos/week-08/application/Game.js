export class Game {
    constructor() {
        this.running = false;
    }

    start() {
        this.running = true;
        console.log( `Game is running? ${this.running}` );
    }
}