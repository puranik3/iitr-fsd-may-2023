// return type
// arguments/parameters type

type BinaryFunction = ( a : number, b : number ) => number;

// 2 syntaxes for typing functions

// syntax 1 - generally we do not provide the return type
function sum1( x : number, y : number ) /*: number*/ {
    if( x > 0 ) {
        return x + y;
    } else {
        return "Unsupported operation";
    }
}

// sum1( 'Hello', 13 ); // error
// sum1( 12 ); // error
// sum1( 12, 13, 14 ); // error
sum1( 12, 13 );

// syntax 2 - only for function expressions (the return type is mandatory)
const sum2 : BinaryFunction = function( x, y ) { return x + y };

// sum2( 'Hello', 13 ); // error
sum2( 12, 13 );

const multiply : BinaryFunction = ( x, y ) => x * y;

type OrderProcessor = ( orders : Object[] ) => void; // void means we do not care about the returned value

function ajax( success : OrderProcessor ) {
    let orders : Object[] = [ { orderId: 123 }, { orderId: 234 } ];

    // make a backend call, get orders array, and pass it to the success function
    // some code...

    success( orders );
}

ajax(
    ( orders : Object[] ) => { // our function here satisfies the OrderProcessor type
        console.log( orders );
        // return 0;
    }
);

export {}