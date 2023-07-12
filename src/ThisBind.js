const person = { 
    name: 'John Doe',
    walk: function() {},
    talk() {}
};

// Accessing members
person.name = 'Kalindu';

// second way
const targetMember = 'name';
person[targetMember.value] = 'Kalindu';
