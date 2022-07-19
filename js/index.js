// Iteration 1: Names and Input
//
console.log("I'm ready!");

let hacker1="Driver";
console.log("The driver's name is "+hacker1);
let hacker2="Navigator";
console.log("The navigator's name is "+hacker2);

// Iteration 2: Conditionals

if(hacker2.length<hacker1.length){
    console.log("The driver has the longest name, it has "+hacker2.length+" characters");
}

else if(hacker1.length<hacker2.length){
    console.log("It seems that the navigator has the longest name, it has "+hacker2.length+" characters")
}

else {console.log("Wow, you both have equally long names, "+hacker1.length+" characters!");}

// Iteration 3: Loops

let hacker1v2="";

for(let i=0 ; i<hacker1.length ; i++){
    hacker1v2+= hacker1[i]+" ";
}

console.log(hacker1v2.toUpperCase());

let hacker2v2="";

for(let i=hacker2.length-1 ; i>=0 ; i--){
    hacker2v2+= hacker2[i];
}

console.log(hacker2v2);

if (hacker2<hacker1){console.log("The driver's name goes first.")}
else if(hacker1<hacker2){console.log("Yo, the navigator goes first definitely.")}
else {"What?! You both have the same name?"}
    
