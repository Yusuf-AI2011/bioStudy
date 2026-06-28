import React from "react";
import Sidebar from "./components/Sidebar";
import Right from "./components/Right";

const App = () => {
  return (
    <div className="w-[100%] h-[100vh] flex justify-start items-start">
      <Sidebar />
      <Right />
    </div>
  );
};

export default App;
