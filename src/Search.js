import React, { useState } from "react";
import axios from "axios";
import ApiResults from "./ApiResults";
import "./Search.css";

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
       <div className="Search">
         <section>
  
           <form onSubmit={handleSubmit}>
             <input
               className="input-text"
               type="search"
               placeholder="Type a word.."
               onChange={updateSearchedKeyword}
             ></input>
             <input
               className="input-submit"
               type="submit"
               value="🔍"
             ></input>
           </form></section>
           <ApiResults apiResults={results} />
         
       </div>
     );
} else {
  loadResults();
  return "Loading.."
}
    
}
