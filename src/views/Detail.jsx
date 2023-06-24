import React from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import styled from "./Detail.module.css"


function Detail() {
  const [character, setCharacter] = useState({});
  const { id } = useParams();
  useEffect(() => {
    axios(`https://rickandmortyapi.com/api/character/${id}`).then(
      ({ data }) => {
        if (data.name) {
          setCharacter(data);
        } else {
          window.alert("No hay personajes con ese ID");
        }
      }
    );
    return setCharacter({});
  }, [id]);

  return (
    <div className={styled.div}>
      <h2 className={styled.h2}>  Name: {character.name} </h2>
      <h2 className={styled.h2}> Specie: {character.species} </h2>
      <h2 className={styled.h2}> Gender: {character.gender}</h2>
      <img className={styled.image} src={character.image} alt="" />
    </div>
  );
}

export default Detail;
