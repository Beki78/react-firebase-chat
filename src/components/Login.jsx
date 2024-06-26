import React, { useState } from "react";
import { toast } from "react-toastify";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth, db } from "../lib/firebase";
import { doc, setDoc } from "firebase/firestore";
import upload from "../lib/uploads";

const Login = () => {
  const [avatar, setAvatar] = useState({
    file: null,
    url: "",
  });
  const [loading, setLoading] = useState(false);
  const handleRegister = async (e) => {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData(e.target);
    const { username, email, password } = Object.fromEntries(formData);

    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);

      const imageUrl = await upload(avatar);

      await setDoc(doc(db, "users", res.user.uid), {
        username,
        email,
        avatar: imageUrl,
        id: res.user.uid,
        blocked: [],
      });

      await setDoc(doc(db, "userchats", res.user.uid), {
        chats: [],
      });
      toast.success("Account created");
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleAvatar = (e) => {
    if (e.target.files[0]) {
      setAvatar({
        file: e.target.files[0],
        url: URL.createObjectURL(e.target.files[0]),
      });
    }
  };

  const handleLogIn = async (e) => {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData(e.target);
    const {email, password } = Object.fromEntries(formData);
    try {
      await signInWithEmailAndPassword(auth, email, password)
      toast.success("Login successfully")
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="w-full h-full flex items-center gap-[100px]">
      <div className="flex-1 flex flex-col items-center gap-5">
        <h2>Welcome back,</h2>
        <form
          onSubmit={handleLogIn}
          className="flex flex-col justify-center gap-5"
        >
          <input
            type="text"
            placeholder="Email"
            name="email"
            className="p-5 border-none outline-none bg-oDarkBlue text-white rounded-md"
          />
          <input
            type="password"
            placeholder="Password"
            name="password"
            className="p-5 border-none outline-none bg-oDarkBlue text-white rounded-md"
          />
          <button
            disabled={loading}
            type="submit"
            className={`w-full  py-3 border-none bg-blue-500 text-white rounded-md  font-bold${
              loading ? "bg-blue-400 cursor-not-allowed" : "cursor-pointer "
            }`}
          >
            {loading ? "Loading" : "Sign In"}
          </button>
        </form>
      </div>
      <div className="h-[80%] w-[2px] bg-[#dddddd35]"></div>
      <div className="flex-1 flex flex-col items-center gap-5">
        <div>
          <h2>Create an account</h2>
          <form
            onSubmit={handleRegister}
            className="flex flex-col justify-center gap-5"
          >
            <label
              htmlFor="file"
              className="w-full flex items-center justify-between cursor-pointer underline"
            >
              <img
                src={avatar.url || "./avatar.png"}
                alt=""
                className="w-14 h-14 rounded-full object-contain"
              />
              Upload an image
            </label>
            <input
              type="file"
              id="file"
              className="hidden"
              onChange={handleAvatar}
            />
            <input
              type="text"
              placeholder="Username"
              name="username"
              className="p-5 border-none outline-none bg-oDarkBlue text-white rounded-md"
            />
            <input
              type="text"
              placeholder="Email"
              name="email"
              className="p-5 border-none outline-none bg-oDarkBlue text-white rounded-md"
            />
            <input
              type="password"
              placeholder="Password"
              name="password"
              className="p-5 border-none outline-none bg-oDarkBlue text-white rounded-md"
            />
            <button
              disabled={loading}
              type="submit"
              className={`w-full  py-3 border-none bg-blue-500 text-white rounded-md  font-bold${
                loading ? " cursor-not-allowed bg-blue-400" : "cursor-pointer "
              }`}
            >
              {loading ? "Loading" : "Sign Up"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
