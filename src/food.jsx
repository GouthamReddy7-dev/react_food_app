import Bigcard from "./bigcard"
import sushi from './asserts/sushi.jpg'
import lasagna from './asserts/lasagna.jpg'
import spagati from './asserts/spagatti.jpg'
import tacos from './asserts/tacos.jpg'
import biryani from './asserts/biryani.jpg'
import butterchicken from './asserts/butterchicken.jpg'
import paneers from './asserts/paneer.jpg'
import chitikka from './asserts/chickentikka.jpg'
import ramen from './asserts/ramen.jpg'
import dumplings from './asserts/dumplings.jpg'
import sunde from './asserts/icecreamsundae.jpg'
import macaroons from './asserts/macaroons.jpg'
import cheasecake from './asserts/cheesecake.jpg'
import mangolasi from './asserts/mangolassi.jpg'
import rasugulla from './asserts/rasgulla.jpg'
import pinacolada from './asserts/pinacolada.jpg'
import { Link } from "react-router-dom"
import { useState } from "react"
function Food(){
    const [cartitems,setcartitems]=useState([])
    function addtocart(items){
        setcartitems((prvitems)=>[...prvitems,items])
        console.log(cartitems)
    }
    return(
        <>
        <div id="firstmain" style={{background:"white",width: "1258px",textAlign:"center",height:"1700px",border:"none"}}>
            <h2><strong style={{position:"relative",left:"50px"}}>Our Popular items</strong> <Link to="/cart" state={{cartitems}}><button id="firstbut" style={{position:"relative",left:"350px"}}>Cart</button></Link></h2>
            <p style={{color:"gray"}}>We serve the most delicious and best food with fast delivery facility, ensuring satisfaction, exceptional quality, and a delightful experience every time. </p>
            <Bigcard image={sushi} name="Sushi" category="Seafood" region="Japanes" AddtoCart={addtocart}/>
            <Bigcard image={lasagna} name="lasagna" category="casserole" region="Italian" AddtoCart={addtocart}/>
            <Bigcard image={spagati} name="spaghetti" category="Pasta" region="Italian" AddtoCart={addtocart}/>
            <Bigcard image={tacos} name="tacos" category="Wraps" region="mexican" AddtoCart={addtocart}/>
            <Bigcard image={biryani} name="biryani" category="biryani's" region="Indian" AddtoCart={addtocart}/>
            <Bigcard image={butterchicken} name="butterchicken" category="curry" region="Indian" AddtoCart={addtocart}/>
            <Bigcard image={paneers} name="paneer butter masala" category="curry" region="Indian" AddtoCart={addtocart}/>
            <Bigcard image={chitikka} name="chitikka" category="appitizers" region="Indian" AddtoCart={addtocart}/>
            <Bigcard image={ramen} name="ramen" category="nooduls" region="Japanes" AddtoCart={addtocart}/>
            <Bigcard image={dumplings} name="dumplings" category="appitizers" region="Japanes" AddtoCart={addtocart}/>
            <Bigcard image={sunde} name="sunde" category="deserts" region="Italian" AddtoCart={addtocart}/>
            <Bigcard image={macaroons} name="macaroons" category="deserts" region="Italian" AddtoCart={addtocart}/>
            <Bigcard image={cheasecake} name="cheasecake" category="deserts" region="american" AddtoCart={addtocart}/>
            <Bigcard image={mangolasi} name="mangolasi" category="Drinks" region="Indian" AddtoCart={addtocart}/>
            <Bigcard image={rasugulla} name="rasugulla" category="deserts" region="Indian" AddtoCart={addtocart}/>
            <Bigcard image={pinacolada} name="pinacolada" category="Drinks" region="Puerto Rico" AddtoCart={addtocart}/>
        </div>
        </>
    )
}
export default Food