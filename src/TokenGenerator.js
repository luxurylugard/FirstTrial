import { useState } from "react";

const TokenGenerator = ({ token, onClick }) => {
  const style = {
    color: "white",
    background: "powderblue",
    width: "100px",
    border: "none",
    borderRadius: "10px",
  };

  return (
    <>
      <h2>{token}</h2>
      <p>Adjacent</p>

      <button style={style} onClick={onClick}>
        GnerateToken
      </button>
    </>
  );
};

export default TokenGenerator;
