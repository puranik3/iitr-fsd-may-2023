// we use "this" keyword (function context)
// arrow function do not have their own context ("this")

// NOTE: Execute this example in the browser

function outer() {
    console.log( 'outer this = ', this );

    // has its own context
    const innerOld = function() {
        console.log( 'innerOld this = ', this );
    };


    // no own "this"
    // "this" simply refers to the "this" from the scope
    const innerArrow = () => {
        console.log( 'innerArrow this = ', this );
    };

    innerOld();
    innerArrow();
}

console.log( this ); // window (in browser)

outer();
outer.call( { x: 1, y : 2 } );