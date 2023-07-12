//arrays
const classA = ['sahan',"Uvin","Pika","sandali","rushini"];
const classB =["Kali","Hansika","kevin"];

//combine 2 arrays
const combined = classA.concat(classB);

console.log(combined);


//Use Spread Operator to combine 2 arrays     Spread operator = ...

const combined2 = [...classA,'And',...classB,'End'];

console.log(combined2);


//objects
const student1 = {
    name: 'Sahan'
};
const student2 = {
    age: 21
};

const students = {...student1, ...student2, school: 'Colombo'};
console.log(students);

//clone object

const clone = {...student1};
