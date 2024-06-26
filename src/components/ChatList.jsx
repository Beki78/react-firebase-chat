import React, { useRef, useState } from "react";
import AddUser from "./AddUser";

const ChatList = () => {
  const [addMode, setAddMode] = useState(false);
  const modalRef = useRef(null);

  const closeModal = (e) => {
    if (e.target === modalRef.current) {
      setAddMode(false);
    }
  };

  return (
    <div className="flex-1 scrollbar-thumb-slate-700 scrollbar-track-slate-600  scrollbar-thin overflow-y-auto">
      <div className="flex items-center gap-[20px] px-[20px] mb-5">
        <div className="flex-[1] bg-oDarkBlue flex flex-row items-center rounded-md p-2 gap-3">
          <img src="./search.png" alt="" className="w-[20px]" />
          <input
            type="text"
            placeholder="Search"
            className="bg-transparent flex-1 outline-none"
          />
        </div>
        <img
          src={addMode ? "./minus.png" : "./plus.png"}
          alt=""
          onClick={() => setAddMode((prev) => !prev)}
          className="w-[36px] bg-oDarkBlue p-2 rounded-md cursor-pointer"
        />
      </div>

      <div
        className="flex items-center px-3 border-b border-[#dddddd35]"
      >
        <img
          src="./avatar.png"
          alt=""
          className="w-[50px] h-[50px] rounded-full"
        />
        <div className="flex flex-col items-start p-[20px] cursor-pointer ">
          <span>Jane Doe</span>
          <p className="text-[.8rem]">Hello</p>
        </div>
      </div>
      {addMode && (
        <div
          ref={modalRef}
          onClick={closeModal}
          className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-60"
        >
          <div className="p-7 bg-slate-800 rounded-md w-96 h-72">
            <AddUser />
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatList;
