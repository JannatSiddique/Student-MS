// Student class
class Student {
    constructor(public id: number, public name: string, public courses: Course[] = []) {}
  
    enroll(course: Course): void {
      this.courses.push(course);
    }
  
    displayInfo(): void {
      console.log(`Student ID: ${this.id}`);
      console.log(`Student Name: ${this.name}`);
      console.log("Enrolled Courses:");
      this.courses.forEach((course, index) => {
        console.log(`${index + 1}. ${course.title}`);
      });
    }
  }
  
  // Course class
  class Course {
    constructor(public title: string, public code: string) {}
  }
  
  // Managing the student information
  const student1 = new Student(1, 'John Doe');
  const course1 = new Course('Mathematics', 'MATH101');
  const course2 = new Course('Science', 'SCI202');
  
  student1.enroll(course1);
  student1.enroll(course2);
  
  // Display student information
  student1.displayInfo();
  