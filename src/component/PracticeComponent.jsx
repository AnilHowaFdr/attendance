import React, { useEffect, useState } from "react";
import {
  getDatabase,
  push,
  ref,
  set,
  onValue,
  remove,
} from "firebase/database";

const PracticeComponent = () => {
  const db = getDatabase();
  const [name, setName] = useState("");
  const [student, setStudent] = useState([]);
  const handleSubmit = () => {
    console.log(name);
    set(push(ref(db, "names/")), {
      name: name,
    }).then(() => {
      setName("");
    });
  };

  const handleDelete = (id) => {
    console.log(id);
    remove(ref(db, "names/" + id)).then(() => {});
  };

  useEffect(() => {
    let arr = [];
    onValue(ref(db, "names/"), (snapshot) => {
      snapshot.forEach((item) => {
        console.log(item.val());
        arr.push({ ...item.val(), id: item.key });
      });
      setStudent(arr);
    });
  }, []);
  // console.log(student);

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
        <div className="flex flex-col items-center gap-2 mt-5">
          {student.map((item) => (
            <div key={item.id} className="flex items-center justify-between">
              <p className="w-[200px]">{item.name}</p>
              <button
                onClick={() => handleDelete(item.id)}
                className="cursor-pointer ml-2 p-2 rounded-md bg-red-500 text-white"
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PracticeComponent;
