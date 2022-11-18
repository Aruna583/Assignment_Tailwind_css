import React from "react";

const Header = () => {
  return (
    <div className="flex py-4 mb-1">
      <div className="mr-3 py-2">
        <img
          className="h-10 w-10 rounded-full"
          src="https://images.pexels.com/photos/39866/entrepreneur-startup-start-up-man-39866.jpeg?auto=compress&cs=tinysrgb&w=1600"
        />
      </div>
      <div className="text-left">
        <p
          className="text-lg font-sans  font-bold text-black-400" >
          Wade Warren
        </p>
        <p className="font-normal text-lg text-gray-500">July 17, 2018</p>
      </div>
    </div>
  );
};

export default Header;
