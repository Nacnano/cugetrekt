import { Link } from 'react-router-dom'
import { useAuth } from '../Providers/AuthProvider'

const Navbar = () => {
  const { isLoggedIn, logout } = useAuth()

  return (
    <div>
      <nav className="shadowdrop navbar navbar-expand-lg bg-sd fixed-top">
        <div className="container">
          <a className="navbar-brand text-white" href="/">
            CU Get Rekt
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-togglear-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {isLoggedIn ? (<li className="nav-item">
                <Link
                  to="/MyDocuments"
                  className="nav-link text-white pointer-on-hover"
                  aria-current="page"
                >
                  เอกสาร
                </Link>
              </li>) : (<></>)}
              <li className="nav-item">
                <a
                  className="nav-link text-white pointer-on-hover"
                  href="/ScorePrediction"
                >
                  ทำนายคะแนน
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link text-white pointer-on-hover"
                  href="https://chula.wellness.in.th"
                >
                  สายด่วนสุขภาพจิต
                </a>
              </li>
              <li className="nav-item"><Link to="/AboutUs" className="text-white nav-link px-2">เกี่ยวกับเรา</Link></li>
            </ul>
            <div className="d-none d-lg-block">
              <ul className="navbar-nav mr-auto mb-2 mb-lg-0">
                <li className="nav-item me-auto">
                  {!isLoggedIn ? (
                    <Link className="nav-link text-white" to="/Login">
                      {' '}
                      <i className="fa-solid fa-user me-2"></i>เข้าสู่ระบบ
                    </Link>
                  ) : (
                    <li className="nav-item text-white dropdown">
                      <Link
                        className="nav-link dropdown-toggle text-white"
                        to="#"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <i className="fa-solid fa-user me-2"></i>โปรไฟล์
                      </Link>
                      <ul className="dropdown-menu dropdown-menu-end bg-sd">
                        <div>
                          <li className="py-1">
                            <Link
                              className="bg-dark-on-hover dropdown-item text-white"
                              to="/MyInfo"
                            >
                              <i className="fa-solid fa-circle-info me-2"></i>
                              ข้อมูลส่วนตัว
                            </Link>
                          </li>
                        </div>
                        <li>
                          <hr className="dropdown-divider" />
                        </li>
                        <li className="py-1">
                          <a
                            href="/"
                            className="color-pm bg-dark-on-hover dropdown-item pointer-on-hover"
                            onClick={logout}
                          >
                            <i className="fa-solid fa-right-from-bracket me-2"></i>
                            ออกจากระบบ
                          </a>
                        </li>
                      </ul>
                    </li>
                  )}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
