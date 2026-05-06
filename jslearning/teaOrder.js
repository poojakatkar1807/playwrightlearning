

/*function orderTea(cust_name, tea_type, func)
{
    console.log(tea_type + "Tea for" + cust_name)

    setTimeout(function(){console.log(tea_type + "is prepared for" + cust_name)
    },5000)
    func(cust_name);
}

function haveSeat(cust_name){

    console.log(cust_name+"taken a seat")
}

orderTea("Pooja", "Black", haveSeat);
orderTea("Prachi", "Ginger", haveSeat);*/

function orderTea(cust_name, tea_type, func)
{
    // fullfilled, pending, rejected 
    return new Promise((a,b)=> {

        let success = false;
        if(success){
            a(cust_name+ "!"+tea_type+" tea is prepared. Enjoy")
        }
        else{
            b(cust_name+ "!"+tea_type+" tea is not prepared. Apologies")
        }
    });
}
orderTea("Pooja", "Black")
.then(data=>{
    console.log(data);
})
.catch(data=>{
    console.log(data);
})
