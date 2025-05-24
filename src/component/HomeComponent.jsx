import React, { useEffect, useState } from "react";
import { getDatabase, push, ref, set, onValue } from "firebase/database";

const HomeComponent = () => {
  const db = getDatabase();
  const [name, setName] = useState("");
  const [studentList, setStudentList] = useState([]);
  const handleSubmit = () => {
    set(
      push(ref(db, "user/"), {
        name: name,
      })
    );
    setName("");
  };

  useEffect(() => {
    let arr = [];
    onValue(ref(db, "user/"), (snapshot) => {
      snapshot.forEach((item) => {
        arr.push(item.val());
      });
      setStudentList(arr);
    });
  }, []);
  return (
    <div className="flex flex-col items-center justify-center h-[800px]">
      <h1 className="font-bold text-2xl pb-10 ">Student Attendance</h1>
      <div>
        <input
          className="border rounded-md my-5 py-2 px-4"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button
          className="p-2 bg-amber-500 rounded-md ml-3 font-semibold text-white"
          onClick={handleSubmit}
        >
          Submit
        </button>
        <ul className="pt-14">
          <li>
            <input type="text" className="border rounded-md p-2" />
            <button className="p-2 bg-blue-600 rounded-md ml-3 font-semibold text-white">
              Present
            </button>
            <button className="p-2 bg-red-600 rounded-md ml-3 font-semibold text-white">
              Absent
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default HomeComponent;
