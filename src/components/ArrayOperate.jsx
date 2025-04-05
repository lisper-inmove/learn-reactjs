import React from "react";
import { useState } from "react";

const ArrayOperate = () => {
  const [friends, setFriends] = useState(["A", "B"]);
  const [movies, setMovies] = useState([
    { id: 1, title: "Spider Man", ratings: 3 },
    { id: 2, title: "Superman", ratings: 6 },
  ]);

  const add = () => setFriends([...friends, "inmove"]);
  const add2 = () => setFriends((fs) => [...fs, "inmove"]);
  const remove = () => setFriends(friends.filter((f) => f !== "inmove"));
  const update = () => {
    setFriends(friends.map((f) => (f === "inmove" ? "Inmove" : f)));
  };

  const change = () => {
    setMovies(
      movies.map((m) => (m.id === 2 ? { ...m, title: "John Wick 5" } : m)),
    );
  };

  return (
    <div>
      {friends.map((f) => (
        <li key={Math.random()}>{f}</li>
      ))}
      <button onClick={add}>Add</button>
      <button onClick={add2}>Add2</button>
      <button onClick={remove}>Romeve</button>
      <button onClick={update}>Update</button>

      <hr />
      {movies.map((m) => (
        <li key={m.id}>
          {m.title} --- {m.ratings}
        </li>
      ))}
      <button onClick={change}>Change</button>
    </div>
  );
};

export default ArrayOperate;
