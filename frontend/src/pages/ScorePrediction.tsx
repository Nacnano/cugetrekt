import { Link } from 'react-router-dom'
import Row from 'react-bootstrap/Row'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import { Modal } from 'react-bootstrap'
import { useState } from 'react';
import { useAuth } from '../Providers/AuthProvider'
import useDocumentList from '../hooks/useDocumentList'
import DocumentCard from '../components/DocumentCard'
import Loading from '../components/Loading'
import Error from '../components/Error'

const ScorePrediction = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const { isLoggedIn } = useAuth()
  // const { loading, error, documents } = useDocumentList()
  let { loading, error, documents } = useDocumentList()
  loading = false
  error = false

  documents = [
    { "id": 1, "docType": 0, "name": "Withdraw01", "day": 20, "month": 10, "year": 2022, "subject_1": "Calculus 1", "subject_2": "Calculus 2" },
    { "id": 2, "docType": 1, "name": "Resign01", "day": 2, "month": 10, "year": 2022, "subject_1": "Calculus 1", "subject_2": "Calculus 2" },
    { "id": 3, "docType": 0, "name": "WithWithEz", "day": 1, "month": 8, "year": 2022, "subject_1": "Calculus 1", "subject_2": "Calculus 2" },
    { "id": 4, "docType": 1, "name": "JustGetOut", "day": 20, "month": 10, "year": 1980, "subject_1": "Calculus 1", "subject_2": "Calculus 2" },
    { "id": 5, "docType": 1, "name": "ByeBye", "day": 20, "month": 10, "year": 1999, "subject_1": "Calculus 1", "subject_2": "Calculus 2" },
    { "id": 6, "docType": 0, "name": "GetRekt", "day": 20, "month": 10, "year": 1999, "subject_1": "Calculus 1", "subject_2": "Calculus 2" },
    { "id": 7, "docType": 1, "name": "CULater", "day": 20, "month": 10, "year": 1999, "subject_1": "Calculus 1", "subject_2": "Calculus 2" },
  ];

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
              <input className="form-control bg-dark text-white" id="floatingPassword" placeholder="Password" />
              <label className="text-white" htmlFor="floatingPassword">คะแนนมิดเทอมของวิชานี้</label>
            </div>
          </div>
        </div>
      </div >
      <div className="container my-auto" style={{ paddingTop: '4em', paddingBottom: '3.5em' }}>
        <div className="row justify-self-center align-items-center mx-auto">
          <div className="col-7 d-flex justify-content-center align-items-center text-center">
            <div className="row border-score">
              <h1 className="color-sd display-3 mb-0">คุณมีโอกาสได้ <span className="fw-bold">F</span>...</h1>
              <h1 className="color-pm fw-bold mb-0" style={{ fontSize: 169 }}>99%</h1>
              <h1 className="color-sd display-3 fw-bold mb-0">ลาออกเลยเหอะ!!</h1>
            </div>
          </div>
          <div className="col justify-content-center text-center my-auto">
            <div className="row d-flex mx-auto my-3 w-60 rounded-4 bg-gray">
              <div className="col-12">
                <div className="d-flex">
                  <div className='w-100 border-score'>
                    <h1 className="my-1">A</h1>
                  </div>
                  <div className='w-100'>
                    <h1 className="my-1">0 %</h1>
                  </div>
                </div>
              </div>
            </div>
            <div className="row d-flex mx-auto my-3 w-60 rounded-4 bg-gray">
              <div className="col-12">
                <div className="d-flex">
                  <div className='w-100 border-score'>
                    <h1 className="my-1">B</h1>
                  </div>
                  <div className='w-100'>
                    <h1 className="my-1">69 %</h1>
                  </div>
                </div>
              </div>
            </div>
            <div className="row d-flex mx-auto my-3 w-60 rounded-4 bg-gray">
              <div className="col-12">
                <div className="d-flex">
                  <div className='w-100 border-score'>
                    <h1 className="my-1">C</h1>
                  </div>
                  <div className='w-100'>
                    <h1 className="my-1">0 %</h1>
                  </div>
                </div>
              </div>
            </div>
            <div className="row d-flex mx-auto my-3 w-60 rounded-4 bg-lgreen">
              <div className="col-12">
                <div className="d-flex">
                  <div className='w-100 border-score'>
                    <h1 className="my-1">D</h1>
                  </div>
                  <div className='w-100'>
                    <h1 className="my-1">1 %</h1>
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
