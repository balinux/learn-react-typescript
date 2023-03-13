/**
 * contoh type unteuk Greet fucntion
 */
type GreetProps = {
  name: string;
  age: number;
  isMarriage?: boolean;
};

// berikut cara penggunaanya
export const Greet = (props: GreetProps) => {
  // memberikan default value pada optional props
  const { isMarriage = false } = props;
  return (
    <div>
      <h2>
        {" "}
        Welcome {props.name}, age is {props.age},{" "}
        {isMarriage ? "sudah" : "belum"} menikah
      </h2>
    </div>
  );
};
