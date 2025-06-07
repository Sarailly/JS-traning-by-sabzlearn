const products =[
        {id:1 ,title:"mobile" ,    price: 90 , qty:25 },
        {id:2 ,title:"laptop" ,    price: 50 , qty:8 },
        {id:3 ,title:"headphone", price: 40 , qty:15 },
        {id:4 ,title:"ram" ,       price: 30 , qty:0 },
        {id:5 ,title:"milk",      price: 90 , qty:10 },
];

const basket = [
    { id:1 , title:"mobile" , price:90},
    { id:1 , title:"headphone" , price:40},
    { id:1 , title:"milk" , price:90},
];

const userProductTitle = prompt ("enter the product tittle");

//check for enter title
if(userProductTitle.length > 0 ){
   const isInShop = products.some(function(product){
    return product.title === userProductTitle && product.qty >0 ;
   });

   if (isInShop === true){
    let basketNewProduct = {
        id: basket.length + 1 ,
        title : userProductTitle ,
    };
    //calculate price 
    products.forEach(function(product){
        console.log(product);

        if(product.title === userProductTitle ){
             console.log("محصول یافت شد");
          basketNewProduct.price = product.price  ;
        }
    });
    basket.push(basketNewProduct);
//access to price
    let totalPrice = 0;
    basket.forEach(function(product){
        totalPrice += product.price ;
    });
    alert("totalprice:" + totalPrice);

    console.log("basket ->", basket);

   }else{
    alert("Sold out");
   }

    
}else{
    alert("enter the product name " );
}