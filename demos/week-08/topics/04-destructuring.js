const days = [
    'Mon',
    'Tue',
    'Wed',
    'Thu',
    'Fri'
];

// const mon = days[0], tue = days[1], fri = days[4];
const [ mon, tue, , , fri ] = days;

console.log( mon );
console.log( tue );
console.log( fri );
console.log( days );

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

// const name = john.name, years = john.age, city = john.address.city, state = john.address.state, primaryEmail = john.emails[0];
const {
    age: years, // years = john.age
    name,
    // address,
    address: {
        city,
        state
    },
    // emails,
    emails: [
        primaryEmail
    ]
} = john;

console.clear();
console.log( name, years, /*address, emails,*/ city, state, primaryEmail );