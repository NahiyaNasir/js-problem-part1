


//12 inch 1feet
// inch to feet
   function inchToFeet(inch){
        const feet=inch/12;
        return feet
   }

   const value=inchToFeet(65);
   console.log(value);
   console.log('-----------')
    //parse int using 
    function inchToFeet1(inch){
        const feetFraction=inch/12;
        const feetNumber=parseInt(feetFraction)
        const inchRemaining= inch %12
        const result=`${feetNumber} fit   ${inchRemaining}  inch`
        return  result
   }

   const value1=inchToFeet1(69);
   console.log(value1);
   console.log('-----------')


 // milles to kilometer
   function millesToKilometer(mile){
       const kilo= mile*1.60954;
       return kilo
   }
      const value2=millesToKilometer(3);
      console.log(value2)
      console.log('-------')
       //  kilometer to miles
        function kiloTomiles(kilo){
             const miles=kilo* 0.62137119;
             return miles
        }
         const value3=kiloTomiles(6)
         console.log(value3);