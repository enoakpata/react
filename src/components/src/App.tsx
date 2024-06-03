import React from "react";
import HelloWorld from "./components/HelloWorld";
import HelloWorld2 from "./components/HelloWorld2";
import HelloWorld3 from "./components/HelloWorld3";
import HelloWorld4 from "./components/HelloWorld4";
import HelloWorld5 from "./components/HelloWorld5";
import HelloWorld6 from "./components/HelloWorld6/HelloWorld6";
import HelloWorld7 from "./components/HelloWorld7/HelloWorld7";
import HelloWorld8 from "./components/HelloWorld8";

const App: React.FC = () => {
  return (
    <>
      <div className="bg-blue-100 h-48 flex justify-center items-center">
        <HelloWorld />
      </div>
      <div className="bg-blue-100 h-48 flex justify-center items-center">
        <HelloWorld2 name="Eno" />
      </div>
      <div className="bg-blue-100 h-48 flex justify-center items-center">
        <div className="bg-blue-100 flex h-full w-full p-6">
          <HelloWorld3 name="Therese" />
        </div>
      </div>
      <div className="bg-blue-100 h-full w-full p-6">
        <HelloWorld4 />
      </div>
      <div className="bg-blue-100 h-full w-full p-6">
        <div className="bg-blue-100 flex h-full w-full p-6">
          <HelloWorld5/>
        </div>  
      </div>
      <div className="bg-blue-100 h-48 flex justify-center items-center">
        <div className="bg-blue-100 flex h-full w-full p-6">
          <HelloWorld6/>
        </div>
      </div>
      <div className = "bg-blue-100 h-48 flex justify-center items-center">
        <div className="bg-blue-100 flex h-full w-full p-6">
          <HelloWorld7/>
        </div>
      </div>
      <div className = "bg-blue-100 h-48 flex justify-center items-center">
        <div className="bg-blue-100 flex h-full w-full p-6">
          <HelloWorld8/>
        </div>
      </div>
    </>
  );
};
export default App;
