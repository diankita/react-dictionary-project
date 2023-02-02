import React, { useState } from "react";
import axios from "axios";
import ApiResults from "./ApiResults";
import Photos from "./Photos";
import "./Search.css";


export default function Search(props) {
  let [keyword, setKeyword] = useState(props.defaultWord);
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);
  let [photos, setPhotos] = useState(null);

  function updateSearchedKeyword(event) {
    setKeyword(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    searchKeyword();
  }

  function searchKeyword() {
    let apiUrlDictionary = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrlDictionary).then(handleDictionaryApiResponse);
    // Dictionary api documentation: https://dictionaryapi.dev/

    let apiKeyPexels =
      "LyFLwyDoe0owd9VA5TQ4EU7hWZsjt9e5fDnvIJqqou69SGYgO1KRF8vl";
    let apiUrlPexels = `https://api.pexels.com/v1/search?query=${keyword}&per_page=6`;
    let headers = { Authorization: `Bearer ${apiKeyPexels}` };
    axios.get(apiUrlPexels, { headers: headers }).then(handlePexelsApiResponse);
    // Pexels api documentation: https://www.pexels.com/api/documentation/
  }

  function loadResults() {
    setLoaded(true);
    searchKeyword();
  }

  function handleDictionaryApiResponse(response) {
    setResults(response.data[0]);
  }

  function handlePexelsApiResponse(response) {
    setPhotos(response.data.photos);
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
            <input className="input-submit" type="submit" value="🔍"></input>
          </form>
        </section>
        <ApiResults apiResults={results} />
        <Photos pexelsPhotos={photos} />
        
      </div>
    );
  } else {
    loadResults();
    return "Loading..";
  }
}
