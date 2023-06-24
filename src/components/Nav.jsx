import SearchBar from "./SearchBar";
import { Link } from "react-router-dom";
import Styled from "./Nav.module.css";
import { useLocation } from "react-router-dom";

export default function Nav(props) {
  const { onSearch } = props;
  const { pathname } = useLocation();
  return (
    <>
{ pathname !== "/" ?
     <><Link className={Styled.link} to="/about">
          {" "}
          About{" "}
        </Link><Link className={Styled.link} to="/home">
            {" "}
            Home
          </Link><Link className={Styled.link} to="/detail">
            {" "}
            Detail
          </Link><SearchBar onSearch={onSearch} /></> : null}
    </>
  )
  }
