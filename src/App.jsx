import { useEffect } from "react";
import Chat from "./components/Chat";
import Details from "./components/Details";
import List from "./components/List";
import Login from "./components/Login";
import Toast from "./components/Toast";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./lib/firebase";
import { useUserStore } from "./lib/userStore";
import { useChatStore } from "./lib/chatStore";

const App = () => {
  const user = false;
  const { currentUser, isLoading, fetchUserInfo } = useUserStore();
  const { chatId } = useChatStore();
  useEffect(() => {
    const unSub = onAuthStateChanged(auth, (user) => {
      fetchUserInfo(user?.uid);
    });
    return () => {
      unSub();
    };
  }, [fetchUserInfo]);

  console.log(currentUser);

  if (isLoading)
    return (
      <div className="p-12 text-[36px] rounded-md bg-oDarkBlue">Loading...</div>
    );

  return (
    <div className="container w-[90vw] h-[90vh] bg-background backdrop-blur-md rounded-xl text-white border-[#ffffff9b] border-2 flex flex-row overflow-x-hidden">
      {currentUser ? (
        <>
          <List />
          {chatId && <Chat />}
          {chatId && <Details />}
        </>
      ) : (
        <Login />
      )}
      <Toast />
    </div>
  );
};

export default App;
