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

let scores = [23, 45, 56, 67, 98, 34, 35];

let totals = (scores) => {
    let sum = 0
    for(let i = 0; i < scores.length; i++){
        sum +=scores[i];
        console.log(sum)
    }
    return sum;
}

console.log(`The total score is : ${totals(scores)}`)

let ageArray = [12, 34, 45, 67];
console.log(`The total ages is ${totals(ageArray)}`);