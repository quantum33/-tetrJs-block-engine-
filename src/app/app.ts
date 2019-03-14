import { Arena } from './arena'
import { Player } from './ui/player'
import { Drop } from './drop'
import { Tetrad } from './tetrads/tetrad';
import { Form } from './tetrads/form'
import { Position } from './engine/position';
import { Helper } from "./helper"
import { Direction } from './engine/direction';
import { IMatrix } from './engine/matrix';

export namespace Tetris {
  
    function setMoveDownOperations() {

        player.moveDown()
        if (arena.isColliding(player.getTetrad(), player.getPosition())) {
            console.log("collides")
            const pos = Helper.copyByValue(player.getPosition())
            pos.addToY(-1) //TODO: modification de la référence.... => TU
            arena.addTetrad(player.getTetrad(), pos)
            let t = new Tetrad(Form.T)
            player.setTetrad(t)
        }
        drop.resetCounter()
    }


    document.addEventListener("keydown", event => {
        const pos: Position = Helper.copyByValue(player.getPosition())
        if (event.keyCode === Direction.Left) {
            pos.addToX(-1)
            if (!arena.isColliding(player.getTetrad(), pos)) {
                player.moveLeft()
            }        
        }
        else if (event.keyCode === Direction.Right) {
            pos.addToX(1)
            if (!arena.isColliding(player.getTetrad(), pos)) {
                player.moveRight()
            }
        }
        else if (event.keyCode === Direction.Down) {
            setMoveDownOperations()
        }
    })
    
    function draw() {
        context.fillStyle = "#000";
        context.fillRect(0, 0, canvas.width, canvas.height)
    
        drawMatrix(arena, new Position(0, 0))
        drawMatrix(player.getTetrad(), player.getPosition())
    }
    
    function drawMatrix(matrix: IMatrix, offset: Position) {
        matrix.getRows().forEach((row, y) => {
            row.forEach((rowValue, x) => {
                if (rowValue.isMarked()) {
                    context.fillStyle = "purple"
                    context.fillRect(
                        x + offset.getX(),
                        y + offset.getY(),
                        1,
                        1)
                }
            });
        });
    }
    
    function update(time = 0) {
        drop.setTime(time)
        if (drop.canMoveTetrad()) {
            setMoveDownOperations()
        }
        draw()
        requestAnimationFrame(update)    
    }

    // // Execution
    // console.log("Hello tetris")
    const player = new Player(new Position(5,0), new Tetrad(Form.T))
    const arena = new Arena(20, 12)
    const drop = new Drop()
    const canvas = <HTMLCanvasElement> document.getElementById("tetris")
    const context = canvas.getContext("2d")
    context.scale(20, 20)
    // update()
}

window.onload = () => {
    //document.body.innerHTML
    //var el = document.getElementById('content');

    // Execution
    console.log("Hello tetris")
    const player = new Player(new Position(5,0), new Tetrad(Form.T))
    document.body.innerHTML = player.getPosition().toString()
};