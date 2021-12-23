import { useState, useRef } from "react";
import BrBaAPI from "./service/BrBaAPI";
import "./charCard.css";
function SearchBar() {
  const [name, setName] = useState("");
  let textInput = useRef(null);

  const handleSubmit = (e) => {
    setName(textInput.current.value);
  };
  return (
    <>
      <h2>Breaking Bad Characters</h2>
      <input type="text" name="search" ref={textInput} placeholder="Search" />
      <button onClick={handleSubmit}>search</button>
      <BrBaAPI name={name} />
    </>
  );
}

export default SearchBar;
