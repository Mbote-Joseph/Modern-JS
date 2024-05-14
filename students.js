let students = []

function addStudent({name, regNo, year}){
    students.push({name, regNo, year });
    console.log(`The student added is: ${name}`);
}

function printStudent(students){
    let total = students.length;
    console.log(total > 0 ? `The total number of students are: ${total}` : "There are no any students added on the Students list.");
}

printStudent(students);

addStudent({name: "Joseph Mbote", regNo: "SCT211-0011/2018", year: "2023"})

printStudent(students);