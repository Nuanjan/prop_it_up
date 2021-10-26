import React, { Component } from "react";

class PersonCard extends Component {
  constructor(props) {
    super(props);
    this.state = { count: props.person.age };
  }

  render() {
    const { firstName, lastName, age, hairColor } = this.props.person;
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
        <p>Age: {this.state.count}</p>
        <p>Hair Color: {hairColor}</p>
        <button
          onClick={() => {
            this.setState({count: parseInt(this.state.count)+ 1})
          }}
        >
          Birthday Button for {firstName} {lastName}
        </button>
      </div>
    );
  }
}

export default PersonCard;
