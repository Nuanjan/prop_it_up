import React, { Component } from "react";

class PersonCard extends Component {
  render() {
    const { firstName, lastName, age, hairColor } = this.props.person;
    console.log(firstName);
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
          {lastName}, {firstName}
        </h1>
        <p>Age: {age}</p>
        <p>Hair Color: {hairColor}</p>
      </div>
    );
  }
}

export default PersonCard;
