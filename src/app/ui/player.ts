// @ts-check
import { Position } from '../engine/position';
import { Tetrad } from '../tetrads/tetrad';

/**
 * Represents the UI of the game
 */
export class Player {

    private tetrad: Tetrad
    private initialPosition: Position
    private currentPosition: Position

    constructor(position: Position, tetrad: Tetrad) {
        this.initialPosition = position
        this.setTetrad(tetrad)
    }

    getTetrad(): Tetrad {
        return this.tetrad
    }

    setTetrad(tetrad: Tetrad): Player {
        this.tetrad = tetrad
        this.currentPosition = this.initialPosition
        return this
    }

    getPosition(): Position {
        return this.currentPosition
    }

    moveDown() {
        this.currentPosition.addToY(1)
    }
    moveLeft() {
        this.currentPosition.addToX(-1)
    }
    moveRight() {
        this.currentPosition.addToX(1)
    }
}