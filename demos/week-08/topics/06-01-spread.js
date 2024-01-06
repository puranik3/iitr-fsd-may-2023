// spread -> ... (overloaded with "rest")

// copy / merge objects and arrays
const nums1 = [ 1, 2, 3 ], nums2 = [ 4, 5, 6 ];

const nums1Copy = [ ...nums1 ] // [ num1[0], nums1[1], nums1[2] ] - does this create a new array in memory - YES
const nums1CopyAnother = nums1; // does this create a new array in memory - NO
console.log( nums1Copy );

// we want a new array with items in nums1 followed by items in nums2
const nums3 = [ ...nums1, ...nums2 ]; // [ num1[0], nums1[1], nums1[2], num2[0], nums2[1], nums2[2] ]
console.log( nums3 );

nums1.push( 4 );
console.log( 'nums1Copy = ', nums1Copy ); // does this have 4? NO
console.log( 'nums1CopyAnother = ', nums1CopyAnother ); // does this have 4? YES

// primitives are copied by value -> number, boolean, string
// non-primitives are copied by reference -> object, array

const employees = [
    { name: 'John', role: 'Accountant' },
    { name: 'Jane', role: 'Web Dev' },
    { name: 'Mark', role: 'Sales and Marketing Exec' },
];

const employeesCopy = [ ...employees ]; // [ employees[0], employees[1], employees[2] ]

employees[0].role = 'Senior Accountant';
employees.push({
    name: 'Mary',
    role: 'VP - Finance'
});

console.log( employees );
console.log( employeesCopy ); // is Mary here??? NO

const john = {
    name: 'John', // string - copy shall be made by value
    age: 32, // number - copy shall be made by value
    emails: [ // array - copy shall be made by reference
        'john@gmail.com',
        'john@outlook.com',
    ]
};

const johnEmployment = {
    name: 'Jonathan',
    companyName: 'Example Consulting',
    role: 'Fullstack Developer'
};

// NOTE: johnCopy.emails will refer to the SAME array as john.emails
const johnCopy = { // we ARE creating a NEW object in memory
    ...john // name: john.name, age, john.age, emails: john.emails
};

johnCopy.age++;
johnCopy.emails.push( 'john@yahoo.com' );

console.clear();
console.log( 'john =', john ); // age is still 32, emails has the new email
console.log( 'johnCopy = ', johnCopy ); // age is 33