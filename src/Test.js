import { useState, useEffect } from "react";
// import './Test.css';

const ContentFirst = () => {
  const [counter, setCounter] = useState(0);

  const handleIncrement = () => {
    setCounter(counter + 1);
  };

  useEffect(() => {
    setCounter(100);
  }, []);

  return (
    <>
      <h2 className="counter">{counter}</h2>
      <div>
        <h2 className="empty-h2">***</h2>
        <button onClick={handleIncrement}>+</button>
        <button onClick={() => setCounter((prevCount) => prevCount - 5)}>
          -
        </button>
        <p>Sibling</p>
      </div>
    </>
  );
};

const ContentSecond = () => {
  const [gen, genNum] = useState("");

  const handler = () => {
    const formatted = format(randomG());
    genNum(formatted);
  };

  const randomG = () => {
    const char = "ABCDE012345";
    let j = "";

    for (let i = 0; i < 6; i++) {
      j += char[Math.floor(Math.random() * 10)];
    }
    return j;
  };

  const format = (num) => {
    const seg = num.match(/.{1,2}/g);

    const final = seg.join("+");
    return final;
  };

  const style = {
    width: "70px",
    background: "red",
    border: "2px solid green",
  };

  return (
    <>
      <h1 className="won">*Wonderful! {gen} YEAH*.</h1>
      {/* <button style={style} onClick={handler}>
        Test
      </button> */}
    </>
  );
};

const Top = () => {
  //   const expression = 5 + 5;
  const isNasir = true;
  let content;

  //Condition With No Else Branch
  isNasir && (content = <ContentSecond />);

  // isNasir ? (content = <ContentFirst />) : (content = <ContentSecond />);

  // if (isNasir) {
  //   content = <ContentFirst />;
  // } else {
  //   content = <ContentSecond />;
  // }

  return (
    <>
      <input placeholder="JustText"></input>
      {content}
      {/* {props.isNasir ? (
        <>
          <p>
            #This is {isNasir ? props.hah : props.expression}-{props.expression} the Top#
          </p>
        </>
      ) : (
        <>Wow!</>
      )} */}
    </>
  );
};

const groceries = [
  { id: 1, foodName: "cabbage", price: 50 },
  { id: 2, foodName: "bread", price: 120 },
];

const products = [
  { title: "Cabbage", isFruit: false, id: 1 },
  { title: "Garlic", isFruit: false, id: 2 },
  { title: "Apple", isFruit: true, id: 3 },
];

export default function Test() {
  const listItems = groceries.map((grocery) => (
    <li key={grocery.id}>
      {grocery.foodName} {grocery.price}
    </li>
  ));

  const listItems2 = products.map((product) => (
    <li
      key={product.id}
      style={{
        color: product.isFruit ? "magenta" : "darkgreen",
      }}
    >
      {product.title}
    </li>
  ));

  return (
    <>
      <div className="left-path" style={{}}>
        <Top />

        <ul>{listItems}</ul>
        <ul>{listItems2}</ul>

        {/* <Top 
            expression={5+5} 
            isNasir={false} 
            hah="HAHAHA"
        />
        <Top 
            expression={5+5} 
            isNasir={true}
            hah='Loooo!'
        /> */}
      </div>
    </>
  );
}
