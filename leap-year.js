//simple  logic
// if given  year  divisible by 4 than it is leap year
   function isLeapYear(year){
    if(year%2==0){
        return true
    }
    else{
        return false
    }
   }
    const islipi=isLeapYear(2045)
    console.log(islipi)
     console.log('-------')
     /* 1 those year that is not divisible by 100 , if the year is divisible by 4
     than that year is leap year
      * 2
      */
       function leapYear(year){
        if(year %100!==0 && year%4===0){
          return true
        }
        else if(year %400===0){
            return true
        }
        else{
            return true
        }
       }
          const islipi2=leapYear(2010 )
          const islipi3=leapYear(2042 )
          const islipi4=leapYear(1900 )

          
           console.log(islipi2)
           console.log(islipi3)
           console.log(islipi4)