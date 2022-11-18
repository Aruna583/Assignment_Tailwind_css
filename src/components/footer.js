import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faHeart} from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  return (
    <div>
      <div className="flex py-1 ">
        <div className="mr-3 py-2">
          <img
            className="h-10 w-10 rounded-full"
            src="https://images.pexels.com/photos/262391/pexels-photo-262391.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt="alex"/>
        </div>
        <div className="text-left py-1">
          <div className="flex mb-1">
            <p className="text-sm font-sans mr-2  font-bold text-black-400">
              Leslie Alexander
            </p>
            <p className="font-normal text-sm text-gray-700">25 minutes ago</p>
          </div>

          <p className="font-normal text-xs text-black-500">
            Lorem ipsum dolor sit amet, consectetur.
          </p>
          <div className="flex mt-3">
          <FontAwesomeIcon icon={faHeart} className="text-red-500 mr-2"/>
            <p className="mr-4 text-sm font-bold">12</p>

            <p className="text-sm text-black-400 font-bold">Reply</p>
          </div>
        </div>
      </div>
      <div className="flex py-4 mb-1">
        <div className="mr-3 py-2">
          <img
            className="h-10 w-10 rounded-full"
            src="https://images.pexels.com/photos/762080/pexels-photo-762080.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt="tina"
          />
        </div>
        <div className="text-left py-1">
          <div className="flex mb-1">
            <p className="text-sm font-sans mr-2  font-bold text-black-400">
              Tina Mills
            </p>
            <p className="font-normal  text-sm text-gray-700">3 minutes ago</p>
          </div>

          <p className="font-normal text-xs text-black-500">
            Dolor sit ameteiusmod consectetur<br/> adipscing elit.
          </p>
          <div className="flex mt-3">
          <FontAwesomeIcon icon={faHeart} className="text-red-500 mr-2"/>
            <p className="mr-4 text-sm font-bold">12</p>

            <p className="text-sm text-black-0 font-bold">Reply</p>
          </div>
        </div>
        
      </div>
      <div className="bg-slate-200 rounded flex mb-3 flex-row justify-around">
        <p className="text-xs  text-gray-700 py-2 font-bold">Show more comments</p>
       
      </div>
    </div>
  );
};

export default Footer;
