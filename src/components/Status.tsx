type StatusProps = {
  status: string;
};

export const Status = (props: StatusProps) => {
  let message;
  if (props.status === "loading") {
    message = "Loading...";
  } else if (props.status === "success") {
    message = "success fetcing data";
  } else if (props.status === "error") {
    message = "Error fetcing data";
  }

  return (
    <div>
      <h2>{message}</h2> 
    </div>
  );
};
