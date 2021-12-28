// var printfullname = function(){
//     return this.lastname+", "+this.firstname;
// }; 

// var student3 ={
//     firstname: "mohamed",
//     // lastname: "musthafa",
//     fullname:printfullname,
// };

// console.log(student3.fullname());


// var student2 = {
//     firstname: "vijaya",
//     lastname: "bharathy",
//     fullname:printfullname,
    
// };

// console.log(printfullname.call(student3));
// console.log(printfullname.apply(student2));



// task 1
// 1.call- taking input argument  as single element whatever give
// 2.apply-taking input argument as an array
// 3.bind- will return a new function and can pass argument as array/one by one;


var person={ firstname:"narendra",lastname:"modi"};


function say(greating){
    console.log(greating+" "+this.firstname+" "+this.lastname);
}

// call-example
say.call(person,"hello");  //argument as string


//apply- example
say.apply(person,["how are you"]); // argument as array

function say(greating){
    console.log(greating+" "+this.firstname+" "+this.lastname);
}
 
//bind -example

say.bind(person)("hello");

var sayany=say.bind(person);
sayany(["where are you"])  // bind returning a new function and can pass argument as array or single element


// task 2

// prototype inherittence

// * The properties of object can use in another object by using prototype inheritence


// example

const spec ={ eye:2,leg:4}// this one speciliced object


const cat={sound:"meow",__proto__:spec}; //by using of prototype ihertence
// can use properties of object spec in object cat.

console.log(cat.leg)//swhere ever require the properties of spec can reuse




