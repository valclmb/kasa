import "./Accordion.css"
import arrowDown from "./../../assets/arrow_down.png"
import {useState} from "react";
export const Accordion = ({title, children}) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleOpen = () => {
        setIsOpen(!isOpen)
    }

    return (
        <div className="accordion">
        <div className="accordion__title" onClick={toggleOpen}>
            <h2>{title}</h2>
            <img src={arrowDown} alt={`expand ${title}`}/>
        </div>
            {isOpen && <div className="accordion__content">
                {children}
            </div>}
    </div>)
}