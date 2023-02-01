import './About.css'
import banner from "../../assets/about_banner.png"
import {Banner} from "../../components/Banner/Banner.jsx";
import {Accordion} from "../../components/Accordion/Accordion.jsx";
import {aboutAccordion} from "./aboutAccordion.js"
export const About = () => {

    return (<section className="about">
        <Banner img={banner}/>
        {aboutAccordion.map((item,key) => (
            <Accordion key={key} title={item.title}>{item.content}</Accordion>
        ))}
    </section>)
}