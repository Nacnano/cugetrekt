import { Link } from "react-router-dom";

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
              <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" className="px-4 btn btn-danger fs-5 fw-bold">
                <i className="fa-solid fa-file-pen"></i>&nbsp; กรอกใบถอนเลย!</a>
              <a href="#section1"
                className="text-dark text-decoration-none ul-on-hover px-4 fs-5 text-dark muted">ไม่มั่นใจ?</a>
              <a className="text-dark text-center" href="#section1"><span></span></a>
            </div>
          </div>
        </div>
        <div id="section1" className="fadeIn shadowdrop sTopic container-fluid bg-dark mt-5 py-4">
          <div className="container text-white py-5" >
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
        <div className="fadeIn px-4 pb-3 pt-5 my-5 text-center container-fluid align-items-center justify-content-center ">
          <div className="row">
            <div className="col">
              <h1 className="display-4 fw-bold">ยังตัดสินใจไม่ได้?</h1>
              <h1 className="display-4 fw-bold color-sd">ลองให้สถิติวิเคราะห์ช่วยมั้ย?</h1>
              <div className="col-lg-6 mx-auto">
                <p className="lead mb-4 fs-4">Cu Get Rekt มีระบบวิเคราะห์คะแนนจากสถิติที่สามารถช่วยวิเคราะห์ให้คุณได้ว่า
                  คะแนนมิดเทอมของวิชานี้ ได้เท่านี้ มีโอกาสจะได้เกรดอะไรเท่าไหร่
                  ให้เราช่วยคุณตัดสินใจว่าควรถอนหรือไม่ ด้วยสถิติจากนิสิตนับพันคน และความแม่นยำสูงถึง 90%!! </p>
                <div className="d-grid gap-2 d-sm-flex justify-content-sm-center mb-5">
                  <button type="button" className="btn btn-danger btn-lg px-4 me-sm-3">ลองใช้งานระบบสถิติ</button>
                  <button type="button" className="btn btn-outline-secondary btn-lg px-4">ขอผ่านก่อนดีกว่า</button>
                </div>
              </div>
            </div>
          </div>
          <div />
        </div>
      </main>
    </>
  );
}

export default HomePage;
