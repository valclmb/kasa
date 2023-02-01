import './Housing.css'
import {useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {Carousel} from "../../components/Carousel/Carousel";
import {HousingInfos} from "./Infos/HousingInfos";
import {Accordion} from "../../components/Accordion/Accordion";

export const Housing = () => {
    const [housing, setHousing] = useState();
    const {id} = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        fetch("./../data.json")
            .then(res => res.json())
            .then(res => {
                const matchHousing = res.filter(item => item.id === id)[0];
                if(matchHousing) {
                    setHousing(matchHousing)
                } else {
                    navigate("/404")
                }
            })

    }, [id,navigate])

    return (<section className="housing">
        <Carousel pictures={housing?.pictures}/>
        <HousingInfos housing={housing ? housing : undefined}/>
        <div className="housing__accordions">
            <Accordion title="Description">{housing?.description}</Accordion>
            <Accordion title="Equipements">
                <ul>{housing?.equipments.map((equipment,key) => <li key={key}>{equipment}</li>)}</ul>
            </Accordion>
        </div>
    </section>)
}