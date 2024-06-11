import React, { useContext, useState } from "react";
import MainNavBar from "./components/MainNavBar.jsx";
import { counterContext } from "./context/contextapi.jsx";
import MyTodoApp from "./components/mytodoapp.jsx";

function App() {
 const [count, setcount] = useState(0)

  return (
    <>
    <counterContext.Provider value={count}>

    <MainNavBar />
    <div className="flex flex-col items-center">
      <span>Your Count is {count}</span>
      <button className="border border-black bg-slate-500 text-white active:font-bold" onClick={()=>{setcount(count+1)}}>CLick Here TO Increase</button>
    </div>
    </counterContext.Provider>
    </>
  );
}

export default App;
