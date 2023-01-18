import React from "react";
import ApiSynonyms from "./ApiSynonyms";
import ApiWordDefinitions from "./ApiWordDefinitions";

export default function ApiResults(props) {
  if (props.apiResults) {
    return (
      <div className="ApiResults">
        <h1>{props.apiResults.word}</h1>

        {props.apiResults.meanings.map(function(meaning, index) {
          return (
            <div key={index}>
              <h2> type: {meaning.partOfSpeech}</h2>
              <ApiWordDefinitions meaning={meaning} />
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
