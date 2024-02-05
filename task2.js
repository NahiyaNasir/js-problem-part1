/* 
   Task-2:
You are given an array of numbers. Count how many times the a number is repeated in the array.

sample-input: numbers = [5,6,11,12,98, 5]

find: 5

output: 2


sample-input:

numbers = [5,6,11,12,98, 5]

find: 25

output: 0
 */
  
     function repeatedArray(array, find){
        let count=0;
        for( const nums of array){
            if(nums===find){
                count++;
            }
        }
         return `find: ${find}, count: ${count}`  //count
    }


    const number= [5,6,11,12,98, 5]
    const findNumber=5
    const count=repeatedArray(number, findNumber)
    console.log(count)
//   sub  task
function repeatedArray1(array, find){
    let count=0;
    for( const numb of array){
        if(numb===find){
            count++;
        }
    }
     return `find: ${find}, count: ${count}`  //count
}


const number1= [5,6,11,12,98, 5]
const findNumber1=25
const count1=repeatedArray1(number1, findNumber1)
console.log(count1)