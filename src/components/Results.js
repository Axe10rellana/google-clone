import { Link } from "@material-ui/core";
import "./Results.css";

const Results = ({ data: { title, link, displayLink, snippet } }) => {
  return (
    <div className="result">
      <p>
        <Link href={link} target="_blank" rel="noreferrer">
          {displayLink}
        </Link>
      </p>
      <Link href={link} target="_blank" rel="noreferrer">
        <h3>{title}</h3>
      </Link>
      <p className="result__snippet">{snippet}</p>
    </div>
  );
};

export default Results;
