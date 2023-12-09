// functions are first-class citizens (function has all the features of an object)
function sum( x, y ) {
    return x + y;
}

// var add = sum( 12, 13 );
// this is different from the above statement which is commented
var add = sum; // add() now refers to the SAME piece of code in memory that sum() does - both refer to the SAME function in memory
var addition = add;

console.log( sum ); // [Function: sum]
console.log( add ); // [Function: sum]
console.log( addition ); // [Function: sum]
console.log( add( 12, 13 ) ); // 25
console.log( addition( 12, 13 ) ); // 25

addition = function( x , y ) {
    return x - y;
};

console.log( addition( 12, 13 ) );