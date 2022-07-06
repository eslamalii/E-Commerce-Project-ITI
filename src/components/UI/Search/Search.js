import { useState } from 'react';
import { useHistory } from "react-router-dom";

const Search = () => {
  const [inputText, setInputText] = useState('');

  let inputHandler = (e) => {
    let lowercase = e.target.value.toLowerCase();
    setInputText(lowercase);
    console.log(lowercase);
  };

  return (
    <div className="w-50 d-flex my-auto">
      <input
        type="search"
        onSubmit={inputHandler}
        placeholder="What are you looking for?"
        className="justify-content-center rounded-lg outline-0 p-2 form-control"
      />
    </div>
  );
};

export default Search;
