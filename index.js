// Code your solution here
function findMatching(arry, name){
    const newarry = []
   for (const drivers of arry){
       if (drivers === name || drivers.toUpperCase() === name.toUpperCase()){
           newarry.push(drivers);
       }      
   } 
 return newarry
}

function fuzzyMatch(arry, str){
    const newarry = []   
    for (const drivers of arry){
        if (drivers.substring(0,2) === str){
            newarry.push(drivers)

        }
    }
    return newarry
}
function matchName(arry, str){
    const newarry = []
    for(const drivers of arry){
        if (drivers.name === str){
            newarry.push(drivers);
        }
    }
    return newarry

}



