// 1.Array creation and Intialiation
let array = [1,2,3,4,5];
console.log("Array Creation and Intialization");
console.log(array)

// 2.Array Manipulation 

console.log("Array Manipulation with slice()");

// a. Array push
let array1= [2,4,5,6,9,2];
console.log("Array push");
console.log(array1.push(10));

//b.Array pop

let array2= [2,4,5,6,9,2];
console.log("Array pop");
console.log(array2.pop());

//c. Array shift

let array3= [2,4,5,6,9,2];
console.log("Array Shift number");
console.log(array3.shift(3));
console.log(array3);

//3. Array Searching
var agash= [ 2,3,7,2,5];
console.log("Array Searhing");
console.log(agash.indexOf(5));

// 4. Array Filtering
let fil=[1,3,4,5,6,7,2,8,9]
console.log("Array Filtering");
console.log(fil.filter((x) => x < 4));

// 5. Array Mapping
let map=[4,3,5,7,8,2,3]
console.log("Array Mapping");
console.log(map.map((x) => x * 2));


// 6a. Array Sorting
console.log("Array Sorting");
let  sor = [7,4,3,6,8,9,1,2]
console.log(sor);
console.log(sor.sort());

// 6b. Array Reverse

console.log("Array Reverse");
let reverse=[1,2,3,4,5,6,7,8,9]
console.log(reverse);
console.log(reverse.reverse());


 //6b.Array Reverse

 console.log("Array Reverse");
 let array4= [1,2,3,4,5,6,7,8,9];
 console.log(array4);
 console.log(array4.reverse());
 
// 7a. Array Join
console.log("Array Join");
let jin=[1,2,3,4,5,6]
console.log(jin);

// 7b.Array split

let array7= "Hello, World!";
console.log("Array Split");
console.log(array7.split(", "));

// 8. Array Destructing
console.log("Array Destructing");
let dest = [1, 2, 3, 4, 5];
console.log(dest);
let [b, c, d, e]=dest;
console.log(dest);


// 9.Array Spreading
console.log("Array Spreading")
let spread1=[1,2,3,4,5];
let spread2=[6,7,8,9,3];
let result=[...spread1,...spread2]
console.log(result);

//10a. max array
let arrMax= [4,3,7,9,2]
console.log("Max Array");
console.log(Math.max(...arrMax));

//10b. min array

let arrMin= [4,3,7,9,2]
console.log("Min Array");
console.log(Math.min(...arrMin));


// 11. Array Flattering
console.log("Array Flattering")
let flat=[[1,2],[3,4],[5,6],[7,8]];
let flatarr=flat.flat();
console.log(flatarr);


//12. Array Checking

var array10= [ 2,3,7,2,5];
console.log("Array Chicking");
console.log(array10.includes(9));

// 13. Array objects sorting

console.log("Array objects sorting")
let obj = [4, 2, 9, 1, 5];
console.log(obj);
obj.sort((a, b) => a - b);
console.log("Sorted Array in ascending order:", obj);

// 14. Merging of Arrays

console.log("Merging of Arrays");
let mer1 = [1, 3, 5, 7];
let mer2 = [2, 4, 6, 8];
console.log("Array 1:", mer1);
console.log("Array 2:", mer2);
let mergedArray = [...mer1,...mer2];
console.log("Merged Array:", mergedArray.sort());


// 15. Finding the index of first occurance

console.log("Finding the index of first occurance");
let arra = [2,7,4,5,8]
console.log(arra);
let elements = 5;
console.log("Element:", elements);
let inde = arra.indexOf(elements);
if (inde !== -1) {
    console.log("Index of first occurrence:", inde);
} else {
    console.log("Element not found in array");
}

//19. Finding the difference between two arrays

console.log("Finding the difference between two arrays");

let arr1 = [1,2,3,4,5];
let arr2 = [5,6,7,8,9];
console.log("Array 1:", arr1);
console.log("Array 2:", arr2);

let diff = arr1.filter(x => !arr2.includes(x));
console.log("Difference:", diff);

//21.Aray Intersection of two sets

console.log("Aray Intersection of two sets");

let set1 = new Set([1, 2, 3, 4, 5]);
let set2 = new Set([3, 4, 5, 6, 7]);
console.log("Set 1:", set1);
console.log("Set 2:", set2);

let intersection = new Set([...set1].filter(x => set2.has(x)));

console.log("Intersection:", [...intersection]);

//33. Array Rotation

let arr8 =[1,2,3,4,5];
console.log(rotating(arr8,4));
 function rotating(arr,n){
    for (let i = 0; i < n; i++) {
        arr.unshift(arr.pop());
    }
  
    return arr;
 }

// Array Concat

let array5= [1,2,3,4,5,6];
let array6= [7,8,9];
console.log("Array Concat");
console.log(array5.concat(array6));

// Multiple of 3 and 5
let a ;
for(a=1;a<=100;a++){
    if(a%3==0 && a%5==0){
        console.log("FizzBuzz");
        
    }
    else if(a%3==0){
        console.log("Fizz");
        
    }
    else if(a%5==0){
        console.log("Buzz");
    }
    else{
        console.log(a);
    }
}



// returns the largest number

let arr=[3,5,1,4,7];
let max3=arr[0];
for(let a=1;a<arr.length;a++){
    if(arr[a]>max3){
        max3=arr[a];
    }
    console.log(arr);
    console.log(max3);
}

// Occurance value

let txt1 = "Welcome to Great Magic Show"
console.log(txt1);
let count = 0;
for (let a = 0; a < txt1.length; a++) {
    if (txt1[a] == "e") {
        count += 1;
    }
}
console.log(count);

// Longest word in String

let txt = "Good Evening";
console.log(txt);
let max = 0;
let word = "";
for (let i = 0; i < txt.length; i++) {
    if (txt[i] == " ") {
        if (max < word.length) {
            max = word.length;
            word = word;
        }
        word = "";
    } else {
        word += txt[i];
    }
}
console.log(word);