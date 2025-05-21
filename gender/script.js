
    let userAge =+prompt("لطفا سن خود را وارد نمایید.");
    let userGender= prompt("لطفا جنسیت خود را(زن/مرد) وارد نمایید.");

    //check is NaN
  if(isNaN(userAge)){
    alert("لطفا عدد صحیح وارد نمایید.");
  }else{
    //Check male/female
    if(userGender=== "زن" ||userGender === "مرد"){
        //check female/ <18
        if(userGender=== "زن" ||userAge < 18){
            alert("به صفحه دسترسی ندارید");
        }else{
        //male or >18
           alert("شما میتونین وارد صفحه بشید.");
        }
    }else {
        //you are not male/female
    alert("شما دسترسی ندارید");
  }

  }