import React from "react";
import { Person } from "types/people";

export interface AboutProps {
  person: Person;
}

export const About = ({ person }: AboutProps) => {
  const { about } = person;
  return (
    <div>
      <h1>About</h1>
      <p>{about}</p>
    </div>
  );
};
