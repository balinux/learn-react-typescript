// contoh type data object
type PersonProps = {
  name: {
    first: string;
    last: string;
  };
};

export const Person = (props: PersonProps) => {
  return (
    <div>
      {" "}
      Hello {props.name.first} {props.name.last}
    </div>
  );
};
