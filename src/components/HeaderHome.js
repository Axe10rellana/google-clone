import AppsIcon from "@material-ui/icons/Apps";
import { Avatar, IconButton } from "@material-ui/core";

const HeaderHome = () => {
  return (
    <div className="home__header" aria-label="Cabecera">
      <div className="home__headerRight" aria-label="Menu derecho">
        <p aria-label="Gmail">Gmail</p>
        <p aria-label="Imagenes">Imágenes</p>

        <IconButton>
          <AppsIcon />
        </IconButton>
        <IconButton>
          <Avatar />
        </IconButton>
      </div>
    </div>
  );
};

export default HeaderHome;
