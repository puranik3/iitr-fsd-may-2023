import { Gender, IPerson } from './10-interface';

class Person implements IPerson {
    readonly name: string;
    age: number;
    gender?: Gender;
    private emailid: string;

    constructor( name : string, age : number, emailid: string, gender? : Gender ) {
        this.name = name;
        this.age = age;
        this.emailid = emailid;
        this.gender = gender;
    }

    celebrateBirthday() {
        this.age++
    }
}

const john = new Person( 'John', 32, 'john@example.com' );
const jane = new Person( 'Jane', 28, 'jane@example.com', 'female' );