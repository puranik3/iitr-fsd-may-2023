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

// order matters - name comes from johnEmployment (i.e. 'Jonathan')
// but name: 'Johnny' overrides that as well
const johnMasterDetails = {
    spouse: 'Jane',
    ...john,
    ...johnEmployment,
    name: 'Johnny',
};

console.log( johnMasterDetails );