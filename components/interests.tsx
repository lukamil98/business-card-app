import React from "react";
import { Person } from "types/people";

export interface InterestsProps {
  person: Person;
}

export const Interests = ({ person }: InterestsProps) => {
  const { interests } = person;
  return (
    <div>
      <h1>Interests</h1>
      <p>{interests}</p>
    </div>
  );
};
