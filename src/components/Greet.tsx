/**
 * contoh type unteuk Greet fucntion
 */
type GreetProps = {
  name: string;
  age: number;
};

// berikut cara penggunaanya
export const Greet = (props: GreetProps) => {
  return (
    <div>
      <h2>
        {" "}
        Welcome {props.name}, age is {props.age}
      </h2>
    </div>
  );
};
