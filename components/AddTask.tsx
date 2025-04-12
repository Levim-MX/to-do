"use client";

import { FaSquarePlus } from "react-icons/fa6";
import Modal from "./Modal";
import { useState } from "react";
const AddTask = () => {
  const [openModal, setOpenModal] = useState(false);
  return (
    <div>
      <button
        onClick={() => setOpenModal(true)}
        className="w-[30%] btn btn-primary"
      >
        Add task
        <FaSquarePlus className="ml-2" size={18} />
      </button>

      <Modal openModal={openModal} setOpenModal={setOpenModal} />
    </div>
  );
};

export default AddTask;
