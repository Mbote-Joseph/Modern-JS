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

let students = []

function addStudent({studentName, regNo, course, year, email}){
    students.push({
        studentName,
        regNo,
        course,
        year,
        email
    })

}

addStudent({studentName : "Joseph Mbote", regNo: "SCT211-0011/2018", course: "Bsc. Computer Science", year: "2022", email: "josephmbote@gmail.com"});