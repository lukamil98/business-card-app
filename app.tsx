import React from "react";
import { Info } from "components/info";
import { About } from "components/about";
import { Interests } from "components/interests";
import { Footer } from "components/footer";
import { PEOPLE } from "mocks/people";

const App = () => {
  const person = PEOPLE[0];
  return (
    <div className="container">
      <Info person={person} />
      <About person={person} />
      <Interests person={person} />
      <Footer />
    </div>
  );
};

export default App;
