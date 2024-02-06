/* 
 Task-3:
Write a function to count the number of vowels in a string.


 */
  
     function vowelsNumber(str){
      let count=0;
      const vowels= ('a,e,i,o,u')
      for( const  chr of str){
        if(vowels.includes(chr)){
             count++;
        }
      }


     
       return count
  }


 


  const nan= vowelsNumber( 'aaaa i am of precaution')
 
 
 
  console.log( nan)