import React from "react";
import { useState } from "react";


const Equalpart = () => {
  const [initial, setInitial] = useState(1);
  const [secInitial, setSecInitial] = useState(2);
  const [thirdInitial, setThirdInitial] = useState(3);

  const randomValue = () =>{
   
        setInitial(Math.floor(Math.random() * 6) + 1); 
        setSecInitial(Math.floor(Math.random() * 6) + 1); 
        setThirdInitial(Math.floor(Math.random() * 6) + 1); 
  }
  return (
      <div className="w-3/5 mx-auto mt-20 border-1 border-black">
        <h1 className="w-3/4 mx-auto text-center text-5xl">Roll the same number</h1>
        <div className=" flex justify-center container1">
          <span className="text-4xl bg-purple-400 text-white font-semibold px-6 py-4 mr-5 rounded-md">{initial}</span>
          <span className="text-4xl bg-purple-400 text-white font-semibold px-6 py-4 mr-5 rounded-md">{secInitial}</span>
          <span className="text-4xl bg-purple-400 text-white font-semibold px-6 py-4 rounded-md">{thirdInitial}</span>
        </div>
        <button
          className="bg-gray-700 text-white mt-6 px-5 py-3 rounded-md "
          onClick={randomValue}
        >
          Re-Roll
        </button>
        {initial=== secInitial && secInitial== thirdInitial  && <h1 className="text-2xl mb-10 text-center">-- You Win!! --</h1>}
      </div>
  );
};

export default Equalpart;
