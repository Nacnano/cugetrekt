import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="mt-auto">
      <div className="container-fluid bg-sd text-white d-flex align-items-center justify-content-center">
        <footer className="py-3 mt-4">
          <h3 className="text-center">Cu Get Rekt</h3>
          <ul className="nav justify-content-center pb-3 border-top">
            <li className="nav-item"><a href="/" className="text-white nav-link px-2">หน้าแรก</a></li>
            <li className="nav-item"><Link to="/Withdrawal" className="text-white nav-link px-2">ถอน</Link></li>
            <li className="nav-item"><Link to="/Resignation" className="text-white nav-link px-2">ลาออก</Link></li>
            <li className="nav-item"><Link to="/ScorePrediction" className="text-white nav-link px-2">ทำนายคะแนน</Link></li>
            <li className="nav-item"><Link to="#" className="text-white nav-link px-2">รีวิว</Link></li>
          </ul>
        </footer>
      </div>
    </div>
  );
}

export default Footer;
