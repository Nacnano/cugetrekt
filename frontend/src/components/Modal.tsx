export default function Modal() {
  return (
    <>
      <script src="https://kit.fontawesome.com/cf824f24b5.js" crossOrigin="anonymous"></script>
      <div className="modal fade" id="docSelector" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-xl modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header mb-3">
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <h1 className="text-center">เลือกเอกสารที่ต้องการกรอก</h1>
            <div className="modal-body">
              <div className="row">
                <div className="col">
                  <a href="#" className="text-decoration-none text-dark" >
                    <div className="card btn-to-sd" style={{ borderColor: "var(--sd)", borderWidth: 2 }}>
                      <div className="card-body">
                        <div className="row d-flex flex-wrap align-items-center">
                          <div className="col-3 text-center">
                            <i className="display-1 fa-regular fa-circle-down"></i>
                          </div>
                          <div className="col">
                            <h1 className="card-title fw-bold">ใบถอน</h1>
                            <p className="card-text" style={{ fontSize: 18 }}>เหมาะสำหรับนิสิตที่ทำคะแนนได้ไม่ดี แล้วคิดว่าจะลงใหม่ในเทอมถัดไปเพื่อแก้ไขคะแนนให้ดีขึ้น</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="col">
                  <a href="#" className="text-decoration-none text-dark" >
                    <div className="card btn-to-pm" style={{ borderColor: "var(--pm)", borderWidth: 2 }}>
                      <div className="card-body">
                        <div className="row d-flex flex-wrap align-items-center">
                          <div className="col-3  text-center">
                            <i className="display-1 fa-solid fa-person-running"></i>
                          </div>
                          <div className="col">
                            <h1 className="card-title fw-bold">ลาออก</h1>
                            <p className="card-text" style={{ fontSize: 18 }}>เหมาะสำหรับนิสิตที่ต้องการจะลาออก เพื่อซิ่ว หรือต้องการเริ่มต้นชีวิตมหาวิทยาลัยใหม่อีกครั้ง</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div >
    </>
  );
}
