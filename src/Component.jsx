import React from "react";
import { useState } from "react";

const user = {
  name: "Hedy Lamarr",
  age: 90,
};

const items = [
  { isY: false, name: "ONE", id: 1 },
  { isY: true, name: "TWO", id: 2 },
  { isY: false, name: "THREE", id: 3 },
];

const Component = () => {
  // Define a state variable to track the button's background color
  const [backgroundColor, setBackgroundColor] = useState("blue");

  // Function to handle the button click and change the background color
  const handleButtonClick = () => {
    // Generate a random color for the background
    const randomColor = getRandomColor();
    setBackgroundColor(randomColor);
  };

  // Function to generate a random color
  const getRandomColor = () => {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  // Define the button style with the dynamic background color
  const buttonStyle = {
    backgroundColor: backgroundColor,
    color: "white",
    padding: "10px 20px",
    border: "none",
    borderRadius: "10px",
    cursor: "pointer",
  };

  const generateColorCode = () => {
    const alphanum = "0123456789ABCDEF";
    let code = "#";

    for (let i = 0; i < 6; i++) {
      code += alphanum[Math.floor(Math.random() * 16)];
    }
    return code;
  };

  const [colorCodes, setColorCodes] = useState(
    items.map(() => generateColorCode())
  );

  const handleColor = (index) => {
    const newColorCodes = [...colorCodes];
    newColorCodes[index] = generateColorCode();
    setColorCodes(newColorCodes);
  };

  const lI = items.map((item, index) => (
    <li
      className="btn-list"
      key={item.id}
      style={{
        color: item.id[1] ? "powderblue" : "yellow",
      }}
    >
      <button
        className="btn"
        onClick={() => handleColor(index)} // Pass the index to the handleColor function
        style={{ backgroundColor: colorCodes[index] }} // Use the color from the state
      >
        {item.id}. {item.name}
      </button>
    </li>
  ));

  return (
    <>
      <ul>{lI}</ul>
      <h1>*This is a Component.jsx file*</h1>
      <p>
        *His name is {user.name} and he is {user.age} years old*
        {backgroundColor}
      </p>
      <button className="btn" style={buttonStyle} onClick={handleButtonClick}>
        Change Background Color
      </button>
    </>
  );
};

export default Component;
