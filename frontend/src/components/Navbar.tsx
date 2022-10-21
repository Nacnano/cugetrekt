import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className="shadowdrop navbar navbar-expand-lg bg-sd fixed-top">
        <div className="container">
          <a className="navbar-brand text-white" href="/">CU Get Rekt</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-togglear-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link text-white" aria-current="page" to="#">ถอน</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="#">ลาออก</Link>
              </li>
              <li className="nav-item text-white dropdown">
                <Link className="nav-link dropdown-toggle text-white" to="#" role="button" data-bs-toggle="dropdown"
                  aria-expanded="false">
                  ข้อมูลประกอบการตัดสินใจ
                </Link>
                <ul className="dropdown-menu bg-sd">
                  <li className="py-1"><Link className="bg-dark-on-hover dropdown-item text-white" to="#">Blog</Link></li>
                  <li className="py-1"><Link className="bg-dark-on-hover dropdown-item text-white" to="#">Review</Link></li>
                  <li className="py-1"><Link className="bg-dark-on-hover dropdown-item text-white" to="/MyDocuments">My documents</Link></li>
                  <li className="py-1"><Link className="bg-dark-on-hover dropdown-item text-white" to="/MyInfo">My info</Link>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li><Link className="bg-dark-on-hover dropdown-item text-white" to="/">สายด่วนสุขภาพจิต</Link></li>
                </ul>
              </li>
            </ul>
            <div className="d-none d-lg-block">
              <ul className="navbar-nav mr-auto mb-2 mb-lg-0">
                <li className="nav-item me-auto">
                  <Link className="nav-link text-white" to="/Login"> <i className="fa-solid fa-user"></i>&nbsp; เข้าสู่ระบบ</Link>
                </li>
              </ul>
            </div>
            <div className="d-grid gap-1 mb-auto d-block d-lg-none">
              <Link className="btn btn-danger bg-pm nav-link text-white" to="/Login">
                เข้าสู่ระบบ </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
