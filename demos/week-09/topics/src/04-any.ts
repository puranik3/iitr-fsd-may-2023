// AVOID any TYPE
let c;

// what's the point of using TS if we `any` type??
c = 1;
c = 'Hello';
c = {
    name: 'John'
}

// export nothing - just so that TS compiles this file in module mode
export {
    // c,
    // isWinter
}