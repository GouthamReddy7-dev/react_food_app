import { useLocation } from "react-router-dom"
function Infos() {
    const location = useLocation()
    const { names, images, catrgorys } = location.state || {}
    let price = Math.floor(Math.random() * 25) + 1
    return (
        <>
            <div id="infodiv">
            <img src={images} id="infoimg" />
                <h1 id="infotext">{names}</h1>
                <h2 id="infocat">Category : {catrgorys}</h2>
                <h2 id="infoprice">price:{price} $</h2>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim, quam maxime, provident esse adipisci quas sed voluptates dolorem officia, maiores sit distinctio molestias veritatis neque.</p>
                <button id="firstbut">Add To Cart</button>
            </div>
        </>
    )
}
export default Infos