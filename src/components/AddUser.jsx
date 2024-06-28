import {
  arrayUnion,
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  serverTimestamp,
  setDoc,
  updateDoc,
  where,
} from "firebase/firestore";
import React, { useState } from "react";
import { db } from "../lib/firebase";
import { useUserStore } from "../lib/userStore";

const AddUser = () => {
  const { currentUser } = useUserStore();
  const [user, setUser] = useState(null);
  const handleSearch = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const username = formData.get("username");

    try {
      const userRef = collection(db, "users");

      const q = query(userRef, where("username", "==", username));
      const querySnapShot = await getDocs(q);

      if (!querySnapShot.empty) {
        setUser(querySnapShot.docs[0].data());
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleAdd = async () => {
    const chatRef = collection(db, "chats");
    const userChatRef = collection(db, "userchats");
    try {
      const newChatRef = doc(chatRef);
      await setDoc(newChatRef, {
        createdAt: serverTimestamp(),
        message: [],
      });
      await updateDoc(doc(userChatRef, user.id), {
        chats: arrayUnion({
          chatId: newChatRef.id,
          lastMessage: "",
          receverId: currentUser.id,
          updatedAt: Date.now(),
        }),
      });
      await updateDoc(doc(userChatRef, currentUser.id), {
        chats: arrayUnion({
          chatId: newChatRef.id,
          lastMessage: "",
          receverId: user.id,
          updatedAt: Date.now(),
        }),
      });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <form onSubmit={handleSearch} className="flex gap-3 p-5">
        <input
          type="text"
          placeholder="Username"
          name="username"
          className="p-3 rounded-md border-none outline-none text-black"
        />
        <button className="p-3 rounded-md bg-blue-500 text-white cursor-pointer border-none">
          Search
        </button>
      </form>
      {user && (
        <div className="mt-7 flex items-center justify-between">
          <div className="flex items-center gap-5">
            <img
              src={user.avatar || "./avatar.png"}
              alt=""
              className="w-14 h-14 rounded-full object-contain"
            />
            <span>{user.username}</span>
          </div>
          <button
            onClick={handleAdd}
            className="p-3 rounded-md bg-blue-500 text-white cursor-pointer border-none"
          >
            Add user
          </button>
        </div>
      )}
    </div>
  );
};

export default AddUser;
