import brand from "../img/easte.svg"
import {Link} from "react-router-dom"

const Brand = () => {
    return(
        <Link to="/"><img src={brand} alt="Tenda Frist" title="Teinda First"></img></Link>
    )
}

export default Brand;
