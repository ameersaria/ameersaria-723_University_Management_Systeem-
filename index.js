#! /usr/bin/env node
import chalk from "chalk";
// ======================================                 ===========================================
console.log(chalk.bgBlueBright("\n\tWelcome to Ameer Saria's University Management System\n\t"));
class Parent {
    name;
    age;
    // method 
    getName() {
    }
    // constructor 
    constructor(aName, aAge) {
        this.name = aName;
        this.age = aAge;
    }
}
class Stdent extends Parent {
    rollNumber;
    courses = []; // name string hai
    // method 
    registerforCourses(course) {
        // Now checking in which course this student is enrolled 
        this.courses.push(course.name); // course name
    }
    constructor(name, age, rNum) {
        super(name, age);
        this.rollNumber = rNum;
    }
    getListofCourses() {
        console.log(chalk.bgGreenBright("Student", this.name + " Courses"));
        this.courses.forEach(element => {
            console.log(element); // string print ho jaye ga
        });
    }
}
class Instrctor extends Parent {
    salary;
    courses = [];
    // method 
    assignCourse(course) {
        this.courses.push(course.name); // course name
    }
    constructor(name, age, sal) {
        super(name, age);
        this.salary = sal;
    }
    getListofCourses() {
        console.log(chalk.bgCyanBright("Instructor", this.name + " Courses"));
        this.courses.forEach(element => {
            console.log(element);
        });
    }
}
class Coure {
    id;
    name;
    // Making Arrays 
    students = []; // Assigning class as data type
    instructors = []; // Assigning class as data type
    // Making course array 
    static allCourse = [];
    // Making Constructor 
    constructor(id, name) {
        this.id = id;
        this.name = name;
        Coure.allCourse.push(name);
    }
    // making method 
    static displayAllCourses() {
        console.log(chalk.bgMagenta("Available Courses:"));
        Coure.allCourse.forEach(element => {
            console.log(element); // All courses
        });
    }
    // making method 
    addStudent(st) {
        this.students.push(st); // st parameter student array main add kardo
    }
    // making method 
    setInstructor(ing) {
        // ins parameter instructors array main add kardo
        this.instructors.push(ing);
    }
    // Now checking how  much students are enrolled in  this course 
    // Making method 
    getListofStudents() {
        console.log(chalk.bgRedBright(this.name + " Students")); // Typescript students
        this.students.forEach(element => {
            console.log(element.name); // students array ky 0 index par jo object hai us main us  ka name print karwa do
        });
    }
    // Making method 
    getListofInstructors() {
        console.log(chalk.bgYellowBright(this.name + " Instructors"));
        this.instructors.forEach(element => {
            console.log(element.name + " " + element.age);
        });
    }
}
// Object 
let c4 = new Coure(1, "Typescript");
let c5 = new Coure(2, "Javascript");
let c6 = new Coure(3, "AI");
let c7 = new Coure(4, "Python");
// Student 
let std4 = new Stdent("Ameer Saria", 20, "723");
// console.log(std4);
let std5 = new Stdent("Ameer Mavia", 23, "724");
// console.log(std5);
let std6 = new Stdent("Ameer Hamza", 25, "725");
// console.log(std6);
let std7 = new Stdent("Qasim Amjad", 19, "726");
// Accessing Methods in Coure  
c4.addStudent(std4); //c4 main std4 object pass karro
std4.registerforCourses(c4); //std4 main c4 object pass karro
c4.addStudent(std5); //c4 main std5 object pass karro
std5.registerforCourses(c4); //std5 main c4 object pass karro
c5.addStudent(std4); //c5 main std5 object pass karro
std4.registerforCourses(c5);
c6.addStudent(std6);
std6.registerforCourses(c6);
c7.addStudent(std7);
std7.registerforCourses(c7);
std4.getListofCourses(); // course array ky object ka name print kar do
std5.getListofCourses();
std6.getListofCourses();
std7.getListofCourses();
// Accessing Methods in Coure 
c4.getListofStudents(); // student array ky object ka name print kar do
c5.getListofStudents(); // student array ky object ka name print kar do
c6.getListofStudents(); // student array ky object ka name print kar do
c7.getListofStudents(); // student array ky object ka name print kar do
// Instrctor 
let ins4 = new Instrctor("Ameen Alam", 24, 100000);
// console.log(ins4)
let ins5 = new Instrctor("Hamzah Syed", 23, 100000);
// console.log(ins5);
let ins6 = new Instrctor("Asharib Ali", 20, 100000);
// console.log(ins6);
let ins7 = new Instrctor("Mannal Rana", 27, 100000);
// console.log(ins7);
// Accessing Methods in Coure  
c4.setInstructor(ins4); //c4 main ins4 object pass karro
ins4.assignCourse(c4);
c5.setInstructor(ins4); //c4 main ins5 object pass karro
ins4.assignCourse(c5);
c5.setInstructor(ins5); //c5 main ins5 object pass karro
ins5.assignCourse(c5);
c6.setInstructor(ins6); //c6 main ins5 object pass karro
ins6.assignCourse(c6);
c7.setInstructor(ins7); //c7 main ins5 object pass karro
ins7.assignCourse(c7);
// console.log(c4);
// Accessing Methods in Coure 
c4.getListofInstructors();
c5.getListofInstructors();
c6.getListofInstructors();
c7.getListofInstructors();
ins4.getListofCourses();
ins5.getListofCourses();
ins6.getListofCourses();
ins7.getListofCourses();
// Accessing Class Coure method 
Coure.displayAllCourses();
// console.log(c5);
class Departmnt {
    name;
    courses = [];
    static allDepartment = [];
    // method 
    addCourse(course) {
        this.courses.push(course.name);
    }
    getCourses() {
        this.courses.forEach(element => {
            console.log(element);
        });
    }
    constructor(name) {
        this.name = name;
        Departmnt.allDepartment.push(this.name);
    }
    static displayAllDepartment() {
        console.log(chalk.bgBlueBright("All Departments:"));
        Departmnt.allDepartment.forEach(element => {
            console.log(element);
        });
    }
}
let d1 = new Departmnt("CS");
let d2 = new Departmnt("JS");
let d3 = new Departmnt("AI");
let d4 = new Departmnt("WD");
d1.addCourse(c4);
d1.addCourse(c5);
d2.addCourse(c4);
Departmnt.displayAllDepartment();
