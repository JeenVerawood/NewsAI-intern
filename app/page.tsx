// app/page.tsx
import './globals.css'
import Navbar from './navbar/page'
import Newreportpage from './newsreportpage/page'
import Summarize from './summarize/page'

// import About from './Components/about'
import Footer from './footer/page'

export default function Page() {
  return (
    <div style={{ fontFamily: 'LINESeedSansTH', fontWeight: 700 }}>
      <Navbar />
      <Newreportpage />
      <Footer />
    </div>
  );
}