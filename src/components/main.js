import React from "react";
import Header from "./header";
import Body from "./body";
import Footer from "./footer";

const Main = () => {
  return (
    <div className="bg-white min-h-120 w-80 px-4 py-2 text-center rounded">
      <Header />
      <Body/>
      <Footer/>
    </div>
  );
};

export default Main;
