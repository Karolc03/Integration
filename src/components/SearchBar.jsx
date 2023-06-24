//npm install axiosimport styled from "./SearchBar.module.css";
import React, { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [id, setId] = useState("");

  const handleChange = (event) => {
    event.preventDefault();
    setId(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch(id)
    setId("")
  };
  return (
    <form onSubmit={ handleSubmit }>
      <input type="text" value={id} onChange={handleChange} />
      <button type ="submit">
        Buscar
      </button>
    </form>
  );
};

export default SearchBar;
