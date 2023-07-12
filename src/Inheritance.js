class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    walk(){
        console.log('walking');
    
    }

}

class Student extends Person {
    constructor(name,age,grade) {

        super(name,age);

        this.name = name;
        this.age = age;
        this.grade = grade;
    }
    walk(){
        console.log('walking');
    
    }
} 

let p1 = new Student('John', 23,10);

console.log(p1);



