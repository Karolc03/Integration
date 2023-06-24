import "./App.css";
import Cards from "./components/Cards.jsx";
import Nav from "./components/Nav";
import { useState, useEffect } from "react";
import axios from "axios";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import About from "./views/About";
import Detail from "./views/Detail";
import Form from "./components/Form";

const email = "karito@gmail.com";
const password = "0304hola";

function App() {
  const location = useLocation();
  const [characters, setCharacters] = useState([]);
  const [acces, setAcces] = useState(false);
  const navigate = useNavigate();

  const login = (userData) => {
    if (userData.email === email && userData.password === password) {
      setAcces(true);
      navigate("/home");
    }
  };
  useEffect(() => {
    !acces && navigate("/");
  }, [acces]);

  const onClose = (id) => {
    setCharacters((oldChars) => [
      ...oldChars.filter((character) => character.id !== id),
    ]);
  };

  function onSearch(id) {
    axios(`https://rickandmortyapi.com/api/character/${id}`)
      .then(({ data }) => {
        if (data.name) {
          if (!characters.find((ch) => ch.name === data.name)) {
            setCharacters((oldChars) => [...oldChars, data]);
          } else {
            window.alert("¡El personaje ya está agregado!");
          }
        } else {
          window.alert("¡No hay personajes con este ID!");
        }
      })
      .catch((err) => {
        console.error(err);
        window.alert("¡No hay personajes con este ID!");
      });
  }

  return (
    <div className="App">
      {location.pathname !== "/" ? <Nav onSearch={onSearch} /> : null}
      <Routes>
        <Route
          path="/home"
          element={<Cards characters={characters} onClose={onClose} />}
        />
        <Route path="/about" element={<About />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/" element={<Form login={login} />} />
      </Routes>
    </div>
  );
}

export default App;
