import { useState } from "react";
import SearchIcon from "@material-ui/icons/Search";
import MicIcon from "@material-ui/icons/Mic";
import { GoogleInput } from "./GoogleInput";
import { GoogleButton } from "./GoogleButton";
import "./Search.css";
import { setTextString } from "../features/textSlice";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";

const Search = ({ hideButtons = false }) => {
  const [input, setInput] = useState("");
  const history = useHistory();
  const dispatch = useDispatch();
  const search = (e) => {
    e.preventDefault();
    //console.log(input);
    dispatch(setTextString(input));
    history.push("/search");
  };

  return (
    <>
      <form className="search" aria-label="buscador">
        <GoogleInput>
          <SearchIcon className="search__inputIcon" />
          <input
            type="text"
            aria-label="Introduce lo que deseas buscar"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <MicIcon />
        </GoogleInput>
        <div className="search__buttons">
          <GoogleButton
            type="submit"
            role="button"
            aria-label="Buscar con Google"
            className={hideButtons ? "search__hideButtons" : ""}
            onClick={search}
          >
            Buscar con Google
          </GoogleButton>
          <GoogleButton
            role="button"
            aria-label="Me siento con suerte"
            className={hideButtons ? "search__hideButtons" : ""}
          >
            Me siento con suerte
          </GoogleButton>
        </div>
      </form>
    </>
  );
};

export default Search;
