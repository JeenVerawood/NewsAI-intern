"use client";
import React from "react";
import { BsFacebook, BsGithub, BsTwitterX } from "react-icons/bs";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 border-t mt-12 shadow-inner">
      <div className="max-w-7xl mx-auto px-6 py-10 text-gray-700">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-center md:text-left">
            <h1 className="text-xl font-bold">AI NEWS</h1>
            <p className="text-sm text-gray-500">© {new Date().getFullYear()} All rights reserved.</p>
          </div>
          <div className="flex space-x-4 text-xl">
            <a href="#" className="hover:text-blue-600 transition"><BsFacebook /></a>
            <a href="#" className="hover:text-gray-800 transition"><BsGithub /></a>
            <a href="#" className="hover:text-blue-500 transition"><BsTwitterX /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;