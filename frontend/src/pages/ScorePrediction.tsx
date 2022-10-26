import { useState } from 'react';

const ScorePrediction = () => {
  const [show, setShow] = useState(false);

  return (
    <>
      <script src="https://kit.fontawesome.com/cf824f24b5.js" crossOrigin="anonymous"></script>
      <div className="container-fluid bg-dark shadowdrop" style={{ paddingTop: '4em' }}>
        <div className="row text-white justify-content-center text-center">
          <h1 className="display-1 fw-bold mb-0">ทำนายเกรด</h1>
          <p style={{ fontSize: 18 }}>เลือกวิชาและกรอกคะแนนเพื่อคำนวณ!...<br /><a className="text-white" href="#" style={{ fontSize: 12 }}>วิธีใช้ระบบคำนวณ</a></p>
        </div>
        <div className="row justify-self-center mx-auto" style={{ width: "40%" }} >
          <div className="col mb-4">
            <div className="form-floating">
              <input className="form-control bg-dark text-white" list="datalistOptions" id="exampleDataList" placeholder="Type to search..." />
              <label className="text-white" htmlFor="exampleDataList">วิชา</label>
              <datalist id="datalistOptions">
                <option value="Calculus 1" />
                <option value="General Physics 1" />
              </datalist>
            </div>
          </div>
          <div className="col">
            <div className="form-floating">
              <input className="form-control bg-dark text-white" id="midtermScore" placeholder="Password" />
              <label className="text-white" htmlFor="midtermScore">คะแนนมิดเทอมของวิชานี้</label>
            </div>
          </div>
        </div>
      </div >
      <div className="container my-auto" style={{ paddingTop: '4em', paddingBottom: '3.5em' }}>
        <div className="row justify-self-center align-items-center mx-auto">
          <div className="col-7 d-flex justify-content-center align-items-center text-center">
            <div className="row border-score">
              <h1 className="color-sd display-3 mb-0">คุณมีโอกาสได้ <span className="fw-bold">F</span>...</h1>
              <h1 className="color-pm fw-bold mb-0" style={{ fontSize: 169 }} id="getting0Probability">...%</h1>
              <h1 className="color-sd display-3 fw-bold mb-0 display" id="motivation">และเกรดที่ออกคือ...</h1>
            </div>
          </div>
          <div className="col justify-content-center text-center my-auto">
            <div className="row d-flex mx-auto my-3 w-60 rounded-4 bg-gray" id="bg-pred4">
              <div className="col-12">
                <div className="d-flex">
                  <div className='w-100 border-score'>
                    <h1 className="my-1">A</h1>
                  </div>
                  <div className='w-100'>
                    <h1 className="my-1" id="getting4Probability">...%</h1>
                  </div>
                </div>
              </div>
            </div>
            <div className="row d-flex mx-auto my-3 w-60 rounded-4 bg-gray" id="bg-pred3">
              <div className="col-12">
                <div className="d-flex">
                  <div className='w-100 border-score'>
                    <h1 className="my-1">B</h1>
                  </div>
                  <div className='w-100'>
                    <h1 className="my-1" id="getting3Probability">...%</h1>
                  </div>
                </div>
              </div>
            </div>
            <div className="row d-flex mx-auto my-3 w-60 rounded-4 bg-gray" id="bg-pred2">
              <div className="col-12">
                <div className="d-flex">
                  <div className='w-100 border-score'>
                    <h1 className="my-1">C</h1>
                  </div>
                  <div className='w-100'>
                    <h1 className="my-1" id="getting2Probability">...%</h1>
                  </div>
                </div>
              </div>
            </div>
            <div className="row d-flex mx-auto my-3 w-60 rounded-4 bg-gray" id="bg-pred1">
              <div className="col-12">
                <div className="d-flex">
                  <div className='w-100 border-score'>
                    <h1 className="my-1">D</h1>
                  </div>
                  <div className='w-100'>
                    <h1 className="my-1" id="getting1Probability">...%</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div >
    </>
  )
}

export default ScorePrediction
