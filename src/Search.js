import React, { useState } from "react";

export default function Search() {
  let [keyword, setKeyword] = useState("");

  function searchKeyword(event) {
    event.preventDefault();
    alert(`Looking for ${keyword}`);
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
        >
        </input>
        <input type="submit" value="Search"></input>
      </form>
    </div>
  );
}
