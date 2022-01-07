import "./Home.css";

//componentes
import HeaderHome from "../components/HeaderHome";
import BodyHome from "../components/BodyHome";
import FooterHome from "../components/FooterHome";

const Home = () => {
  return (
    <div className="home" aria-label="Inicio">
      <HeaderHome />
      <BodyHome />
      <FooterHome />
    </div>
  );
};

export default Home;
