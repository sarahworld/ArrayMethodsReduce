
// Write a function called extractValue which accepts an array of objects and a key and returns a new array with the value of each object at the key.

// Examples:
    

function extractValue(arr, key) {
    const valArr = arr.reduce(function(values, nextObj){
        (values).push(nextObj[key]);
        return values;
    }, []) // square bracket is the initial value here.
    return valArr
   
}

// const arr = [{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}]
// console.log(extractValue(arr,'name')) // ['Elie', 'Tim', 'Matt', 'Colt']


/*
Write a function called vowelCount which accepts a string and returns an object with the keys as the vowel and the values as the number of times the vowel appears in the string. This function should be case insensitive so a lowercase letter and uppercase letter should count

Examples:
    vowelCount('Elie') // {e:2,i:1};
    vowelCount('Tim') // {i:1};
    vowelCount('Matt') // {a:1})
    vowelCount('hmmm') // {};
    vowelCount('I Am awesome and so are you') // {i: 1, a: 4, e: 3, o: 3, u: 1};
*/

function vowelCount(str) {
    const strToArr = Array.from(str.toLowerCase());
    return strToArr.reduce(function(letter, currVal){
        if('aeiou'.indexOf(currVal) !== -1){
            if(letter[currVal]){
                 letter[currVal]++;
            } else{
                 letter[currVal] = 1;
            } 
        }
        return letter
    },{})
    
}
console.log(vowelCount('Tim'))
/*
Write a function called addKeyAndValue which accepts an array of objects and returns the array of objects passed to it with each object now including the key and value passed to the function.

Examples:
    const arr = [{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}];
    
    addKeyAndValue(arr, 'title', 'Instructor') // 
      [
        {title: 'Instructor', name: 'Elie'}, 
        {title: 'Instructor', name: 'Tim'}, 
        {title: 'Instructor', name: 'Matt'}, 
        {title: 'Instructor', name: 'Colt'}
       ]
*/

function addKeyAndValue(arr, key, value) {
    const pairObj = arr.reduce(function(accu, currVal,idx){
        accu[idx][key] = value
        return accu
   
    }, arr)
       
    return pairObj;
}

// const arr = [{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}];
// console.log( addKeyAndValue(arr, 'title', 'Instructor'));
// 
/*
Write a function called partition which accepts an array and a callback and returns an array with two arrays inside of it. The partition function should run the callback function on each value in the array and if the result of the callback function at that specific value is true, the value should be placed in the first subarray. If the result of the callback function at that specific value is false, the value should be placed in the second subarray. 

Examples:
    
    function isEven(val){
        return val % 2 === 0;
    }
    
    const arr = [1,2,3,4,5,6,7,8];
    
    partition(arr, isEven) // [[2,4,6,8], [1,3,5,7]];
    
    function isLongerThanThreeCharacters(val){
        return val.length > 3;
    }
    
    const names = ['Elie', 'Colt', 'Tim', 'Matt'];
    
    partition(names, isLongerThanThreeCharacters) // [['Elie', 'Colt', 'Matt'], ['Tim']]
*/

function partition(arr, callback) {
    return arr.reduce(function(subarray, currVal){

        if(callback(currVal)){
            subarray[0].push(currVal)
        }
        else{subarray[1].push(currVal)}

        return subarray
    }, [[],[]])
}


function isEven(val){
    return val % 2 === 0;
}

const arr = [1,2,3,4,5,6,7,8];

console.log(partition(arr, isEven));

function isLongerThanThreeCharacters(val){
    return val.length > 3;
}

const names = ['Elie', 'Colt', 'Tim', 'Matt'];

console.log(partition(names, isLongerThanThreeCharacters)) // [['Elie', 'Colt', 'Matt'], ['Tim']]