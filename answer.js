//Question-01

// To compare two JSON objects for equality without considering the order of properties, these are the following steps:
// * 		Converting both JSON objects to strings.
// * 		Sorting the properties of both strings.
// * 		Comparing the sorted strings for equality.
// Following is the function that implements this approach:

// function compareJSON(obj1, obj2) {
//     // Converting JSON objects to strings
//     let str1 = JSON.stringify(obj1);
//     let str2 = JSON.stringify(obj2);

//     // Sorting properties of both strings
//     let sortedStr1 = sortObjectProperties(str1);
//     let sortedStr2 = sortObjectProperties(str2);

//     // Comparing sorted strings for equality
//     return sortedStr1 === sortedStr2;
// }

// function sortObjectProperties(str) {
//     // Converting JSON string to object
//     let obj = JSON.parse(str);

//     // Sorting object properties
//     let sortedObj = {};
//     Object.keys(obj).sort().forEach(function(key) {
//         sortedObj[key] = obj[key];
//     });

//     // Converting sorted object back to string
//     return JSON.stringify(sortedObj);
// }


// let obj1 = { name: "Person 1", age: 5 };
// let obj2 = { age: 5, name: "Person 1" };

// console.log(compareJSON(obj1, obj2)); // Output: true


// This function compareJSON takes two JSON objects as arguments and returns true if they have the same properties (regardless of order) and false otherwise.
// It uses the sortObjectProperties function to sort the properties of each JSON string before comparing them.


//Question-02
var request=new XMLHttpRequest(); 

request.open("GET", "https://restcountries.com/v3.1/all")

request.send();

request.onload=function(){ 

var res =JSON.parse(request.response)

console.log(res)

for(var i=0;i<res.length;i++){

    console.log(res[i].name.common)
} 

}


// Question-03
var request=new XMLHttpRequest(); 

request.open("GET", "https://restcountries.com/v3.1/all")



request.send();



request.onload=function(){ 

var res =JSON.parse(request.response)

console.log(res)

for(var i=0;i<res.length;i++){

    console.log("Name:", res[i].name.common);
    console.log("Region:", res[i].region);
    console.log("Sub-region:", res[i].subregion);
    console.log("Population:", res[i].population);

}

}