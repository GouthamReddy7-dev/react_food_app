import Cardimgdown from "./cardimgdown"
import fastd from './asserts/fastd.jpg'
import bike from './asserts/bikeimg.jpg'
import thirty from './asserts/thirtymin.jpg'
import { motion } from "framer-motion"
function Downimgs(){
    const fadeup={
        hidden:{opacity:0,x:-20},
        finals:{opacity:1,x:0,transition:{duration:2}},
    }
    const contvarient={
        hidden:{},
        finals:{transition:{staggerChildren:0.3}}
    }
    return(
        <>
        <motion.div id="dbox"
        initial="hidden"
        animate="finals"
        variants={contvarient}
        transition={{duration:1}}
        >
            <motion.div variants={fadeup}>
            <Cardimgdown image={bike}/>
            </motion.div>
            <motion.div variants={fadeup}>
            <Cardimgdown image={fastd}/>
            </motion.div>
            <motion.div variants={fadeup}>
            <Cardimgdown  image={thirty}/>
            </motion.div>
        </motion.div>
        </>
    )
}
export default Downimgs


/* <>
        <motion.div id="dbox"
        initial="hidden"
        whileInView="finals"
        variants={fadeup}
        >
        <Cardimgdown image={bike}/>
        <Cardimgdown image={fastd}/>
        <Cardimgdown  image={thirty}/>
        </motion.div>
        </> */