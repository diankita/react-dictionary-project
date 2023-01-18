import React from "react";

export default function ApiSynonyms (props) {
    if (props.synonyms) {
    return (
        <div className="ApiSynonyms">
          Synonyms:
            {props.synonyms.map(function(synonym, index) {
                return (
                    <span key={index}>
                        {synonym},{" "}
                    </span>
                )
            })}
        </div>
    )
 } else {
  return null;
 }
}