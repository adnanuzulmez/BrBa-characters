import { useState, useEffect } from "react";
import axios from "axios";
import "./apiStyle.css";
function BrBaAPI(props) {
  const [characters, setCharacter] = useState([]);
  useEffect(() => {
    axios(`https://www.breakingbadapi.com/api/characters?name=${props.name}`)
      .then((response) => {
        console.log(response.data);
        return setCharacter(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [props.name]);
  return (
    <>
      <ul className="char-info">
        {characters.map((char, index) => (
          <li className="col4" key={index}>
            <img src={char.img} alt="" />
            <span className="names"> {char.name}</span>
            <span> Status: {char.status}</span>
            <span> Nick: {char.nickname}</span>
            <span className="jobs">{char.portrayed}</span>
            {char.occupation.map((data, index) => {
              return <span key={index}>{data}</span>;
            })}
          </li>
        ))}
      </ul>
    </>
  );
}

export default BrBaAPI;
