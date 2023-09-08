import logo from "../../assets/logo.png";
import "./Header.css";
import { useLocation, Link } from "react-router-dom";
export const Header = () => {
  const nav = [
    { title: "Accueil", href: "/home" },
    { title: "A propos", href: "/about" },
  ];
  const location = useLocation().pathname;

  return (
    <header className="header">
      <h1>
        <Link to="/home">
          <img src={logo} alt="Kasa" />
        </Link>
      </h1>
      <nav>
        {nav.map(({ title, href }) => (
          <Link
            key={href}
            to={href}
            className={location === href ? "location--active" : ""}
          >
            {title}
          </Link>
        ))}
      </nav>
    </header>
  );
};
