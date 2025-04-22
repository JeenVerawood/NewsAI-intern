'use client'

import React, { useEffect, useState } from 'react'
import { IoIosArrowForward } from "react-icons/io";
import axios from 'axios' 


type NewsItem = {
  url: string
  description: string
  summary: string
  image?: string  
}


export default function NewsReportPage() {
  const [news, setNews] = useState<NewsItem[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const res = await axios.get('https://dev.abdul.in.th/newsai/api/v1/api/news')
        const data = res.data

        if (Array.isArray(data)) {
          setNews(data)
        } else if (Array.isArray(data.news)) {
          setNews(data.news)
        } else {
          setError('ไม่พบข้อมูลข่าวที่ถูกต้อง')
        }
      } catch (err: any) {
        console.error('Error fetching news:', err)
        setError('เกิดข้อผิดพลาดในการโหลดข่าว')
      } finally {
        setLoading(false)
      }
    }

    fetchNews()
  }, [])

  return (
    <div className=''> 
      <div style={{ fontFamily: 'LINESeedSansTH', fontWeight: 700 }}   className="p-6 max-w-7xl mx-auto h-auto space-y-8">
        {loading && 
        <div className='fixed inset-0 flex items-center justify-center bg-white bg-opacity-50 z-50'>
            <div className="h-4 w-4 border bg-gray-500 border-gray-300 absolute animate-spin"></div>
            <div className="h-10 w-10 border-2 border-gray-500 absolute animate-[spin-reverse_1s_linear_infinite]"></div>
        </div>}
        {!loading && (
          <section>
            <h2 className="text-xl font-semibold mt-8 mb-2">📋 ข่าวรายหัว</h2>
            <div className="grid grid-cols-1 min-h-[500px] md:grid-cols-2 gap-6">
              {Array.isArray(news) && news.map((item, index) => (
                <div key={index} className="p-4 border h-1vw rounded shadow hover:shadow-lg transition">
                  <img  
                    src={item.image || "/image/Nectec.jpg"}
                    onError={(e) => {
                      e.currentTarget.src = "/image/Nectec.jpg"
                    }}
                    alt="ข่าวภาพประกอบ"
                    className="w-full h-80 object-cover rounded-xl"
                  />
                  <p className="mt-2 text-2xl font-bold text-gray-700"> {item.description}</p>
                  <p className="mt-2">📝 {item.summary}</p>
                  <a href={item.url} target="_blank" className="text-gray-600 font-semibold underline">
                    <div className='flex items-center hover:text-gray-400  transitions duration-300'>
                      <p>อ่านเพิ่มเติมจากเเหล่งข่าว</p>
                      <IoIosArrowForward />
                    </div>
                  </a>
                </div>
              ))}
            </div>
          </section>
        )}
        
      </div>
  </div>
  )
}