import './Home.css'
import banner from "../../assets/home_banner.png";
import {useEffect, useState} from "react";
import {Cards} from "../../components/Cards/Cards.jsx";
import {Banner} from "../../components/Banner/Banner.jsx";
export const Home = () => {
    const [housingList, setHousingList] = useState()
    useEffect(()=> {
        fetch("./data.json")
            .then(res => res.json())
            .then(res => setHousingList(res))
    }, [])

    return (
        <section className="home">
            <Banner img={banner}>Chez vous, partout et ailleurs</Banner>
            {/* ANNOUNCE LIST */}
            <section className="home__housing">
                {housingList?.map(item => (<Cards key={item.id} data={item} />))}
            </section>
        </section>

    )
}