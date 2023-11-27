// Define a Student class
class Student {
    constructor(id, name, courses = []) {
        this.id = id;
        this.name = name;
        this.courses = courses;
    }
    enroll(course) {
        this.courses.push(course);
    }
    displayInfo() {
        console.log(`Student ID: ${this.id}`);
        console.log(`Student Name: ${this.name}`);
        console.log("Enrolled Courses:");
        this.courses.forEach((course, index) => {
            console.log(`${index + 1}. ${course.title}`);
        });
    }
}
// Define a Course class
class Course {
    constructor(title, code) {
        this.title = title;
        this.code = code;
    }
}
// Managing the student information
const student1 = new Student(1, 'John Doe');
const course1 = new Course('Mathematics', 'MATH101');
const course2 = new Course('Science', 'SCI202');
student1.enroll(course1);
student1.enroll(course2);
// Display student information
student1.displayInfo();
export {};
