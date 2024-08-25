import React from "react";
import { useState } from "react";

const LessThan = () => {
  const [initial, setInitial] = useState(5);
  const [secInitial, setSecInitial] = useState(6);
  const [sum, setSum] = useState(initial + secInitial);

  const randomValue = () => {
    const newInitial = Math.floor(Math.random() * 6) + 1;
    const newSecInitial = Math.floor(Math.random() * 6) + 1;
    setInitial(newInitial);
    setSecInitial(newSecInitial);
    setSum(newInitial + newSecInitial);
  };
  return (
    <div className="  w-3/5 mx-auto border-1 border-black">
      <h1 className="w-3/4 mx-auto text-center text-5xl">Roll less Than 4</h1>
      <div className=" flex justify-center container">
        <span className="text-4xl bg-purple-400 text-white font-semibold px-6 py-4 mr-5 rounded-md">
          {initial}
        </span>
        <span className="text-4xl bg-purple-400 text-white font-semibold px-6 py-4 rounded-md">
          {secInitial}
        </span>
      </div>
      <button
        className="bg-gray-700 text-white mt-6 px-5 py-3 rounded-md "
        onClick={randomValue}
      >
        Re-Roll
      </button>
      {sum <= 4 && <h1 className="text-2xl mb-10 text-center">-- You Win!! --</h1>}
    </div>
  );
};

export default LessThan;
