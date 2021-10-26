import { useState } from "react";
import "./App.css";
import PersonCard from "./components/PersonCard";

function App() {
  const personInfo = [
    {
      firstName: "Jane",
      lastName: "Doe",
      age: "45",
      hairColor: " Black",
    },
    {
      firstName: "John",
      lastName: "Smith",
      age: "88",
      hairColor: " Brown",
    },
    {
      firstName: "Millard",
      lastName: "Fillmore",
      age: "50",
      hairColor: " Brown",
    },
    {
      firstName: "Maria",
      lastName: "Smith",
      age: "62",
      hairColor: " Brown",
    },
  ];
  return (
    <div>
      {personInfo.map((person, i) => {
        return <PersonCard key={i} person={person} />;
      })}
    </div>
  );
}

export default App;
