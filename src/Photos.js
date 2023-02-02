import React from "react";
import "./Photos.css"

export default function Photos(props) {
  if (props.pexelsPhotos) {
    return (
      <section className="Photos">
        <div className="row">
        {props.pexelsPhotos.map(function(photo, index) {
          return (
            <div key={index} className="col-md-4">
              <a
                href={photo.src.original}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={photo.src.landscape}
                  className="img-fluid"
                  alt="word-description-img"
                ></img>
              </a>
            </div>
          );
        })}
        </div>
      </section>
    );
  } else {
    return null;
  }
}
