import { Link } from "react-router-dom";
import { useAuth } from '../Providers/AuthProvider'

const Footer = () => {
  const { isLoggedIn, logout } = useAuth()
  return (
    <div className="mt-auto" style={{ zIndex: "2000" }}>
      <div className="container-fluid bg-sd text-white d-flex align-items-center justify-content-center">
        <footer className="py-3 mt-4">
          <h3 className="text-center">Cu Get Rekt</h3>
          <ul className="nav justify-content-center pb-3 border-top">
            <li className="nav-item"><a href="/" className="text-white nav-link px-2">หน้าแรก</a></li>
            {isLoggedIn ? (<li className="nav-item"><Link to="/MyDocuments" className="text-white nav-link px-2">กรอกเอกสาร</Link></li>) : (<></>)}
            <li className="nav-item"><a href="/ScorePrediction" className="text-white nav-link px-2">ทำนายคะแนน</a></li>
            <li className="nav-item"><a href="https://chula.wellness.in.th" className="text-white nav-link px-2">สายด่วนสุขภาพจิต</a></li>
            <li className="nav-item"><Link to="/AboutUs" className="text-white nav-link px-2">เกี่ยวกับเรา</Link></li>
          </ul>
        </footer>
      </div>
    </div>
  );
}

export default Footer;
