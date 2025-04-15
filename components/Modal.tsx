import React, { useState } from "react";
import { PlaceholdersAndVanishInput } from "./ui/PlaceholdersAndVanishInput";
import { addTodo } from "@/api";
import { useRouter } from "next/navigation";
import { v4 as uuidv4 } from "uuid";

interface ModalProps {
  openModal: boolean;
  setOpenModal: (open: boolean) => boolean | void;
}

const Modal: React.FC<ModalProps> = ({ openModal, setOpenModal }) => {
  const router = useRouter();
  // إنشاء حالة لتخزين القيمة المُدخلة
  const [inputValue, setInputValue] = useState("");

  const placeholders = [
    "Go to work meeting ",
    "Going for shop at 10 pm",
    "Meet my friend before 4pm",
    "Washin my dad car",
    "walking my dog",
  ];

  // تحديث الحالة عند تغير قيمة الإدخال
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    console.log(e.target.value);
  };

  // عند الضغط على زر الSubmit تطبع القيمة المُدخلة وكلمة submitted
  const handleSubmitAddTask = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await addTodo({
      id: uuidv4(),
      text: inputValue,
    });
    setInputValue("");
    setTimeout(() => {
      setOpenModal(false);
      router.refresh();
    }, 500);
  };

  return (
    <dialog
      id="my_modal_3"
      className={`modal ${openModal ? "modal-open" : ""}`}
    >
      <div className="modal-box">
        <form>
          {/* عند وجود زر داخل الفورم سيتم إغلاق المودال */}
          <button
            onClick={() => setOpenModal(false)}
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
          >
            ✕
          </button>
        </form>
        <div className="h-[15rem] flex flex-col justify-center items-center px-4">
          <h2 className="mb-10 sm:mb-20 text-xl text-center sm:text-5xl dark:text-white text-black">
            Add task to do
          </h2>
          <PlaceholdersAndVanishInput
            placeholders={placeholders}
            onChange={handleChange}
            onSubmit={handleSubmitAddTask}
          />
        </div>
      </div>
    </dialog>
  );
};

export default Modal;
