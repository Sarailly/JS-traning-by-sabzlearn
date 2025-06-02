

let captcha = Math.floor(Math.random()*100000);

const userCaptcha=+prompt("please enter the captcha= " + captcha);

if(userCaptcha===captcha){
    alert("the code is true")
}else{
    alert("the code is wrong")
}

