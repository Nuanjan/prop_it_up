import React, { useState } from "react";

const PersonCard = (props) => {
  const {age} = props.person
  const [count, setCount] = useState(parseInt(age));
  return (
    <div
      style={{
        border: "solid black 1px",
        margin: "5px auto",
        padding: "10px",
        width: "50%",
      }}
    >
      <h1>
        {props.person.lastName}, {props.person.firstName}
      </h1>
      <p>Age: {count}</p>
      <p>Hair Color: {props.person.hairColor}</p>
      <button onClick={() => setCount(count + 1)}>
        Birthday Button for {props.person.firstName} {props.person.lastName}
      </button>
    </div>
  );
};

export default PersonCard;
