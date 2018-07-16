// interface Document {
//     createElement(tagName: any): Element;
// }
// interface Document {
//     createElement(tagName: "div"): HTMLDivElement;
//     createElement(tagName: "span"): HTMLSpanElement;
// }
// interface Document {
//     createElement(tagName: string): HTMLElement;
//     createElement(tagName: "canvas"): HTMLCanvasElement;
// }
// console.log();
// namespace Animal {
//     let haveMuscles = true;

//     export function animalsHaveMuscles() {
//         return haveMuscles;
//     }
// }

// namespace Animal {
//     export function doAnimalsHaveMuscles() {
//         return haveMuscles;  // <-- error, haveMuscles is not visible here
//     }
// }
function f() {
    console.log('f(): evaluated');
    return function(
        target,
        propertyKey: string,
        descriptor: PropertyDescriptor,
    ) {
        console.log('f(): called');
    };
}

function g() {
    console.log('g(): evaluated');
    return function(
        target,
        propertyKey: string,
        descriptor: PropertyDescriptor,
    ) {
        console.log('g(): called');
    };
}

class C {
    @f()
    @g()
    method() {}
}
const c = new C();
