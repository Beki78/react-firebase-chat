import React from "react";

const UserInfo = () => {
  return (
    <div className="px-[20px] py-5 flex items-center gap-12">
      <div className="flex flex-row items-center gap-[20px]">
        <img src="./avatar.png" alt="" className="w-[50px] h-[50px] rounded-full object-cover" />
        <h2>John Doe</h2>
      </div>
      <div className="flex ml-7 flex-row gap-3 w-[18px] cursor-pointer">
        <img src="./more.png" alt="" />
        <img src="./video.png" alt="" />
        <img src="./edit.png" alt="" />
      </div>
    </div>
  );
};

export default UserInfo;
