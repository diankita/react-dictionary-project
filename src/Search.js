import React, { useState } from "react";
import axios from "axios";

export default function Search() {
  let [keyword, setKeyword] = useState("");

  function handleApiResponse(response) {
    console.log(response.data);
  }

  function searchKeyword(event) {
    event.preventDefault();

    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleApiResponse);
    // api documentation: https://dictionaryapi.dev/
  }

  function updateSearchedKeyword(event) {
    setKeyword(event.target.value);
  }

  return (
    <div>
      <form onSubmit={searchKeyword}>
        <input
          type="search"
          placeholder="Type a word"
          onChange={updateSearchedKeyword}
        ></input>
        <input type="submit" value="Search"></input>
      </form>
    </div>
  );
}
