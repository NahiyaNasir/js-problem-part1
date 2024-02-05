/* Task-4:
Write a function to find the longest word in a given string.

sample-input: I am learning Programming to become a programmer

sample-output: Programming */
  

function largestWord( string){
    let stringArray=string.split(' ');
        console.log(stringArray)
        let highest=''
      //  let emt=[]
      for(i=0; i< stringArray.length; i++){
        if(stringArray[i].length>highest.length){
            highest=stringArray[i]
        }
    
      }
      return highest
      
}
  
 const str=(' I am learning Programming to become a programmer')
  const output=largestWord(str)
    console.log(output)
