import "./Banner.css"
export const Banner = ({children, img}) => {
    return (
        <div className="banner">
        <img src={img} alt="nature"/>
        <h2>{children}</h2>
    </div>
    )
}