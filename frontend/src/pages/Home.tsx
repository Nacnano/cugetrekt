const HomePage = () => {
  return (
    <>
      <main>
        <div id="loader" className="loader-wrapper fixed-top" style={{ zIndex: 2000 }}>
          <h1 className="display-5 text-white text-center d-none d-lg-block">วันนี้...
            คุณได้เตรียมตัวถอนหรือยัง&nbsp;</h1>
          <span className="loader"><span className="loader-inner"></span></span>
        </div>
        <div className="container text-dark">
          <div className="row min-vh-100 align-items-center">
            <div className="col">
              <p className="display-3" style={{ fontWeight: "bold" }}>วันนี้...<br />คุณได้เตรียมตัวถอนหรือยัง</p>
              <p className="display-1 color-pm" id="timer1"></p>
              <p className="display-5 color-pm" id="timer2"></p>
              <p className="" style={{ fontSize: 30, lineHeight: 1.5 }}> ก่อนที่จะหมดสิทธิในการถอน
              </p>
              <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" className="px-4 btn bg-pm fs-5 fw-bold"
                style={{ color: "#ffffff" }}><i className="fa-solid fa-file-pen"></i>&nbsp; กรอกใบถอนเลย!</a>
              <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                className="text-dark ul-on-hover px-4 fs-5 text-dark">ไม่มั่นใจ?</a>
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <div className="row">
            <div className="col">
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default HomePage;