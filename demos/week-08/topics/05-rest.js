// ... -> rest / spread (overloaded)

// Explore: rest parameter in functions

const days = [
    'Mon',
    'Tue',
    'Wed',
    'Thu',
    'Fri'
];

const [ mon, tue, ...otherDays ] = days;
console.log( otherDays );

const john = {
    name: 'John',
    age: 32,
    address: {
        city: 'Bengaluru',
        state: 'Karnataka'
    },
    emails: [
        'john@gmail.com',
        'john@example.com'
    ]
};

const {
    name,
    address: {
        city,
        ...restOfAddress
    },
    ...restOfJohn
} = john;

console.clear();
console.log( restOfJohn );
console.log( restOfAddress );