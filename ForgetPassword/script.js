let users =[

{ id:1 , username:"sara" , password:"sara1278"},
{ id:2 , username :"saman" , password:"saman896"},
{ id:3 , username:"masoud" , password:"ma9876"},
{ id:4 , username:"sajad" , password:"xcv1236"},
{ id:5 , username:"mahan" , password:"ll@001"},
];

const forgetUsername = prompt ("enter the username:");

if (forgetUsername.trim().length === 0){
    alert("نام کاربری را وارد نمایید")
}else{
    let mainUser = users.find(function(user){
        return user.username === forgetUsername ;
     });
     
   if(mainUser=== undefined){
    alert("کاربری یافت نشد");
   } else{
    alert("your password : "+ mainUser.password);
   } 
}