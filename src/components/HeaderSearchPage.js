import AppsIcon from "@material-ui/icons/Apps";
import { Avatar, IconButton } from "@material-ui/core";
import SettingsIcon from "@material-ui/icons/Settings";

const HeaderSearchPage = () => {
  return (
    <div className="searchPage__header" aria-label="Cabecera de la paginá">
      <div className="searchPage__headerRight">
        <IconButton>
          <SettingsIcon fontSize="small" />
        </IconButton>
        <IconButton>
          <AppsIcon fontSize="small" />
        </IconButton>
        <IconButton>
          <Avatar />
        </IconButton>
      </div>
    </div>
  );
};

export default HeaderSearchPage;
