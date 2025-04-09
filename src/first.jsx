import burger from './asserts/burg.jpg'
import { motion} from 'framer-motion'
const fadeinanime ={
    hidden:{opacity:0,y:100},
    show:{opacity:1,y:0,transition:{duration:2}},

}
const containerVariant = {
    hidden: {},
    show: {
      transition: {
        staggerChildren:0.3 // Stagger each child by 0.3 seconds
      },
    },
  }
function First(){
    return(
        <>
        <div id="firstmain">
        <img src={burger} id='burgimg'></img>
            <motion.div id="firstleft"  
            variants={containerVariant}
            initial="hidden"
            whileInView="show"
            //animate="show"
            transition={{duration:2}}
            >
                <br></br>
                <br></br>
                <motion.h3
                variants={fadeinanime}
                /*initial="hidden"
                animate="show"
                transition={{duration:2}} */
                >Discover Delight at Fastfood TNC</motion.h3>
                <br></br>
                <motion.h1 variants={fadeinanime}>Your GO-To Spot for Quick and Tasty Eats</motion.h1>
                <motion.p variants={fadeinanime}>Where quick eats and quality collide. crafting a taste sensation.speed meets flavour in every bite. promising a culinary journey that as swift as it is delicious</motion.p>
                <motion.button id="firstbut" variants={fadeinanime}><strong>Order Now</strong></motion.button>
            </motion.div>
        </div>
        </>
    )
}
export default First

/*<div id="firstmain">
        <img src={burger} id='burgimg'></img>
            <div id="firstleft">
                <br></br>
                <br></br>
                <h3>Discover Delight at Fastfood TNC</h3>
                <br></br>
                <h1>Your GO-To Spot for Quick and Tasty Eats</h1>
                <p>Where quick eats and quality collide. crafting a taste sensation.speed meets flavour in every bite. promising a culinary journey that as swift as it is delicious</p>
                <button id="firstbut"><strong>Order Now</strong></button>
            </div>
        </div> */




        /*<motion.h3
                initial={{opacity:0,y:100}}
                animate={{opacity:1,y:0}}
                transition={{duration:2}}
                >Discover Delight at Fastfood TNC</motion.h3> */