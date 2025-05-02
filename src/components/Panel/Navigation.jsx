import React from "react";
import { FaPlus, FaRegTrashAlt } from "react-icons/fa";

function Navigation({ setPage, page }) {
  const defaultState = "flex items-center gap-5 p-8 rounded-full";
  const activeState = "text-white bg-black";

  return (
    <div className="w-fit mx-auto flex gap-[2rem] bg-forground rounded-4xl p-[2rem] text-3xl font-medium">
      <button
        className={
          page === "delete" ? `${defaultState} ${activeState}` : defaultState
        }
        onClick={() => setPage("delete")}
      >
        Delete
        <FaRegTrashAlt />
      </button>
      <button
        className={
          page === "create" ? `${defaultState} ${activeState}` : defaultState
        }
        onClick={() => setPage("create")}
      >
        Create <FaPlus />
      </button>
    </div>
  );
}

export default Navigation;
