import {useState} from "react";
import './Carousel.css'
import arrow from "./../../assets/arrow_down.png"
export const Carousel = ({pictures}) => {
    const [index, setIndex] = useState(0);

    // index + 1  for change image, if last index, return to the first index
    const increaseIndex = () =>  index === pictures.length - 1 ? setIndex(0) : setIndex(index +1);

    // index - 1 for change image, if first index, return to the last index
    const decreaseIndex = () => index === 0 ? setIndex(pictures.length-1) : setIndex(index-1);


    return (
        <div className="carousel">
            {pictures?.length>1  && <div onClick={decreaseIndex} className="carousel__arrows left"><img  src={arrow} alt="left arrow"/></div>}
            {pictures && <img src={pictures[index]} className="carousel__image" alt={`${index}`}/>}
            {pictures?.length>1  && <div onClick={increaseIndex} className="carousel__arrows right"><img src={arrow} alt="right arrow"/></div>}
        </div>
    )
}