import Card from './Card';
import styled from "./Cards.module.css"

export default function Cards({ characters, onClose }) {

   return (
      <div className={styled.div}>
      {characters.map((e) => (
         <Card
            key = { e.id } 
            id = { e.id } 
            name = { e.name }
            status = { e.status}
            species = { e.species }
            gender = { e.gender }
            origin = { e.origin.name }
            image = { e.image }
            onClose = { () => onClose(e.id)}
         />
      ))}
      </div>
   );
}
