/* 
 Task-3:
Write a function to count the number of vowels in a string.


 */
  
     function vowelsNumber(array, vowels){
     
      let count=0;
      
      for( const items of array){
        console.log(array.split(''))
          if(items===vowels){
              count++;
          }
      }
       return count
  }

  const str=  vowelsNumber('aaaa i am of precaution')
 
  const find= ('a,e,i,o,u')
  const  count=vowelsNumber(str, find)
  console.log(count)