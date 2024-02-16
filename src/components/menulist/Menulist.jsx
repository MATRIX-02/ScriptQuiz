// Menulist.js
import React from "react";

const Menulist = ({ number, setQuestionNumber, isCompleted, isActive }) => {
  const switchQuestionHandler = () => {
    setQuestionNumber(number);
  };

  return (
    <div
      className={`w-10 h-10 flex justify-center items-center rounded-lg cursor-pointer select-none ${
        isCompleted ? "bg-green-600" : "bg-slate-600"
      } ${isActive ? "border-2 border-white" : ""}`} // Apply border if isActive is true
      onClick={switchQuestionHandler}
    >
      <span className="rounded-lg text-base">{number}</span>
    </div>
  );
};

export default Menulist;
