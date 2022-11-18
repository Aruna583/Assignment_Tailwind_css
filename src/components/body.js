import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faHeart, faArrowRight} from '@fortawesome/free-solid-svg-icons';
import {faSmile} from '@fortawesome/free-regular-svg-icons'
// import {  } from "@fortawesome/free-solid-svg-icons";
const Body = () => {
  return (
    <div className="text-left mb-4">
      <h1 className="font-bold mb-3 font-sans text-2xl">
        Web Design templates Selection
      </h1>
      <div className="grid grid-cols-3 gap-1">
        <img
          className="rounded-tl-md"
          src="https://images.pexels.com/photos/1353232/pexels-photo-1353232.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt="image1"/>
        <img
          
          src="https://images.pexels.com/photos/2291071/pexels-photo-2291071.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt="image2"
        />
        <img
          className="rounded-tr-md "
          src="https://images.pexels.com/photos/797639/pexels-photo-797639.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt="image3"
        />
      </div>
      <div className="grid grid-cols-2 gap-1 mt-1">
        <img
          className="rounded-bl-md"
          src="https://images.pexels.com/photos/1042442/pexels-photo-1042442.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt="image4"
        />
        <img
          className="rounded-br-md "
          src="https://images.pexels.com/photos/754263/pexels-photo-754263.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt="image5"
        />
      </div>
      <div className="mb-2 mt-3">
        <p className="font-sans text-xs">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
      <div className="flex mb-3">
        <FontAwesomeIcon icon={faHeart} className="text-red-500"/>

        <p className="font-bold text-sm ml-2">34</p>
      </div>
      <div className="bg-slate-200 rounded flex mb-3 flex-row justify-between text-gray-800">
        <input className="text-xs bg-slate-200 py-2 ml-1 font-bold" placeholder="Write a comment"/>
        <div className="flex text-center mt-1 mr-1">
          <FontAwesomeIcon icon={faSmile} className="mt-1 "/>
          <FontAwesomeIcon icon={faArrowRight} className="mt-1 ml-2 text-blue-500"/>
        </div>
      </div>
    </div>
  );
};

export default Body;
