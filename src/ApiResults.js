import React from "react";
import ApiSynonyms from "./ApiSynonyms";
import ApiDefinitions from "./ApiDefinitions";
import ApiPhonetics from "./ApiPhonetics";

export default function ApiResults(props) {
  if (props.apiResults) {
    return (
      <div className="ApiResults">
        <h1>{props.apiResults.word}</h1>
        {props.apiResults.phonetics.map(function(phonetic, index) {
          return (
            <div key={index}>
              <ApiPhonetics phonetic={phonetic} />
            </div>
          );
        })}

        {props.apiResults.meanings.map(function(meaning, index) {
          return (
            <div key={index}>
              <h2> type: {meaning.partOfSpeech}</h2>
              <ApiDefinitions meaning={meaning} />
              <ApiSynonyms synonyms={meaning.synonyms} />
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
