"use client";
import React, { useEffect, useState } from 'react';
import { BsStars } from "react-icons/bs";
import { FiMenu, FiX } from "react-icons/fi";
import Link from 'next/link';

const Navbar: React.FC = () => {
  const [today, setToday] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const currentDate = new Date();
    const formatted = currentDate.toLocaleDateString("th-TH", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
    setToday(formatted);
  }, []);

  return (
    <div style={{ fontFamily: 'LINESeedSansTH', fontWeight: 700 }} className='shadow-lg sticky top-0 z-50 bg-white'>
      <div className="px-6 py-4 max-w-7xl mx-auto space-y-4">
        <div className='flex items-center justify-between'>
          <div className='flex items-center'>
            <BsStars className='text-2xl' />
            <h1 className="text-2xl ml-2 font-bold">AI NEWS</h1>
            <h1 className="text-lg ml-4 font-bold hidden md:block">{today}</h1>
          </div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-4 text-lg">
            <li className='p-2 hover:text-gray-400 hover:scale-105 transition'>
              <Link href="/">ข่าวทั้งหมด</Link>
            </li>
            <li className='p-2 hover:text-gray-400 hover:scale-105 transition'>
              <Link href="/summarize">สรุปข่าว</Link>
            </li>
            <li className='p-2 hover:text-gray-400 hover:scale-105 transition'>
              <Link href="/about">เกี่ยวกับเรา</Link>
            </li>
          </ul>

          {/* Mobile Burger Button */}
          <button
            className="md:hidden text-2xl"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <ul className="md:hidden flex flex-col space-y-2 text-lg bg-white shadow-md rounded p-4">
            <li className='p-2 hover:text-gray-400 transition'>
              <Link href="/" onClick={() => setIsOpen(false)}>ข่าวทั้งหมด</Link>
            </li>
            <li className='p-2 hover:text-gray-400 transition'>
              <Link href="/summarize" onClick={() => setIsOpen(false)}>สรุปข่าว</Link>
            </li>
            <li className='p-2 hover:text-gray-400 transition'>
              <Link href="/about" onClick={() => setIsOpen(false)}>เกี่ยวกับเรา</Link>
            </li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default Navbar;