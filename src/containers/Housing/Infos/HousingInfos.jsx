import './HousingInfos.css'
import {Tag} from "../../../components/Tag/Tag.jsx";
import {Rating} from "../../../components/Rating/Rating.jsx";

export const HousingInfos = ({housing}) => {
    const splittedName = housing?.host.name.split(" ");
    const firstName = housing ? splittedName[0] : undefined;
    const lastName = housing ? splittedName[1] : undefined;

    return (
    <div className="housing__infos">
        {/* Title, Location, Tags*/}
        <div>
            <h2>{housing?.title}</h2>
            <p className="housing__infos__location">{housing?.location}</p>
            <div className="housing__infos__tags">
                {housing?.tags.map((tag, key) => (
                    <Tag key={key}>{tag}</Tag>
                ))}
            </div>
        </div>
        {/* Name, Picture, Rating*/}
        <aside>
            <div className="housing__infos__host">
                <div className="housing__infos__host__names">
                    <p>{firstName}</p>
                    <p>{lastName}</p>
                </div>
                <img src={housing?.host.picture} alt={housing?.host.name}/>
            </div>
            {housing && <Rating rating={housing.rating}/>}
        </aside>
    </div>)
}