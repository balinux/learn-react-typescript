// // contoh type data object
// type PersonProps = {
//   name: {
//     first: string;
//     last: string;
//   };
// };

import { PersonProps } from "./Person.types";

export const Person = ({ name }: PersonProps) => {
  return (
    <div>
      {" "}
      Hello {name.first} {name.last}
    </div>
  );
};
