// Copyright 2024 josephmbote
// 
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
// 
//     http://www.apache.org/licenses/LICENSE-2.0
// 
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

class Student{
    constructor(studentName, regNo, course, year, email){
        this.studentName = studentName;
        this.regNo = regNo;
        this.course = course;
        this.year = year;
        this.email = email;
    }
    getStudentDetails(){
        return `Student Name: ${this.studentName}, Reg No: ${this.regNo}, Course: ${this.course}, Year: ${this.year}, Email: ${this.email}`
    }

    static getStudentDetails(student){
        return `Student Name: ${student.studentName}, Reg No: ${student.regNo}, Course: ${student.course}, Year: ${student.year}, Email: ${student.email}`
    }

    static addStudent(student){
        students.push(student)
    }

    static getStudents(){
        return students
    }

    static deleteStudent(student){
        students.splice(students.indexOf(student), 1)
    }

    static updateStudent(student){
        students[students.indexOf(student)] = student
    }

    static searchStudent(regNo){
        return students.find(student => student.regNo === regNo)
    }


}

let firstStudent = new Student("Joseph Mbote", "SCT211-0011/2018", "Bsc. Computer Science", "2022", "josephmbote@gmail.com");

console.log(firstStudent.getStudentDetails(firstStudent))