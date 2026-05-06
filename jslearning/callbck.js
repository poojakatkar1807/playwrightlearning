

function orderFood(func1, func2, func3){
    console.log("1 - User Order Food")
    func1(func2,func3);
}
function prepareFood(func1,func2){
    setTimeout(()=>{
    console.log("2 - Resto prepare Food")
    func1(func2);
    },10000);
}
function delivery(func1){
    setTimeout(() =>{
    console.log("3 - Order has been deliver to customer")
        func1();
    },5000);
}
function rating(){
    console.log("4 - User given 5 star rating")
}
orderFood(prepareFood, delivery,rating);