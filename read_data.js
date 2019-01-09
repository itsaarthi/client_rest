var readline =require('readline');
var r1=readline.createInterface(
{
input:process.stdin,
output:process.stdout
});
r1.question("register Login", function(answer){
function switch(answer)
{
case 1:
console.log("Register");
break;
case 2;
console.log("Login");
break;
}
