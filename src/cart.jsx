import { useLocation } from "react-router-dom"
import { useState,useEffect } from "react"
function Cart(){
    let ct=0
    const [total,settotal]=useState(0)
    const location=useLocation()
    const CArtitems=location.state?.cartitems || []
    function prints(){
        console.log(CArtitems)
    }
    function checkOut(){
        CArtitems.map((ite,index)=>{
            ct+=ite.price

        })
        settotal(ct)
    }
    useEffect(()=>{
        checkOut()
    },[total])
    return(
        <>
         <h1>cart page</h1>
            {CArtitems.length > 0 ? (<>
                <h1>Your cart Items: </h1>
                {CArtitems.map((item, index) => (
                    <div key={index} id="cart-box">
                        <img src={item.image} alt="food image" id="cart-img" />
                        <h1 id="cart-item-name">{item.name}</h1>
                        <h4 id="cart-cate">{item.category}</h4>
                        <h3 id="cart-price">price: {item.price}</h3>

                    </div>
                ))}
            </>) : (<>
                <h1>your cart is empty</h1>
            </>)}
            <h1 id="cart-total">Total : {total}</h1>
          
        </>
    )
}
export default Cart