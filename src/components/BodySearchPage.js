import { Link, Redirect } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import ImageIcon from "@material-ui/icons/Image";
import RoomIcon from "@material-ui/icons/Room";
import DescriptionIcon from "@material-ui/icons/Description";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import VideoIcon from "@material-ui/icons/VideoLibrary";
import { selectTextString } from "../features/textSlice";
import { useSelector } from "react-redux";
import useGoogleSearch from "../useGoogleSearch";

//componentes
import Search from "../components/Search";
import Results from "../components/Results";

const BodySearchPage = () => {
  const textString = useSelector(selectTextString);
  const { data } = useGoogleSearch(textString);
  //console.log(data);

  return (
    <div className="searchPage__body" aria-label="cuerpo de la paginá">
      <Link role="link" to="/">
        <img
          className="searchPage__logo"
          src="http://1000marcas.net/wp-content/uploads/2019/11/Google-Logo.png"
          alt="logo"
        />
      </Link>
      <Search hideButtons />
      <div className="searchPage__menu">
        <div className="searchPage__options">
          <div className="searchPage__optionsLeft">
            <div className="searchPage__option">
              <SearchIcon fontSize="small" />
              <p aria-label="Todos">Todos</p>
            </div>
            <div className="searchPage__option">
              <ImageIcon fontSize="small" />
              <p aria-label="Imagenes">Imagenes</p>
            </div>
            <div className="searchPage__option">
              <RoomIcon fontSize="small" />
              <p aria-label="Mapas">Mapas</p>
            </div>
          </div>
          <div className="searchPage__optionsRight">
            <div className="searchPage__option">
              <VideoIcon fontSize="small" />
              <p aria-label="Videos">Videos</p>
            </div>
            <div className="searchPage__option">
              <DescriptionIcon fontSize="small" />
              <p aria-label="Noticias">Noticias</p>
            </div>
            <div className="searchPage__option">
              <MoreVertIcon fontSize="small" />
              <p aria-label="Más">Más</p>
            </div>
            <div className="searchPage__option">
              <p aria-label="Herramientas">Herramientas</p>
            </div>
          </div>
        </div>
      </div>
      {textString /* && !data.error.code  */ ? (
        <div className="searchPage__results">
          <p className="searchPage__resultsCount">
            Cerca de {data?.searchInformation.formattedTotalResults} resultados
            ({data?.searchInformation.formattedSearchTime} segundos)
          </p>
          {data?.items.map((item, index) => (
            <Results key={index} data={item} />
          ))}
        </div>
      ) : (
        <Redirect to="/"></Redirect>
      )}
    </div>
  );
};

export default BodySearchPage;
