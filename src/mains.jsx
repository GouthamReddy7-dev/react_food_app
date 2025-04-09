import combomeal from './asserts/combomeal.png'
import pasta from './asserts/pasta.jpg'
import pizza from './asserts/pizzas.png'
import burgersss from './asserts/burgerssss.jpg'
import sandwich from './asserts/sandwich.jpg'
import drinks from './asserts/drinks.jpg'
import sidechick from './asserts/sides.png'
import salad from './asserts/salads.jpg'
import './App.css';
import Navs from './nav';
import First from './first';
import Smallcards from './smallcards';
import Food from './food'
import Downimgs from './downimgs'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
function Mains(){
    return(
        <>
        <Navs/>
    <First/>
    <br></br>
    <Smallcards name="Combo Meal" image={combomeal}/>
    <Smallcards name="Pasta" image={pasta}/>
    <Smallcards name="Pizza" image={pizza}/>
    <Smallcards name="Burger" image={burgersss}/>
    <Smallcards name="Sandwich" image={sandwich}/>
    <Smallcards name="Drinks" image={drinks}/>
    <Smallcards name="Sides & Fries" image={sidechick}/>
    <Smallcards name="Salads" image={salad}/>
    <br></br>
    <br></br>
    <Food/>
    <Downimgs/>
        </>
    )
}
export default Mains