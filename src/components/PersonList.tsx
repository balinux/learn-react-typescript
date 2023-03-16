import { Name } from "./Person.types";

// contoh type data array
type PersonListprops = {
  names: Name[];
};

export const PersonList = (props: PersonListprops) => {
  return (
    <div>
      {props.names.map((name) => {
        return (
          <h2 key={name.first}>
            {name.first} {name.last}{" "}
          </h2>
        );
      })}
    </div>
  );
};
