"use client";
import React, { useEffect, useState } from 'react';
import { BsStars } from "react-icons/bs";
import Link from 'next/link'

const Navbar: React.FC = () => {
  const [today, setToday] = useState("");

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
      <div className="px-6 py-4 max-w-7xl mx-auto space-y-8 ">
          <div className='justify-between flex items-center'>
            <div className='justify-between flex items-center'>
              <BsStars className='text-2xl items-center' />
              <h1 className="text-2xl ml-2 font-bold">AI NEWS</h1>
              <h1 className="text-lg ml-6 font-bold">{today}</h1>  
            </div>
            <ul className="flex space-x-2 text-lg">
              <li className='p-2  hover:text-shadow-lg hover:text-gray-400 hover:scale-105 transition'>
                <Link href="/">ข่าวทั้งหมด</Link>
              </li>
              <li className='p-2 hover:text-shadow-lg hover:text-gray-400 hover:scale-105 transition'>
                <Link href="/summarize">สรุปข่าว</Link>
              </li>
              <li className='p-2  hover:text-shadow-lg hover:text-gray-400 hover:scale-105 transition'>
                <Link href="/about">เกี่ยวกับเรา</Link>
              </li>
            </ul>
          </div>
      </div>
    </div>
  );
};

export default Navbar;