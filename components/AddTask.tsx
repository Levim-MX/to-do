import React from "react";
import { FaSquarePlus } from "react-icons/fa6";

const AddTask = () => {
  return (
    <div>
      <button className="w-[30%] btn btn-primary">
        Add task
        <FaSquarePlus className="ml-2" size={18} />
      </button>
    </div>
  );
};

export default AddTask;
