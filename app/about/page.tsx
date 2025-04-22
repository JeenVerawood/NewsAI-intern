import React from 'react'
import Navbar from '../navbar/page'
import Footer from '../footer/page'


function About() {
  return (
    <div>
      <Navbar />
      <div
        style={{ fontFamily: 'LINESeedSansTH', fontWeight: 700 }}
        className="max-w-7xl min-h-screen flex flex-col md:flex-row justify-center gap-6 p-6 mx-auto"
      >
        <div className="p-10 border max-h-[530px]  rounded-xl text-xl shadow hover:shadow-lg transition w-full md:w-1/2 flex justify-center items-center">
          <img src="/image/Nectec.jpg" alt="NECTEC" className="max-w-full max-h-[300px] rounded-lg" />
        </div>

        <div className="flex-1 space-y-4">
          <section className="p-6 border rounded-xl text-xl shadow hover:shadow-lg transition bg-white">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">👨‍💻 ผู้พัฒนา</h2>
            <p className="text-gray-700 leading-relaxed">
              📛 National Electronics and Computer Technology Center<br />
              📍 หรือชื่อภาษาไทยคือ “ศูนย์เทคโนโลยีอิเล็กทรอนิกส์และคอมพิวเตอร์แห่งชาติ”<br /><br />
              เป็นหน่วยงานวิจัยด้านเทคโนโลยี อิเล็กทรอนิกส์ คอมพิวเตอร์ และดิจิทัล ภายใต้ สวทช. (สำนักงานพัฒนาวิทยาศาสตร์และเทคโนโลยีแห่งชาติ - NSTDA)
            </p>
          </section>

          <section className="p-6 border rounded-xl text-xl shadow hover:shadow-lg transition bg-white">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">📬 ติดต่อเรา</h2>
            <div className="flex flex-col space-y-2 text-gray-700 text-lg">
              <p>📧 Email: your.email@nectec.or.th</p>
              <p>📞 Tel: 02-123-4567</p>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default About