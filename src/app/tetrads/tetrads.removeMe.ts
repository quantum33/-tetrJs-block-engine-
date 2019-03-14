// export * from "./form"
// export * from "./tetrad";

// import { Form } from "./form";
// import { Tetrad } from "./tetrad";
// import { InvalidArgumentError } from "../errors/errors";

// export namespace TetradsFactoryOld {

//     export function create(form: Form): Tetrad {
//         var result;
//         switch (+form) {
//             case Form.I:
//                 result = new Tetrad(4, Form.I);
//                 break;
//             case Form.J:
//                 result = new Tetrad(3, Form.J);
//                 break;
//             case Form.L:
//                 result = new Tetrad(3, Form.L);
//                 break;
//             case Form.O:
//                 result = new Tetrad(2, Form.O);
//                 break;
//             case Form.S:
//                 result = new Tetrad(3, Form.S);
//                 break;
//             case Form.T:
//                 result = new Tetrad(3, Form.T);
//                 break;
//             case Form.Z:
//                 result = new Tetrad(3, Form.Z);
//                 break;
//             default:
//                 throw new InvalidArgumentError("form");
//         }
//         return result;
//     }

//     function getLengthFor(form: Form): number {
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

//     function fill(tetrad: Tetrad) {
//         if (tetrad.getForm() === Form.I) {            
//             tetrad.getRow(0).fillWith([0,0,0,1])
//             tetrad.getRow(1).fillWith([0,0,0,1])
//             tetrad.getRow(2).fillWith([0,0,0,1])
//             tetrad.getRow(3).fillWith([0,0,0,1])
//         }
//         else if (tetrad.getForm() === Form.J) {
//             tetrad.getRow(0).fillWith([0,1,0])
//             tetrad.getRow(1).fillWith([0,1,0])
//             tetrad.getRow(2).fillWith([1,1,0])
//         }
//         else if (tetrad.getForm() === Form.L) {
//             tetrad.getRow(0).fillWith([0,1,0])
//             tetrad.getRow(1).fillWith([0,1,0])
//             tetrad.getRow(2).fillWith([0,1,1])
//         }
//         else if (tetrad.getForm() === Form.O) {
//             tetrad.getRow(0).fillWith([1,1])
//             tetrad.getRow(1).fillWith([1,1])
//         }
//         else if (tetrad.getForm() === Form.S) {
//             tetrad.getRow(0).fillWith([0,1,1])
//             tetrad.getRow(1).fillWith([1,1,0])
//         }
//         else if (tetrad.getForm() === Form.T) {
//             tetrad.getRow(0).fillWith([0,1,0])
//             tetrad.getRow(1).fillWith([1,1,1])
//         }
//         else if (tetrad.getForm() === Form.Z) {
//             tetrad.getRow(0).fillWith([1,1,0])
//             tetrad.getRow(1).fillWith([0,1,1])
//         }
//     }
// }
