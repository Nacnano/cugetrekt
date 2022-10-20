const HomePage = () => {
  return (
    <>
      <main>
        <div id="loader" className="loader-wrapper fixed-top" style={{ zIndex: 2000 }}>
          <h1 className="display-5 text-white text-center d-none d-lg-block">วันนี้...
            คุณได้เตรียมตัวถอนหรือยัง&nbsp;</h1>
          <span className="loader"><span className="loader-inner"></span></span>
        </div>
        <div id="landing" className="container text-dark">
          <div className="row min-vh-100 align-items-center">
            <div className="col">
              <p className="display-3" style={{ fontWeight: "bold" }}>วันนี้...<br />คุณได้เตรียมตัวถอนหรือยัง</p>
              <p className="display-1 color-pm" id="timer1"></p>
              <p className="display-5 color-pm" id="timer2"></p>
              <p style={{ fontSize: 30, lineHeight: 1.5 }}> ก่อนที่จะหมดสิทธิในการถอน
              </p>
              <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" className="px-4 btn bg-pm fs-5 fw-bold"
                style={{ color: "#ffffff" }}><i className="fa-solid fa-file-pen"></i>&nbsp; กรอกใบถอนเลย!</a>
              <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                className="text-dark ul-on-hover px-4 fs-5 text-dark">ไม่มั่นใจ?</a>
              <a className="text-dark text-center" href="#section1"><span></span></a>
            </div>
          </div>
        </div>
        <div id="section1" className="sTopic container-fluid bg-dark mt-5 py-5">
          <div className="container text-white " >
            <div className="row justify-content-center align-items-center">
              <div className="row align-items-top lh-base">
                <div className="col text-center">
                  <h1 className="display-1">99%</h1>
                </div>
                <div className="col text-center ">
                  <h1 className="fTopic display-1">15</h1>
                </div>
                <div className="col text-center">
                  <h1 className="text-center display-1">3 นาที</h1>
                </div>
              </div>
              <div className="row align-items-center lh-base">
                <div className="col text-center">
                  <h4>คือจำนวนคนที่ติด F เพราะไม่ได้ถอน</h4>
                  <p className="fs-5">คนส่วนมากที่มีคะแนนน้อย แต่ตัดสินใจที่จะไม่ถอน มักจะลงเอยด้วยการติด F</p>
                </div>
                <div className="col text-center ">
                  <h4>คือคะแนนวิชา Calculus 1</h4>
                  <p className="fs-5">ที่อาจารย์แนะนำให้นิสิตถอน <br />เพราะโอกาสติด F สูง</p>
                </div>
                <div className="col text-center">
                  <h4>คือเวลาที่คุณจะใช้ในการกรอกใบถอน</h4>
                  <p className="fs-5">หากคุณใช้ Cu Get Rekt ดังนั้น<br /><a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" className="fs-5 fw-bold"
                    style={{ color: "#ffffff" }}>กรอกใบถอนเลย!</a></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default HomePage;
