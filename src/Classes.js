class Student {
    constructor(name, age, grade) {
        this.name = name;
        this.age = age;
        this.grade = grade;
    }
    getStudent() {
        return `Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`;
    }

    walk(){
        console.log('walking');
    
    }

}

let s1 = new Student('John', 20, 'A');
let s2 = new Student('Mary', 21, 'B');

