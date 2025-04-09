import { motion } from "framer-motion"
function Smallcards(props){
    const fadeinup={
        hidden:{opacity:0,y:20},
        display:{opacity:1,y:0,transition:{duration:1.5}}
    }
    return(
        <>
        <motion.div id="smallcard"
        variants={fadeinup}
        initial="hidden"
        whileInView="display"
        >
            <img src={props.image} id="smlcardimg" />
            <h5><strong>{props.name}</strong></h5>

        </motion.div>
        </>
    )
}
export default Smallcards