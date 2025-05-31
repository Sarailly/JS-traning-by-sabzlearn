    let username = prompt ("یوزرنیم را وارد نمایید.");
    let password = prompt ("پسورد را وارد نمایید.");

 console.log("username = " , username.length);
 console.log("password = ", password.length);

 if(username.length<3 || password.length <8){
    alert("یوز یا پسورد صحیح را وارد نمایید")
 }else{
    alert("ثبت نام انجام شد.")
 }