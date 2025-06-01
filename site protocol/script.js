let url =prompt("please enter url..");
 const siteProtocol= url.slice(0,5);

 if(siteProtocol=== "https"){
    alert("site have ssl and safe");
 }else{
    alert("site have not ssl ");
 }