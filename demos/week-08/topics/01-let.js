// Please use let
if( true ) {
    var x = 1; // no block-scope - it is a global variable
    let y = 2; // block-scoped - cannot use it outside
}

console.log( x ); // ok
console.log( y ); // throws an error
