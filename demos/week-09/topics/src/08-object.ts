// let john = {
//     name: 'John',
//     age: 32
// };

// type literal - using a value as a type
type Gender = 'male' | 'female' | 'other';

type Person = {
    readonly name: string, // cannot be reassigned
    age: number,
    gender?: Gender // optional property
};

let john : Person;

// john = 123; // error
john = { // should have name, age
    name: 'John',
    age: 32
};

// john.name = 'Jonathan'; // error

let jane : Person;

jane = {
    name: 'Jane',
    age: 28,
    gender: 'female'
};

export {}
