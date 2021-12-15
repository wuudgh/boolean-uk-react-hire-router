import PeopleListItem from "./PeopleListItem";
import { Link } from "react-router-dom";

function PeopleList(props) {
  const { people } = props;

  return (
    <ul>
      {people.map((person, index) => (
        <PeopleListItem key={index} person={person} />
      ))}
    </ul>
  );
}

export default PeopleList;
