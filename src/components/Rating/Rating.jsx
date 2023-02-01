import "./Rating.css"
import uncoloredStar from "./../../assets/star_uncolored.png";
import coloredStar from "./../../assets/star_colored.png";

export const Rating = ({rating}) => {
    // Convert number into array example : 4 => [0,1,2,3]
    const coloredStars = Array.from(Array(parseInt(rating)).keys());

    // Complete the colored stars
    const uncoloredStars = Array.from(Array(5 - parseInt(rating)).keys())


    return (<div className="rating">
        {coloredStars.map((_,key) => (
            <img className="rating__star" key={key} src={coloredStar} alt={"star colored " + (key+1)}/>
        ))}
        {uncoloredStars.map((_,key) => (
            <img className="rating__star" key={key} src={uncoloredStar} alt={"star uncolored"}/>
        ))}
    </div>)
}