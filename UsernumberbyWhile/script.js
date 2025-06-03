let userNumber = +prompt("enter the number:");
let sum = 0;
let count = 0;

while (userNumber/10!==0) {
    sum = sum +(userNumber % 10);
    //265%10=5 ,26%10=6 ,2%10=2 =>5+6+2=13:sum
    count++;
    userNumber = Math.floor(userNumber/10);
    //265/10=26 ,26/10=2 ,2/10=0 =>26 ,6,2 :userNumber
}
alert("sum of digit: "+ sum +"\n count of number: "+ count);
// for enter use \n