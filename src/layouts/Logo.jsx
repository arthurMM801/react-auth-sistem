import { Link } from "react-router-dom";
import logo from "../assets/imgs/logo.png"

const Logo = () => {
  return (
    <Link to="/">
      <img src={logo} alt="Coloque sua logo aqui" style={ {width: 190, heigth: 31}}></img>
    </Link>
  );
};

export default Logo;
