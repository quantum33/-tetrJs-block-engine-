export class Drop {
    lastTime: number
    time: number
    counter: number
    interval: number
    
    constructor() {
        this.interval = 1000
        this.counter = 0
        this.time = 0
        this.lastTime = 0
    }

    setTime(value): Drop {
        //console.log(`setTime to ${value}ms`)
        //this.lastTime = this.time
        //this.time = value
        [this.lastTime, this.time] = [this.time, value]

        //set counter
        const deltaTime = this.time - this.lastTime
        this.counter += deltaTime

        return this
    }
    canMoveTetrad() {
        return this.counter > this.interval
    }

    resetCounter() {
        this.counter = 0
    }
}