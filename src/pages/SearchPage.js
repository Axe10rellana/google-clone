import "./SearchPage.css";

//componentes
import HeaderSearchPage from "../components/HeaderSearchPage";
import BodySearchPage from "../components/BodySearchPage";
import FooterSearchPage from "../components/FooterSearchPage";

const SearchPage = () => {
  return (
    <div className="searchPage">
      <HeaderSearchPage />
      <BodySearchPage />
      <FooterSearchPage />
    </div>
  );
};

export default SearchPage;
