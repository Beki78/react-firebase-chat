import React, { useEffect, useRef, useState } from "react";
import EmojiPickere from "emoji-picker-react";
const Chat = () => {
  const [open, setOpen] = useState(false);
  const [text, setText] = useState("");
    const endRef = useRef(null);


  const handleEmoji = (e) => {
    setText((prev) => prev + e.emoji);
    setOpen(false);
  };
  useEffect(() => {
    endRef.current?.scrollIntoView({behavior: "smooth"})
  }, [])
  
  return (
    <div className="flex-[2] flex flex-col border-l-2 border-r-2 border-[#dddddd35] h-full">
      <div className="p-5 flex items-center border-b-2 border-[#dddddd35]">
        <div className="">
          <img
            src="./avatar.png"
            alt=""
            className="w-14 h-14 object-cover rounded-full"
          />
        </div>
        <div className="flex flex-col ml-4">
          <span>John Doe</span>
          <p className="text-[.8rem] text-[#a5a5a5]">
            Lorem ipsum dolor sit amet.
          </p>
        </div>
        <div className="flex ml-auto gap-4">
          <img src="./phone.png" alt="" className="w-5 h-5" />
          <img src="./video.png" alt="" className="w-5 h-5" />
          <img src="./info.png" alt="" className="w-5 h-5" />
        </div>
      </div>
      <div className="flex-1 p-5 scrollbar-thumb-slate-700 scrollbar-track-slate-600  scrollbar-thin overflow-y-auto flex flex-col">
        <div className="max-w-[70%] flex gap-5">
          <img
            src="./avatar.png"
            alt=""
            className="w-8 h-8 object-contain rounded-full"
          />
          <div>
            <img
              src="https://unsplash.com/photos/a-night-sky-filled-with-stars-and-trees-AKgtApn4Tec"
              alt=""
              className="w-full h-[300px] object-cover rounded-md mb-2"
            />
            <p className="bg-oDarkBlue p-2 rounded-b-2xl rounded-tr-2xl text-[.9rem]">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam
              neque atque corporis ut beatae minima nisi exercitationem minus
              fugiat inventore.
            </p>
            <small>1 min ago</small>
          </div>
        </div>
        <div ref={endRef}></div>
      </div>

      <div>
        <div className="flex gap-2 mt-auto p-5 items-center justify-between border-t-2 border-[#dddddd35]">
          <div className="flex gap-3 ">
            <img src="../img.png" alt="" className="h-5 w-5" />
            <img src="./camera.png" alt="" className="h-5 w-5" />
            <img src="./mic.png" alt="" className="h-5 w-5" />
          </div>
          <input
            className="flex-1 p-4 text-[16px] rounded-sm bg-oDarkBlue border-none outline-none text-white"
            type="text"
            placeholder="Type a message..."
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <div className="relative">
            <img
              src="./emoji.png"
              onClick={() => setOpen((prev) => !prev)}
              alt=""
              className="h-5 w-5"
            />
            <div className="absolute bottom-7 left-0">
              <EmojiPickere open={open} onEmojiClick={handleEmoji} />
            </div>
          </div>
          <button className="bg-blue-600 text-white py-2 px-5 rounded-md hover:bg-blue-700">
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chat;
