import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVolumeHigh } from "@fortawesome/free-solid-svg-icons";

export default function ApiPhonetics(props) {
  if (props.phonetic.text && props.phonetic.audio) {
    return (
      <div className="ApiPhonetics">
        
        <a
          href={props.phonetic.audio}
          target="_blank"
          rel="noopener noreferrer"
        ><FontAwesomeIcon icon={faVolumeHigh} />
        </a>
        <span>{" "}{props.phonetic.text}</span>
      </div>
    );
  } else {
    return null;
  }
}
