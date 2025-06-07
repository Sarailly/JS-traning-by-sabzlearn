const users = [
    {id:1 , name:"sara", family:"illy" , email:"sara@gmail.com" , age:38 },
    {id:2 , name:"masoud", family:"kakouei" , email:"masoud@gmail.com" , age:37 },
    {id:3 , name:"samane", family:"gheibi" , email:"samane@gmail.com" , age:40 },
] ;

//4 input
const  name = prompt("نام را وارد نمایید.");
const  family = prompt("نام خانوادگی را وارد نمایید.");
const  email = prompt("ایمیل را وارد نمایید.");
const  age = +prompt("سن را وارد نمایید.");

if(name.length < 3 || name.length > 10){
    alert("نام باید بین 3 تا 10 کاراکتر باشد.");
}else if(family.length < 3 || family.length > 15){
    alert("نام خانوادگی باید بین 3 تا 15 کاراکتر باشد.");
}else if (isNaN(age) || age < 18){
    alert("سن باید بیشتر از 18 یا 18 باشد.");
}//validation email
else if(email.search("@gmail.com")=== -1){
alert("ایمیل وارد شده معتبر نمی باشد");
}else{
    //define new user
    let newUser = {
        id:users.length + 1,
        name:name,
        family:family,
        email: email ,
        age:age,
    };
    console.log(newUser);
}


