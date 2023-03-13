/**
 * contoh type unteuk Greet fucntion
 */
type GreetProps = {
  name: string;
};

// berikut cara penggunaanya
export const Greet = (props: GreetProps) => {
  return (
    <div>
      <h2> Welcome {props.name}</h2>
    </div>
  );
};
