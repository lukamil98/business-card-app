import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { Person } from "types/people";

export interface InfoProps {
  person: Person;
}

export const Info = ({ person }: InfoProps) => {
    const {avatar, name, occupation, alias} = person
  return (
    <div className="info--content">
      <img src={avatar} alt="me" className="pic-of-me" />
      <h1 className="info--my-name">{name}</h1>
      <h3 className="info--job-title">{occupation}</h3>
      <h3 className="info--social-media">{alias}</h3>
      <button className="email--button">
        <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>Email
      </button>
    </div>
  );
};
