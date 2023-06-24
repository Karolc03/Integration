import styled from "./Card.module.css";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useState } from "react";

export default function Card({

  name,
  id,
  status,
  species,
  gender,
  origin,
  image,
  onClose,
  
}) 
{
  return (
    <div className={styled.div}>
      <button className={styled.button} onClick={onClose}>
        X
      </button>
      <Link to={`/detail/${id}`}>
        <h2 className={styled.h2}> Name: {name} </h2>
      </Link>
      <h2 className={styled.h2}> Specie: {species} </h2>
      <h2 className={styled.h2}> Gender: {gender}</h2>
      <img className={styled.image} src={image} alt="" />
    </div>
  );
}
