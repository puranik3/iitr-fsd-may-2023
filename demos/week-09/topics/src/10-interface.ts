type Gender = 'male' | 'female' | 'other';

interface IPerson {
    readonly name: string;
    age: number;
    gender?: Gender;
    celebrateBirthday: () => void
}

// interface IEmployee extends IPerson {

// }

// 2 uses of interfaces
// 1. it can be used as the type of an object
const john : IPerson = {
    name: 'John',
    age: 32,
    // gender: 'male', // optional, and ok to omit it
    celebrateBirthday() {
        this.age++;
    }
};

// john.name = 'Jonathan'; // error


// 2. implement it in a class


// named export
export {
    Gender,
    IPerson
}