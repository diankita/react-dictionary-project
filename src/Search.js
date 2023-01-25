import React, { useState } from "react";
import axios from "axios";
import ApiResults from "./ApiResults";

export default function Search(props) {
  let [keyword, setKeyword] = useState(props.defaultWord);
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);

  function updateSearchedKeyword(event) {
    setKeyword(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    searchKeyword();
  }

  function searchKeyword() {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleApiResponse);
    // api documentation: https://dictionaryapi.dev/
  }

  function loadResults() {
    setLoaded(true);
    searchKeyword();
  }

  function handleApiResponse(response) {
    console.log(response.data[0]);
    setResults(response.data[0]);
  }
  
    if (loaded) {
     return ( 
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="search"
          placeholder="Type a word"
          onChange={updateSearchedKeyword}
        ></input>
        <input type="submit" value="Search"></input>
      </form>
      <ApiResults apiResults={results} />
    </div>
  );
} else {
  loadResults();
  return "Loading.."
}
    
}
