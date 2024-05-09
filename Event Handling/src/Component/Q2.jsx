//2) Create array & array of object using list & keys.
import React from "react";
function Q2() {
  const simpleArray = ["Dodge", "Porsche", "Urus", "Aston Martin"];
  
  const arrayOfObjects = [
    { id: 1, name: "Nishan Gtr" },
    { id: 2, name: "Maserati" },
    { id: 3, name: "Mustang" }
  ];

  return (
    <div>
      <h2>Simple Array:</h2>
      <ul>
        {simpleArray.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul><hr />

      <h2>Array of Objects:</h2>
      <ul>
        {arrayOfObjects.map((obj) => (
          <li key={obj.id}>{obj.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default Q2;
