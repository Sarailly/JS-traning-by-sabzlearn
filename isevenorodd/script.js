
    const usernumber =+ prompt ("یک عدد وارد نمایید.") ;

    function isEvenOrOdd (number) {
        if(usernumber%2===0){
            alert( number+"Is even");
        }else{
            alert( number+"Is odd");
        }
    }
    if (isNaN(usernumber)){
        alert("لطفا عدد وارد نمایید.")
    }else{
        isEvenOrOdd(usernumber)
    }