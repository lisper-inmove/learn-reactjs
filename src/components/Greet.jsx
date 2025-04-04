function Greet() {
  const numbers = [1, 2, 3, 4, 5];
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
    </section>
  );
}

export default Greet;
