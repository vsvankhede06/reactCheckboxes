import React, { useState } from "react";

export default function CheckBox() {
  const [isCitizen, setIsCitizen] = useState(false);
  const [over21, setOver21] = useState(false);

  const onChange = (e) => {
    if (e.target.name === "isCitizen") {
      setIsCitizen(e.target.checked);
    }
    if (e.target.name === "over21") {
      setOver21(e.target.checked);
    }
  };
  return (
    <div className="App">
      <h2>Are you an indian Citizen ? {isCitizen ? "yes" : "no"}</h2>
      <h2>Are you over 21 ? {over21 ? "yes" : "no"}</h2>
      <label>
        Are you an indian Citizen?
        <input
          type="checkbox"
          checked={isCitizen}
          name="isCitizen"
          onChange={onChange}
        />
      </label>
      <br />
      <label>
        Are you over21?
        <input
          type="checkbox"
          checked={over21}
          name="over21"
          onChange={onChange}
        />
      </label>
    </div>
  );
}
