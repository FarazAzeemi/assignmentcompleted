const prompt = require('prompt-sync')({ sigint : true});

let userInput = parseInt(prompt("Enter the number here"));
if (userInput < 0 || userInput > 100){

console.log("Invalid Number");
}
else if( userInput <= 100 && userInput >= 90){
    console.log("Excellent");

}
else if(userInput >= 80 && userInput <= 90){
    console.log("Very Good");
}
else if(userInput >= 70 && userInput <= 80){
    console.log("Good");
}
else if(userInput >= 60 && userInput <= 70){
    console.log("Fair");
}
else if(userInput >= 50 && userInput <= 60){
    console.log("Below Average");
}
else if(userInput < 50){
    console.log("Failed");
}
