import react from "react";
import { useState, useEffect } from "react";
import HireForm from "./components/HireForm";
import { useLocation } from "react-router";

function PersonProfile(props) {
  const [person, setPerson] = useState(null);
  const location = useLocation();
  useEffect(() => {
    if (location.state) {
      const { person } = location.state;
      setPerson(person);
    }
  }, [location]);

  if (!person) return <p>Loading...</p>;

  return (
    <article>
      <h2>
        {person.name.first} {person.name.last}
      </h2>
      <HireForm person={person} />
    </article>
  );
}

export default PersonProfile;
