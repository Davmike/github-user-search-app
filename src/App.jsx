import { useState } from "react";
import Search from "./Components/Search";

function App() {
  const [dark, setDark] = useState(true);

  return (
    <main className={`${dark ? "bg-[#141D2F]" : "bg-[#F6F8FF]"}`}>
      <Search dark={dark} setDark={setDark} />
    </main>
  );
}

export default App;