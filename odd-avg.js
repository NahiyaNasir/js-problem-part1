/* 
 function takes an array as para, calculate the average of odd numbers in array
 */

 /* 
  1. put odd numbers in array
  */
function oddAverage(numbers){
     console.log(numbers)
     const odd=[]
     for( const number of numbers)
    if(number %2===1){
          odd.push(number)
      //  console.log(number)

    }
    let sum=0;
     for( const number of odd){
       
        sum += number
     }
     
     const count=odd.length
     console.log(sum, count)
     const avg= sum/count;
     return avg
}

const numbers=[ 23, 32, 56, 71, 81, 92,13, 7,19]
const avg=oddAverage(numbers)
console.log('average number is',avg)