import { Link } from "react-router-dom";

const ResignationDone = () => {
  return (
    <>
      <main style={{ marginTop: "5em" }}>
        <div className="container">
          <div className="row">
            <div className="col text-center">
              <img src="/docsDone.gif" />
              <h1 className="display-2 color-sd fw-bold">ยินดีด้วย!! คุณลาออก<span className="text-decoration-underline">เกือบ</span>เสร็จแล้ว!!</h1>
              <p className="fs-2">หลังจากที่คุณดาวน์โหลดเอกสารแล้ว ทำตามขั้นตอนง่ายๆ ต่อไปนี้...</p>
            </div>
          </div>
          <hr />
          <div className="row py-2">
            <div className="col-3 d-flex align-items-center justify-content-center">
              <h1 className="text-center color-sd fw-bold mb-0" style={{ fontSize: 125 }}>1</h1>
            </div>
            <div className="col-9 d-flex ps-0 align-items-center">
              <div>
                <h1 className="color-sd fw-bold">ส่งเอกสารให้อาจารย์ที่ปรึกษา</h1>
                <p className="fs-4 mb-0"> หลังจากที่คุณดาวน์โหลดเอกสารแล้ว คุณสามารถส่งเอกสารให้กับอาจารย์ที่ปรึกษาทางอีเมล์หรือจะพิมพ์ออกมา แล้วนำไปให้อาจารย์เซ็นก็ได้เช่นเดียวกัน!!</p>
              </div>
            </div>
          </div>
          <hr />
          <div className="row py-2">
            <div className="col-3 d-flex align-items-center justify-content-center">
              <h1 className="text-center color-sd fw-bold mb-0" style={{ fontSize: 125 }}>2</h1>
            </div>
            <div className="col-9 d-flex ps-0 align-items-center">
              <div>
                <h1 className="color-sd fw-bold">ส่งเอกสารให้ทะเบียนคณะ</h1>
                <p className="fs-4 mb-0">นำเอกสารที่มีลายเซ็นครบพร้อมแล้วส่งให้กับทะเบียนคณะที่ <b>ตึก 3 ชั้น 1 หน้าบันไดขาวลานเกียร์</b></p>
                <a className="btn btn-danger mt-2" href="https://www.google.com/maps/place/ตึก+3+คณะวิศวกรรมศาสตร์+จุฬาลงกรณ์มหาวิทยาลัย/@13.7368903,100.5309675,17z/data=!3m1!4b1!4m6!3m5!1s0x30e29ed5b1d11345:0x76beb9cf4b124d02!8m2!3d13.7368903!4d100.5331562!16s%2Fg%2F11c6lwr46f" role="button">แผนที่ไปตึก 3</a>
              </div>
            </div>
          </div>
          <hr />
          <div className="row py-2">
            <div className="col-3 d-flex align-items-center justify-content-center">
              <h1 className="text-center color-sd fw-bold mb-0" style={{ fontSize: 125 }}>3</h1>
            </div>
            <div className="col-9 d-flex ps-0 align-items-center">
              <div>
                <h1 className="color-sd fw-bold">รอผลการลาออก</h1>
                <p className="fs-4 mb-0"><span className="text-rgb">ยินดีด้วย!! คุณลาออกสำเร็จแล้ว!!</span> ตอนนี้คุณก็แค่นั่งรอผลการลาออกในเว็ปไซต์ <a className="fw-bold" href="https://www2.reg.chula.ac.th">Reg Chula</a> หลัง 5 วันทำการก็เป็นอันเสร็จสิ้น!! 🎉🎉</p>
              </div>
            </div>
          </div>
          <hr />
          <div className="row py-2 mb-2">
            <div className="col d-flex ps-0 align-items-center justify-content-center">
              <div>
                <h1 className="color-sd fw-bold mb">แล้วหวังว่าจะได้พบกันใหม่!!</h1>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default ResignationDone;
