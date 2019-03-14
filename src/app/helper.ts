export namespace Helper {

    export function copyByValue(obj) {
        return JSON.parse(JSON.stringify(obj));    
    }
}