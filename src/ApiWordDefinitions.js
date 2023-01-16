import React from "react";

export default function ApiWordDefinitions(props) {
  return (
    <div className="ApiWordDefinitions">
      {props.meaning.definitions.map(function(definition, index) {
        return (
          <div key={index}>
            <ul>
              <li>{definition.definition}</li>
              <em>{definition.example}</em>
            </ul>
          </div>
        );
      })}
    </div>
  );
}
