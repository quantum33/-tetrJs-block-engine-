import { StringBuilder } from '../utils/stringBuilder';
export class Position {
    private x: number
    private y: number

    constructor(x: number, y: number) {
        this.setX(x)
        this.setY(y)
    }

    getX(): number {
        return this.x
    }
    setX(value: number): Position {
        this.x = value
        return this
    }
    getY(): number {
        return this.y
    }
    
    setY(value: number): Position {
        this.y = value
        return this
    }

    addToX(i: number): Position {
        this.setX(this.getX() + i)
        return this
    }

    addToY(i: number): Position {
        this.setY(this.getY() + i)
        return this
    }
    
    isEqualTo(ref: Position): boolean {
        if (ref == null 
        || ref.getX() !== this.getX()
        || ref.getY() !== this.getY()) {
            return false
        }

        return true
    }
    clone(): Position {
        return new Position(this.getX(), this.getY())
    }
    toString(): string {
        let builder = new StringBuilder()
        return builder
                .append("{X: ")
                .append(this.getX().toString())
                .append(", Y: ")
                .append(this.getY().toString())
                .append("}")
                .toString()
    }
}