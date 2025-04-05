import React, { useState } from "react";

const Switcher = () => {
  const [sw, setSw] = useState(false);

  return (
    <div>
      {sw ? <span>Dark</span> : <span>Light</span>}

      <input key={sw ? "dark" : "light"} />
      <button onClick={() => setSw((s) => !s)}>Switch</button>
    </div>
  );
};

export default Switcher;
