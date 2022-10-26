import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="mt-auto">
      <div className="container-fluid bg-sd text-white d-flex align-items-center justify-content-center">
        <footer className="py-3 mt-4">
          <h3 className="text-center">Cu Get Rekt</h3>
          <ul className="nav justify-content-center pb-3 border-top">
            <li className="nav-item"><a href="/" className="text-white nav-link px-2">หน้าแรก</a></li>
            <li className="nav-item"><Link to="/MyDocuments" className="text-white nav-link px-2">กรอกเอกสาร</Link></li>
            <li className="nav-item"><a href="/ScorePrediction" className="text-white nav-link px-2">ทำนายคะแนน</a></li>
            <li className="nav-item"><a href="https://chula.wellness.in.th" className="text-white nav-link px-2">สายด่วนสุขภาพจิต</a></li>
          </ul>
        </footer>
      </div>
    </div>
  );
}

export default Footer;
