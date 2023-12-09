console.log( x ); // x has value undefined

var x = 100;

console.log( x );

console.log( 'sum = ', sum1( 12, 13 ) );

// function declaration syntax
function sum1( x, y ) {
    return x + y;
    // return undefined;
}

console.log( 'sum = ', sum1( 12, 13 ) );

// error - function value is not assigned yet - error
// console.log( 'sum2 = ', sum2( 12, 13 ) );

// function expression syntax. The RHS of the assignment is called a "function expression"
var sum2 = function( x, y ) {
    return x + y;
};

console.log( 'sum2 = ', sum2( 12, 13 ) );