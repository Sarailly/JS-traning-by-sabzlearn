    
  //شمارش تعدادارفام عدد ورودی
let userNumber = +prompt("لطفا عدد را وارد نمایید.");
let count = 0;

//validation number
if(isNaN(userNumber)){
    alert("لطفا عدد صحیح وارد نمایید.");
}else{
    if(userNumber===0){
        count=1;
    }else{
        for (let i = 0; userNumber!==0; i++) {
           count++;
           userNumber = Math.floor(userNumber/10);
           //for separate number use /10=> 258/10=25 ,25/10=2 , 2/10=0 then =>count=3
        }
        alert("تعداد ارقام: "+ count);
    }
}
