
import { Link } from "react-router-dom"
import { color, motion } from "framer-motion"
function Bigcard(props){
    const fadeinanimations={
        hidden:{opacity:0,y:20},
        shows:{opacity:1,y:0,transition:{duration:2}},
    }
    function addtocrt(){
        console.log("added")
        const red={
            "name":props.name,
            "category":props.category,
            "image":props.image,
            "quantity":1,
            "price":Math.floor(Math.random()*60)+1,
        }
        props.AddtoCart(red)
    }
    return(
        <>
        <motion.div 
        variants={fadeinanimations}
        initial="hidden"
        animate="shows"    // use whileInView to animate while in view or on scroll
        id="bigcards">
            <Link to='/info' state={{names:props.name,images:props.image,catrgorys:props.category}}><img src={props.image} id="bigimg"/></Link>
            <h3><strong>{props.name}</strong></h3>
            <div id="line"></div>
            <h5 id="cate">Category: <span id="catlabel">{props.category}</span> </h5>
            <h5 id="cate1">Area: <span id="catlabel">{props.region}</span></h5>
            <span className="material-symbols-outlined" style={{color:"yellow",position:"relative",bottom:"60px",cursor:"pointer",left:"55px"}}>star</span>
            <span className="material-symbols-outlined" style={{color:"yellow",position:"relative",bottom:"60px",cursor:"pointer",left:"55px"}}>star</span>
            <span className="material-symbols-outlined" style={{color:"yellow",position:"relative",bottom:"60px",cursor:"pointer",left:"55px"}}>star</span>
            <span className="material-symbols-outlined" style={{color:"yellow",position:"relative",bottom:"60px",cursor:"pointer",left:"55px"}}>star</span>
            <span className="material-symbols-outlined" style={{color:"yellow",position:"relative",bottom:"60px",cursor:"pointer",left:"55px"}}>star</span>
            <button id="firstbut" style={{position:"relative",right:"140px",bottom:"35px"}} onClick={addtocrt}>Order</button>
        </motion.div>
        </>
    )
}
export default Bigcard

/*        <>
        <div id="bigcards">
            <img src={props.image} id="bigimg"/>
            <h3><strong>{props.name}</strong></h3>
            <div id="line"></div>
            <h5 id="cate">Category: <span id="catlabel">{props.category}</span> </h5>
            <h5 id="cate1">Area: <span id="catlabel">{props.region}</span></h5>
            <span className="material-symbols-outlined" style={{color:"yellow",position:"relative",bottom:"60px",cursor:"pointer",left:"55px"}}>star</span>
            <span className="material-symbols-outlined" style={{color:"yellow",position:"relative",bottom:"60px",cursor:"pointer",left:"55px"}}>star</span>
            <span className="material-symbols-outlined" style={{color:"yellow",position:"relative",bottom:"60px",cursor:"pointer",left:"55px"}}>star</span>
            <span className="material-symbols-outlined" style={{color:"yellow",position:"relative",bottom:"60px",cursor:"pointer",left:"55px"}}>star</span>
            <span className="material-symbols-outlined" style={{color:"yellow",position:"relative",bottom:"60px",cursor:"pointer",left:"55px"}}>star</span>
            <button id="firstbut" style={{position:"relative",right:"140px",bottom:"35px"}}>Order</button>
        </div>
        </> */







        /*
         <>
        <motion.div 
        variants={fadeinanimations}
        initial="hidden"
        whileInView="shows"    // use whileInView to animate while in view
        id="bigcards">
            <img src={props.image} id="bigimg"/>
            <h3><strong>{props.name}</strong></h3>
            <div id="line"></div>
            <h5 id="cate">Category: <span id="catlabel">{props.category}</span> </h5>
            <h5 id="cate1">Area: <span id="catlabel">{props.region}</span></h5>
            <span className="material-symbols-outlined" style={{color:"yellow",position:"relative",bottom:"60px",cursor:"pointer",left:"55px"}}>star</span>
            <span className="material-symbols-outlined" style={{color:"yellow",position:"relative",bottom:"60px",cursor:"pointer",left:"55px"}}>star</span>
            <span className="material-symbols-outlined" style={{color:"yellow",position:"relative",bottom:"60px",cursor:"pointer",left:"55px"}}>star</span>
            <span className="material-symbols-outlined" style={{color:"yellow",position:"relative",bottom:"60px",cursor:"pointer",left:"55px"}}>star</span>
            <span className="material-symbols-outlined" style={{color:"yellow",position:"relative",bottom:"60px",cursor:"pointer",left:"55px"}}>star</span>
            <Link to='/info' state={{names:props.name,images:props.image,catrgorys:props.category}}><button id="firstbut" style={{position:"relative",right:"140px",bottom:"35px"}}>Order</button></Link>
        </motion.div>
        </>
         */