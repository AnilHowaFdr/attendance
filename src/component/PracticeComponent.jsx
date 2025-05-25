import React, { useState } from "react";
import { getDatabase, push, ref, set } from "firebase/database";

const PracticeComponent = () => {
  const db = getDatabase();
  const [name, setName] = useState("");
  const handleSubmit = () => {
    console.log(name);
    set(push(ref(db, "names/")), {
      name: name,
    }).then(() => {
      setName("");
    });
  };

  return (
    <div className="flex items-center text-lg capitalize justify-center h-[800px]">
      <div className="flex flex-col ">
        <div className="">
          <input
            type="text"
            className="border px-3 py-2 rounded-md"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <button
            onClick={handleSubmit}
            className="ml-2 p-2 capitalize rounded-md bg-blue-500 text-white"
          >
            submit
          </button>
        </div>
        <div className="flex items-center gap-2">
          <p className="w-[200px]">name</p>
          <button className="ml-2 p-2 rounded-md bg-red-500 text-white">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default PracticeComponent;
