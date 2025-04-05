import User from "./User";
import { BiAbacus } from "react-icons/bi";
import "./Great.css";
import Profile from "./Profile";
import ArrayOperate from "./ArrayOperate";
import PopupContent from "./PopupContent";
import { useState } from "react";

function Greet() {
  const numbers = [1, 2, 3];
  const styles = { color: "blue", backgroundColor: "pink" };
  const [display, setDisplay] = useState(false);
  const userInfos = [
    {
      name: "inmove",
      age: 18,
    },
    {
      name: "andy",
      age: 3,
    },
  ];

  const togglePopupContent = () => {
    setDisplay(true);
    console.log(display);
    setTimeout(() => setDisplay(false), 2000);
  };

  return (
    <section>
      <h1>Hello</h1>
      <label htmlFor="Name">My Label</label>
      <input id="Name" type="text" placeholder="Enter your name" /> <br />
      <label> {2 + 2} </label>
      {numbers.map((v) => (
        <ul key={v}>
          <li>{v}</li>
        </ul>
      ))}
      {numbers.map((v) => {
        return (
          <ul key={`item-${v}`}>
            <li>Value of v: {v}</li>
          </ul>
        );
      })}
      {userInfos.map(({ name, age }) => {
        return (
          <ul key={name}>
            <li>{name}</li>
            <li>{age}</li>
          </ul>
        );
      })}
      <User name="inmove" age={33} />
      {numbers.length > 0 && <h2>Here are {numbers.length} numbers.</h2>}
      <br />
      <h1 style={{ color: "red", backgroundColor: "teal" }}>Inline Style</h1>
      <h1 style={styles}>Inline Style 2</h1>
      <BiAbacus />
      <ArrayOperate />
      <Profile />
      <PopupContent display={display} />
      <button onClick={togglePopupContent}>Display</button>
    </section>
  );
}

export default Greet;
