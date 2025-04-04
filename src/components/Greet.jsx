function Greet() {
  return (
    <section>
      <h1>Hello</h1>
      <label htmlFor="Name">My Label</label>
      <input id="Name" type="text" placeholder="Enter your name" /> <br />
      <label> {2 + 2} </label>
    </section>
  );
}

export default Greet;
