import React from "react";

const AddUser = () => {
  return (
    <div>
      <form action="" className="flex gap-3 p-5">
        <input
          type="text"
          placeholder="Username"
          name="username"
          className="p-3 rounded-md border-none outline-none"
        />
        <button className="p-3 rounded-md bg-blue-500 text-white cursor-pointer border-none">
          Search
        </button>
      </form>
      <div className="mt-7 flex items-center justify-between">
        <div className="flex items-center gap-5">
          <img
            src="./avatar.png"
            alt=""
            className="w-14 h-14 rounded-full object-contain"
          />
          <span>Jhon Doe</span>
        </div>
        <button className="p-3 rounded-md bg-blue-500 text-white cursor-pointer border-none">
          Add user
        </button>
      </div>
    </div>
  );
};

export default AddUser;
