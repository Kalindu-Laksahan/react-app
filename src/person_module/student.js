import { Person } from "./person";

export class Student extends Person {
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