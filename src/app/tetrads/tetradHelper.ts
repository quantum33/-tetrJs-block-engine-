import { Form } from './form';

export namespace TetradHelper {
    export function getRandomTetrad(): Form {
        return getRandomElementOfEnum<Form>(Form)
    }

    function getRandomElementOfEnum<E>(e: any): E {
        let keys = Object.keys(e)
        let index = Math.floor(Math.random() * keys.length)
        let k = keys[index]
        if (typeof e[k] === 'number')
            return <any>e[k]
        return <any>parseInt(k, 10)
    }
}