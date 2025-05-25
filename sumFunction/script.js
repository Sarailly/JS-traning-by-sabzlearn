    const num1 =+prompt("عدد اول را وارد نمایید.");
    const num2 =+prompt("عدد اول را دوم نمایید.");

    function sumTwoNumbers (number1 , number2){

        const sum = number1 + number2 ;
        alert(sum);
    }

    if (isNaN(num1) || isNaN(num2)){
        alert("لطفا عدد صحیح وارد نمایید.");
    }else{

        sumTwoNumbers(num1,num2)

    }


