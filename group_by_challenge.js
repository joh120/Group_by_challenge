
// Group by Challenge 

function groupBy(arr, prop){
    let result = {} // create an empty object to store the result
    for (let i = 0; i < arr.length; i++){
        // Loop through the array of objects 

        let obj = arr[i] // get the object at the current index
        let key = obj[prop] // get the value of the specified property 
        if (!result[key]){ // if the key does not exist in the result object}
            result[key] = [] // create a new array for the key 
    }
    result[key]. push(obj) // Add the object to the array for the key 
    }
    return result
}

console.log(groupBy([
    
        { name: 'Alice', age: 25, city: 'New York' },
        { name: 'Bob', age: 30, city: 'Chicago' },
        { name: 'Charlie', age: 35, city: 'New York' },
        { name: 'Dave', age: 40, city: 'Chicago' }
        

                ], 'city'))



// Note- For objects keys can be have quotation marks or not. But overall keys are of a string data type.

// End of group-by challenge