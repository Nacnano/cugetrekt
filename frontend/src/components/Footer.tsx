import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="mt-auto">
      <div className="container-fluid bg-sd text-white d-flex align-items-center justify-content-center">
        <footer className="py-3 mt-4">
          <h3 className="text-center">Cu Get Rekt</h3>
          <ul className="nav justify-content-center pb-3 border-top">
            <li className="nav-item"><a href="#" className="text-white nav-link px-2">Home</a></li>
            <li className="nav-item"><a href="#" className="text-white nav-link px-2">Features</a></li>
            <li className="nav-item"><a href="#" className="text-white nav-link px-2">Pricing</a></li>
            <li className="nav-item"><a href="#" className="text-white nav-link px-2">FAQs</a></li>
            <li className="nav-item"><a href="#" className="text-white nav-link px-2">About</a></li>
          </ul>
        </footer>
      </div>
    </div>
  );
}

export default Footer;
