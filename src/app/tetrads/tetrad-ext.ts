// import { InvalidArgumentError } from '../errors/invalidArgumentError';
// import { Tetrad } from '../engine/matrix';
// import { Form } from "./form";
// import { Block, BlockCollection } from "../engine/blockCollection";

// export class TetradExtended extends Tetrad {
    
// //    private tetrad: Matrix
//     private form: Form

//     constructor(length: number, form: Form) {
//         super(length, length)
//         this.form = form
//         this.fill()
//     }

//     getLength(): number {
//         return this.getRowCount()
//     }

//     getForm(): Form {
//         return this.form
//     }

//     private getLengthByForm(form: Form): number {
//         if (form === Form.I) {
//             return 4
//         } else if (form === Form.J
//             || form === Form.L
//             || form === Form.S
//             || form === Form.T
//             || form === Form.Z
//         ) {
//             return 3
//         } else if (form === Form.O) {
//             return 2
//         } else {
//             throw new InvalidArgumentError("form");
//         }
//     }

//     private fill() {
//         // if (this.form === Form.I) {            
//         //     this.getRow(0).fillWith([0,0,0,1])
//         //     this.getRow(1).fillWith([0,0,0,1])
//         //     this.getRow(2).fillWith([0,0,0,1])
//         //     this.getRow(3).fillWith([0,0,0,1])
//         // }
//         // else if (this.form === Form.J) {
//         //     this.getRow(0).fillWith([0,1,0])
//         //     this.getRow(1).fillWith([0,1,0])
//         //     this.getRow(2).fillWith([1,1,0])
//         // }
//         // else if (this.form === Form.L) {
//         //     this.getRow(0).fillWith([0,1,0])
//         //     this.getRow(1).fillWith([0,1,0])
//         //     this.getRow(2).fillWith([0,1,1])
//         // }
//         // else if (this.form === Form.O) {
//         //     this.getRow(0).fillWith([1,1])
//         //     this.getRow(1).fillWith([1,1])
//         // }
//         // else if (this.form === Form.S) {
//         //     this.getRow(0).fillWith([0,1,1])
//         //     this.getRow(1).fillWith([1,1,0])
//         // }
//         // else if (this.form === Form.T) {
//         //     this.getRow(0).fillWith([0,1,0])
//         //     this.getRow(1).fillWith([1,1,1])
//         // }
//         // else if (this.form === Form.Z) {
//         //     this.getRow(0).fillWith([1,1,0])
//         //     this.getRow(1).fillWith([0,1,1])
//         // }
//     }
// }