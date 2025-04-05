import React, { useState } from "react";

const Profile = () => {
  const [user, setUser] = useState({
    name: "",
    age: 0,
  });

  const change = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    setUser({
      ...user,
      [name]: value,
    });
  };

  return (
    <div>
      <label htmlFor="name">Name: </label>
      <input id="name" name="name" onChange={change} />
      <br />
      <label htmlFor="age">Age: </label>
      <input id="age" name="age" onChange={change} />
      <br />
      Profile Information <br />
      name: {user.name}
      <br />
      age: {user.age}
      <br />
    </div>
  );
};

export default Profile;
