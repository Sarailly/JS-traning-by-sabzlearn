
let score =+prompt ("لطفا نمره را وارد کنید:");

//Check number is NaN
if (isNaN(score)) {
    alert("لطفا یک عدد وارد نمایید.");

} else {
    //score is a number

    if ( score > 20 ) {
        alert("نمره وارد شده صحیح نیست ");
    } else {
    //use swith-case

    switch(true){
        case score > 15 : {
            alert("garde A");
            break;
        }
        case score >=12 :{
             alert("garde B");
            break;
        }
        default : {
            alert("garde C");
        }

    }

    }
}
