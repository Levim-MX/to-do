"use client";

import { Itask } from "@/types/tasks";
import React, { useState } from "react";
import { FaRegEdit } from "react-icons/fa";
import { FaRegTrashCan } from "react-icons/fa6";
import Modal from "./Modal";
interface TodoListProps {
  tasks: Itask[];
}
const ToDoList: React.FC<TodoListProps> = ({ tasks }) => {
  const [openModalEdit, setOpenModalEdit] = useState(false);
  return (
    <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>task</th>
            <th>action</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task) => (
            <tr key={task.id}>
              <td className="w-full">{task.text}</td>
              <td>
                <div className="flex gap-4">
                  <FaRegEdit
                    onClick={() => setOpenModalEdit(true)}
                    cursor="pointer"
                    className="text-blue-500"
                    size={20}
                  />
                  <Modal
                    openModal={openModalEdit}
                    setOpenModal={setOpenModalEdit}
                  />
                  <FaRegTrashCan
                    cursor="pointer"
                    className="text-red-400"
                    size={20}
                  />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ToDoList;
