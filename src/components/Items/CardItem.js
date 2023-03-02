import ButtonAddCar from "./ButtonAddCar";
import ButtonDetail from "./buttonDetalle";
import Description from "./Description";
import "../../components/Items/stylecard.css"
import  Image from "./img";
import ImgTest from "../../img/easte.svg"


const CardItem = () => {

    return(

    <div className="cardItem" >

        <Image imagen={ImgTest}/>
        <Description title="algo va por aca "/>
        <div className="btn">
            <ButtonDetail />
            <ButtonAddCar  />

        </div>
    


    </div>

    )


}

export default CardItem;
