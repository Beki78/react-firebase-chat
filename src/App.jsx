import { useEffect } from "react";
import Chat from "./components/Chat";
import Details from "./components/Details";
import List from "./components/List";
import Login from "./components/Login";
import Toast from "./components/Toast";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./lib/firebase";

const App = () => {
  const user = false;

  useEffect(() => {
    const unSub = onAuthStateChanged(auth, (user) => {
      console.log(user);
    });
    return () => {
      unSub();
    };
  }, []);

  return (
    <div className="container w-[90vw] h-[90vh] bg-background backdrop-blur-md rounded-xl text-white border-[#ffffff9b] border-2 flex flex-row overflow-x-hidden">
      {user ? (
        <>
          <List />
          <Chat />
          <Details />
        </>
      ) : (
        <Login />
      )}
      <Toast />
    </div>
  );
};

export default App;
