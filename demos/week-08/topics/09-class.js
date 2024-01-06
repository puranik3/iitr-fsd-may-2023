class Person {
    // name;
    // static nationality = 'Indian';

    constructor( name, age ) {
        this.name = name;
        this.age = age;
    }

    // arrow function syntax is valid but causes harm
    celebrateBirthday = () => {
        this.age++;
    }
}

// a version of celebrateBirthday whose "this" is ALWAYS the object john
const john = new Person( 'John', 32 );

// a version of celebrateBirthday whose "this" is ALWAYS the object jane
const jane = new Person( 'Jane', 28 );

john.celebrateBirthday();
jane.celebrateBirthday();

console.log( john );
console.log( jane );