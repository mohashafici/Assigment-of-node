// variables and data types

const ID="C1210045";
const name = "mohamed shafici abdirahmaan"; // string
let x=15;
let y=9;
var z=x+y;
console.log(z);
const num=252522;  // number or float integer

//operators
let n1=15;
let n2=9;
var resu=n1*n2;
const r=n1-n2;
console.log(resu),console.log(r);
console.log(++n1);



//assigned operator
console.log(n2+=10);
//comparision operators

console.log(n1>n2);
console.log(n1<n2);
console.log(n1>=n2);
console.log(n1<=n2);
console.log(n1==n2);
console.log(n1!=n2);
//logical operator

console.log(n1 && n2);
console.log(n1 || n2);
console.log(!n1);

//ternary operator

console.log(n1>n2?n1:n2);
//type casting :changing DT  into another DT 
//implicit :by deafult js is changing

console.log(n1+num);
console.log(n1+""+num);
console.log(n1+true);
//explicit casting :changing DT into another DT using built in functions

console.log(Number(n1)+num);
console.log(n1.toString()+num);
console.log(n1.toString()+true);


//conditionally

if(n1>n2&&num==0){
    console.log("hi thereround")
    console.log(n1+num);
}
else console.log("i know there is no result for this number")

//switch statement
switch (n2){
    case 1: console.log("one result")
    case2 : console.log("two result")
    break
    default: console.log("no result")
}