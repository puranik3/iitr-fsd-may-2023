class Person {
    // name;
    // static nationality = 'Indian';

    constructor( name, age ) {
        this.name = name;
        this.age = age;
    }

    celebrateBirthday() {
        this.age++;
    }
}

class Employee extends Person {
    constructor( name, age, role, dept ) {
        super( name, age ); // Person::constructor( name, age )

        this.role = role;
        this.dept = dept;
    }

    promote() {
        this.role = `Senior ${this.role}`;
    }

    celebrateBirthday() {
        console.log( `Happy birthday ${this.name}!` );
        super.celebrateBirthday();
    }
}

const john = new Employee( 'John', 32, 'Accountant', 'Finance' );
john.promote();
john.celebrateBirthday();
console.log( john );