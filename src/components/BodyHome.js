import Search from "./Search";
const BodyHome = () => {
  return (
    <div className="home__body" aria-label="Cuerpo de la paginá">
      <img
        src="http://1000marcas.net/wp-content/uploads/2019/11/Google-Logo.png"
        alt="logo"
        aria-label="Google"
      />
      <Search />
    </div>
  );
};

export default BodyHome;
