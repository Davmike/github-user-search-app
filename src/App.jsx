import { useEffect, useState } from "react";
import Search from "./Components/Search";
import axios from "axios";

function App() {
  const [userName, setUserName] = useState("octocat");
  const [dark, setDark] = useState(true);
  const [user, setUser] = useState({});
  const [error, setError] = useState(true);

  const getUser = async () => {
    try {
      const response = await axios.get(
        `https://api.github.com/users/${userName}`
      );
      const userData = response.data;
      setUser(userData);
      setError(true);
    } catch (err) {
      setError(false);
    }
  };
  // useeffect section
  useEffect(() => {
    getUser();
  }, []);
  // input event
  const eventName = (event) => {
    setUserName(event.target.value);
  };
  // convert joined data
  const joinedDate = new Date(user.created_at).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  return (
    <main
      className={`${
        dark ? "bg-[#141D2F]" : "bg-[#F6F8FF]"
      } transition duration-1000 ease-in-out`}
    >
      <Search
        dark={dark}
        setDark={setDark}
        user={user}
        getUser={getUser}
        eventName={eventName}
        userName={userName}
        joinedDate={joinedDate}
        error={error}
      />
    </main>
  );
}

export default App;
