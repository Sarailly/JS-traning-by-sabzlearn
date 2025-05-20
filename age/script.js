
//Ex1 calculate age with BirthYear

// let BirthYear = +prompt ("لطفا سال تولد را وارد نمایید.");
// let userAge = 1404 - BirthYear ;
// alert ("سن شما" + userAge + "است.");


//EX2 calculate hours & minutes

let userMinutes =+prompt("لطفا تایم را برحسب دقیقه وارد نمایید:");
let hours =Math.floor(userMinutes / 60);
let minutes=(userMinutes % 60);

alert(hours+"H, "+minutes+"M ")

