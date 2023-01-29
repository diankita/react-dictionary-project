import React from "react";
import "./App.css";
import Search from "./Search";

function App() {
  return (
    <div className="App container">
      <header className="App-header">
        <img
          src="https://cdn1.iconfinder.com/data/icons/book_mac/512/Dictionary.png"
          className="dictionary-img img-fluid"
        ></img>
        <h1>Dictionary</h1>
      </header>
      <main className="App-section">
        <Search defaultWord="word" />
      </main>
      <footer className="App-footer">
        Coded by Diankita and{" "}
        <a href="https://github.com/diankita/react-dictionary-project">
          open sourced
        </a>
      </footer>
    </div>
  );
}

export default App;
