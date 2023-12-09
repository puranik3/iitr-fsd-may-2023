function printPerson( person, getTitle ) {
    var title = getTitle( person );
    console.log( title + ' ' + person.name + ' is ' + person.age + ' years old' );
}

var john = {
    name: 'John',
    gender: 'male',
    age: 32
};

function getEnglishTitle( person ) {
    return person.gender === 'male' ? 'Mr.' : 'Ms.';
}

function getFrenchTitle( person ) {
    return person.gender === 'male' ? 'Monsieur' : 'Madame';
}

// person = john (john and person are referring to the SAME object in memory)
// getTitle = getEnglishTitle (getEnglishTitle and getTitle are referring to the SAME function in memory)
printPerson( john, getEnglishTitle );

var jane = {
    name: 'Jane',
    gender: 'female',
    age: 28
};

printPerson( jane, getFrenchTitle );

// printPerson.x = 100;
// console.log( printPerson.x );