import React from "react";

const Details = () => {
  return (
    <div className="flex-1">
      <div className="py-5 px-5 flex flex-col  items-center gap-3 border-b-2 border-[#dddddd35] ">
        <img
          className="w-[100px] h-[100px] object-contain rounded-full"
          src="./avatar.png"
          alt=""
        />
        <h2>John Doe</h2>
        <p>Lorem ipsum dolor sit amet.</p>
      </div>
      <div className="p-5  flex flex-col gap-8">
        <div className="">
          <div className="flex justify-between items-center">
            <span>Chat settings</span>
            <img
              src="./arrowUp.png"
              alt=""
              className="bg-oDarkBlue w-8 h-8 rounded-full p-2 cursor-pointer "
            />
          </div>
        </div>
        <div>
          <div className="flex justify-between items-center">
            <span>Privacy & help</span>
            <img
              src="./arrowDown.png"
              alt=""
              className="bg-oDarkBlue w-8 h-8 rounded-full p-2 cursor-pointer "
            />
          </div>
          <div></div>
        </div>
        <div>
          <div className="flex justify-between items-center">
            <span>Shared files</span>
            <img
              src="./arrowUp.png"
              alt=""
              className="bg-oDarkBlue w-8 h-8 rounded-full p-2  cursor-pointer "
            />
          </div>
          <div>
            <div className="flex gap-3 items-center">
              <img
                src="https://unsplash.com/photos/white-and-blue-cloudy-sky-f5_lfi2S-d4"
                className="w-8 h-8"
                alt=""
              />
              <small>Lorem, ipsum dolor.</small>
              <img
                src="./download.png"
                alt=""
                className="bg-oDarkBlue w-8 h-8 rounded-full p-2 cursor-pointer"
              />
            </div>
          </div>
        </div>
        <button className="w-[80%] mx-auto bg-red-600 hover:bg-red-700 rounded-md duration-150 ease-in-out ">
          Block User
        </button>
        <button className="w-[80%] mx-auto bg-red-600 hover:bg-red-700 rounded-md duration-150 ease-in-out ">
          Log Out
        </button>
      </div>
    </div>
  );
};

export default Details;
