import React from "react";
import "./ApiSynonyms.css"

export default function ApiSynonyms (props) {
    if (Array.isArray(props.synonyms) && props.synonyms.length) {
      return (
        <div className="ApiSynonyms">
          <strong>Synonyms:{" "}</strong>
          {props.synonyms.map(function(synonym, index) {
            return <span key={index}>{synonym}</span>;
          })}
        </div>
      );
    } else {
      return null;
    }
}