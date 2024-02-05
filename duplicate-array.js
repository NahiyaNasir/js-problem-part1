/*
*/ 
  function noduplicate(array){
    console.log(array)
    const unique=[]
     for(const item of array){
           console.log(item)
           if(unique.includes(item)===false){
            unique.push(item)
           }
     }
      return unique;
  }
   const uniqueArray= noduplicate([87,8,9, 54,90,12,1,1 ,88,88])
   console.log(uniqueArray)
   //