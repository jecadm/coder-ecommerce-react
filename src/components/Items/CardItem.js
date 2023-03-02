import ButtonAddCar from "./ButtonAddCar";
import ButtonDetail from "./ButtonDetalle";
import Description from "./Description";
import "../../components/Items/stylecard.css"
import  Image from "./img";
import ImgTest from "../../img/easte.svg"


const CardItem = (props) => {

    return(

    <div className="cardItem" >

        <Image imagen={props.imagen}/>
        <Description 
        title = {props.title}
        cantidad = {props.cantidad}
        precio = {props.precio}
        />

        <div className="buttons">
            <ButtonDetail />
            <ButtonAddCar  />

        </div>
     


    </div>

    )


}

export default CardItem;
