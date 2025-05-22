import React, { useState } from "react";

const HomeComponent = () => {
  const [name, setName] = useState("");
  const handleSubmit = () => {
    console.log(name);
  };
  return (
    <div>
      <h1>Student Attendance</h1>
      <div>
        <input
          className="border rounded-md my-5 py-2 px-4"
          type="text"
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default HomeComponent;
