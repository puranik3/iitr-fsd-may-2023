// EXECUTE this example in the browser
// console.log( this );

function foo() {
    console.log( 'foo this = ', this ); // window object in browser
}

foo(); // this -> window

var john = {
    name: 'John',
    age: 32,
    celebrateBirthday: function() {
        this.age++;
    }
};

john.celebrateBirthday(); // john
console.log( john );

// foo will be called but with the context passed as the first argument to call()
foo.call( { x : 1 } );

var jane = {
    name: 'Jane',
    age: 28
};

john.celebrateBirthday.call( jane );
console.log( jane );