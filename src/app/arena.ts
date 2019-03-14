import { IMatrix, Matrix } from './engine/matrix';
import { Tetrad } from "./tetrads/tetrad";
import { Position } from './engine/position';
import { Block, BlockCollection } from './engine/blockCollection';

/**
 * Represents an game arena (tetris)
 */
export class Arena extends Matrix {

    /**
     * sets the specified tetrad at the specified position in the arena
     * @param tetrad the tetrad to add
     * @param position the position where to add it in the arena
     */
    addTetrad(tetrad: Tetrad, position: Position) {

        for (let y = 0; y < tetrad.getLength(); y++) {
            tetrad.getRow(y).forEach((block, x) => {
                if (block.isMarked()) {
                    //copy to arena
                    //this.matrix.getRow(y + position.getY())[x + position.getX()].setMarked()
                    this.getBlock(new Position(x + position.getX(), y + position.getY())).setMarked()
                }
            })
        }
    }

    /**
     *  true if the specified tetrad collides the arena (or its existing tetrads) at the specified position
     * false otherwise
     * @param tetrad the tetrad
     * @param position the position (of the tetrad) we must check
     */
    isColliding(tetrad: Tetrad, position: Position): boolean {

        const length = tetrad.getLength()
        for (let y=0; y<length; ++y) {
            for (let x=0; x<length; ++x) {
                if (tetrad.getRow(y)[x].isMarked() && 
                    this.getBlock(
                        new Position(
                            x + position.getX(),
                            y + position.getY())
                        ).isMarked) {
                    return true
                }
            }
        }
        return false
    }
}