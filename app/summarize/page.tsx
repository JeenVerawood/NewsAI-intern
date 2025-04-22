'use client'

import { useEffect, useState } from 'react'
import axios from 'axios'
import Navbar from '../navbar/page'
import Footer from '../footer/page'

export default function Summarize() {
  const [summary, setSummary] = useState<string | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchSummary = async () => {
      try {
        const res = await axios.get('https://dev.abdul.in.th/newsai/api/v1/api/summary')
        setSummary(res.data.summary)
      } catch (err: any) {
        setError(err.response?.data?.error || 'เชื่อมต่อ API ไม่สำเร็จ')
      } finally {
        setLoading(false)
      }
    }
    fetchSummary()
  }, [])
  

  return (
    <div>
      <Navbar/>
        <div style={{ fontFamily: 'LINESeedSansTH', fontWeight: 700 }}  className='p-6 h-auto max-w-7xl mx-auto space-y-8'> 
        <h1 className='text-xl'>สรุปข่าว AI รายวัน</h1>
        <div className='p-4 border rounded text-xl h-full shadow hover:shadow-lg transition'>
        {loading && 
        <div className='fixed inset-0 flex items-center justify-center bg-white bg-opacity-50 z-50'>
            <div className="h-4 w-4 border bg-gray-500 border-gray-300 absolute animate-spin"></div>
            <div className="h-10 w-10 border-2 border-gray-500 absolute animate-[spin-reverse_1s_linear_infinite]"></div>
        </div>}
          {error && <p style={{ color: 'red' }}>{error}</p>}
          {summary && <p style={{ whiteSpace: 'pre-line', lineHeight: 1.7 }}>{summary}</p>}
        </div>
      </div>
      <Footer />
    </div>
  )
}