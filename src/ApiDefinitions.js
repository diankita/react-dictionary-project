import React from "react";

export default function ApiDefinitions(props) {
  return (
    <div className="ApiDefinitions">
      {props.meaning.definitions.map(function(definition, index) {
        return (
          <div key={index}>
            <ol start={index+1}>
              <li>{definition.definition}</li>
              <em>{definition.example}</em>
            </ol>
          </div>
        );
      })}
    </div>
  );
}
