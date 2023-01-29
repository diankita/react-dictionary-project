import React from "react";
import ApiSynonyms from "./ApiSynonyms";
import ApiDefinitions from "./ApiDefinitions";
import ApiPhonetics from "./ApiPhonetics";
import "./ApiResults.css";

export default function ApiResults(props) {
  if (props.apiResults) {
    return (
      <div className="ApiResults">
        {props.apiResults.meanings.map(function(meaning, index) {
          return (
            <div key={index}>
              <section>
                <h2>{props.apiResults.word}</h2>
                <span className="meaning-number">
                  {index + 1} of {props.apiResults.meanings.length}
                </span>
                <h3 className="type">{meaning.partOfSpeech}</h3>
                {props.apiResults.phonetics.map(function(phonetic, index) {
                  return (
                    <div key={index}>
                      <ApiPhonetics phonetic={phonetic} />
                    </div>
                  );
                })}
                <ApiDefinitions meaning={meaning} />
                <ApiSynonyms synonyms={meaning.synonyms} />
              </section>
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
