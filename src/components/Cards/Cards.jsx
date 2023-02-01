import './Cards.css'
import {Link} from "react-router-dom"
export const Cards = ({data}) => {
    const picturesIndex = Math.floor(Math.random()*data.pictures.length);
    return (
        <Link to={`/housing/${data.id}`} className="cards">
                <img src={data.pictures[picturesIndex]} alt={data.title}/>
                <p>{data.title}</p>
        </Link>
    )
}