// scope-wise const behaves like let
// const x; // error -> must give an initial value for const variables
const x = 1;

// you cannot assign a new value
// x = 2; // throws an error
// x++; // throws an error

const john = {
    name: 'John',
    age: 32
};

// error
// john = {
//     name: 'John',
//     age: 33
// };


Object.freeze( john ); // aside

john.age = 34; // changes!
console.log( john );

// Prefer const, then let