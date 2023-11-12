import logo from "./logo.svg";
import "./App.css";
import Test from "./Test.js";
import Component from "./Component";
import TokenGenerator from "./TokenGenerator";
import { useState } from "react";

const Appl = () => {
  const [code, setCode] = useState("pink");

  const handleCode = () => {
    const final = generateCode();
    setCode(final);
  };

  const generateCode = () => {
    const char = "0123456789ABCDEF";
    let cd = "#";

    for (let i = 0; i < 6; i++) cd += char[Math.floor(Math.random() * 16)];
    return cd;
  };

  //Token Generator
  const [token, newToken] = useState(0);

  const handleGeneration = () => {
    const generated = generate();
    const formattedToken = formatToken(generated);
    newToken(formattedToken);
  };

  const generate = () => {
    const alphanum = "0123456789ABCDEF";
    let hash = "";

    for (let i = 0; i < 16; i++) {
      hash += alphanum[Math.floor(Math.random() * 16)];
    }
    return hash;
  };

  const formatToken = (token) => {
    // Split the token into an array of 4-character segments
    const segments = token.match(/.{1,4}/g);

    // Join the segments with "-"
    const formattedToken = segments.join("-");

    return formattedToken;
  };

  const style = {
    color: code,
    cursor: "pointer",
  };

  return (
    <>
      <div className="App">
        <header className="App-header">
          <Test />
          <TokenGenerator token={token} onClick={handleGeneration} />
          <img src={logo} className="App-logo" alt="logo" />
          <div className="right-path">
            <p style={style} onClick={handleCode}>
              Edit <code>src/App.js</code> and save to reload.
            </p>
            <a
              className="App-link"
              href="https://www.gg.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>

            <Component />

            <table>
              <tr className="header">
                <th></th>
                <th>MON</th>
                <th>TUE</th>
                <th>WED</th>
                <th>THURS</th>
                <th>FRI</th>
                <th>SAT</th>
                <th>SUN</th>
              </tr>
              <tr>
                <th>8:00</th>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr id="c1r2">
                <th>8:00</th>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <th>8:00</th>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <th>8:00</th>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <th>8:00</th>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr class="last-tb">
                <th>8:00</th>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <th>8:00</th>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td colSpan={2}></td>
                <td colSpan={4}>This is the footer </td>
                <td colSpan={2}></td>
              </tr>
            </table>
          </div>

          <div id="parent">
            <div id="on">A</div>
            <div id="tw">B</div>
            <div id="th">
              <span>C</span>
            </div>
            <div id="fo">D</div>
            <div id="fi">E</div>
          </div>
        </header>
      </div>
      <div className="flex-container">
        <div className="div-align">
          <h1>Align</h1>
          <p>Paragraph</p>
        </div>

        <div className="div-align">
          <h1 className="mid">Align</h1>
          <p>Paragraph</p>

          <div className="round">
            <p>Today</p> <p>Recent</p>
          </div>
        </div>

        <div className="div-align">
          <h1>Align</h1>
          <p>Paragraph</p>
        </div>
      </div>
      <div className="new-flex">
        <div className="flex-item">
          <div className="flex-sub-item">
            <p>Blue Item</p>
          </div>
          <div className="flex-sub-item"></div>
        </div>
        <div className="flex-item">*Teal*</div>
        <div className="flex-item">
          <div className="flex-sub-item">
            <div>
              <div className="stroke" />
              <h2>back soon</h2>
              <div className="stroke" />
            </div>
          </div>
          <div className="flex-sub-item"></div>
        </div>

        <h2 id="first-flex">First-Flex</h2>
        <h2 id="second-flex">Second-Flex</h2>

        <div className="tiny-box"></div>
      </div>

      <div className="grid-container">
        <div className="grid-items">One</div>
        <div className="grid-items">Two</div>
        <div className="grid-items">Three</div>
        <div className="grid-items">Four</div>
        <div className="grid-items">Five</div>
        <div className="grid-items">Six</div>
        <div className="grid-items">Seven</div>
        <div className="grid-items">Eight</div>
        <div className="grid-items">Nine</div>
      </div>
    </>
  );
};

export default Appl;
