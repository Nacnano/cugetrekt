import { Link, Navigate } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import { Modal } from "react-bootstrap";
import { useState } from "react";
import { useAuth } from "../Providers/AuthProvider";
import useDocumentList from "../hooks/useDocumentList";
import DocumentCard from "../components/DocumentCard";
import Loading from "../components/Loading";
import Error from "../components/Error";
import { api } from "../utils/axios";
import { useNavigate } from "react-router-dom";
import toast from 'react-hot-toast';

async function getID(doctype: any) {
  const res = await api.get("/mydocuments", doctype);
  return res;
  // get id of doc
}

const MyDocumentsPage = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const { isLoggedIn } = useAuth();
  // const { loading, error, documents } = useDocumentList()
  let { loading, error, documents } = useDocumentList();
  loading = false;
  error = false;
  let navigate = useNavigate();

  async function postwithdrawal() {
    // in progress

    let e = 8; //getID(1) //(1 : withdrawal)
    try {
      const res = await api.post(`/mydocuments/withdrawal/${e}`);
      setShow(false);
      navigate(`/mydocuments/withdrawal/${e}`);
    } catch (err) {
      toast.error("Something went wrong");
    }
  }
  async function postresignation() {
    // in progress
    let e = 69; //getID(1) //(1 : withdrawal)
    try {
      const res = api.post(`/mydocuments/resignation/${e}`);
      setShow(false);
      navigate(`/mydocuments/resignation/${e}`);
    } catch (err) {
      toast.error("Something went wrong");
    }
  }

  
  //assume id from api
  let id = (documents = [
    {
      id: 1,
      docType: 0,
      name: "Withdraw01",
      day: 20,
      month: 10,
      year: 2022,
      subject_1: "Calculus 1",
      subject_2: "Calculus 2",
    },
    {
      id: 2,
      docType: 1,
      name: "Resign01",
      day: 2,
      month: 10,
      year: 2022,
      subject_1: "Calculus 1",
      subject_2: "Calculus 2",
    },
    {
      id: 3,
      docType: 0,
      name: "WithWithEz",
      day: 1,
      month: 8,
      year: 2022,
      subject_1: "Calculus 1",
      subject_2: "Calculus 2",
    },
    {
      id: 4,
      docType: 1,
      name: "JustGetOut",
      day: 20,
      month: 10,
      year: 1980,
      subject_1: "Calculus 1",
      subject_2: "Calculus 2",
    },
    {
      id: 5,
      docType: 1,
      name: "ByeBye",
      day: 20,
      month: 10,
      year: 1999,
      subject_1: "Calculus 1",
      subject_2: "Calculus 2",
    },
    {
      id: 6,
      docType: 0,
      name: "GetRekt",
      day: 20,
      month: 10,
      year: 1999,
      subject_1: "Calculus 1",
      subject_2: "Calculus 2",
    },
    {
      id: 7,
      docType: 1,
      name: "CULater",
      day: 20,
      month: 10,
      year: 1999,
      subject_1: "Calculus 1",
      subject_2: "Calculus 2",
    },
  ]);

  return (
    <div className="container" style={{ marginTop: "5em" }}>
      <script
        src="https://kit.fontawesome.com/cf824f24b5.js"
        crossOrigin="anonymous"
      ></script>
      {!isLoggedIn ? (
        <Error message="Please Login First" />
      ) : loading ? (
        <Loading />
      ) : error ? (
        <Error />
      ) : (
        <>
          <Modal
            className="fade modal-xl"
            id="docSelector"
            show={show}
            centered
          >
            <div className="modal-content">
              <Modal.Header className="mb-3">
                <button
                  type="button"
                  className="btn-close"
                  onClick={handleClose}
                ></button>
              </Modal.Header>
              <h1 className="text-center">เลือกเอกสารที่ต้องการกรอก</h1>
              <div className="modal-body">
                <div className="row">
                  <div className="col">
                    <div
                      // to="/mydocuments/Withdrawal/:id"
                      className="text-decoration-none text-dark"
                      // onClick={handleClose}
                      onClick={postwithdrawal}
                    >
                      <div
                        className="card btn-to-sd"
                        style={{ borderColor: "var(--sd)", borderWidth: 2 }}
                      >
                        <div className="card-body">
                          <div className="row d-flex flex-wrap align-items-center">
                            <div className="col-3 text-center">
                              <i className="display-1 fa-regular fa-circle-down"></i>
                            </div>
                            <div className="col">
                              <h1 className="card-title fw-bold">ใบถอน</h1>
                              <p className="card-text" style={{ fontSize: 18 }}>
                                เหมาะสำหรับนิสิตที่ทำคะแนนได้ไม่ดี
                                แล้วคิดว่าจะลงใหม่ในเทอมถัดไปเพื่อแก้ไขคะแนนให้ดีขึ้น
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div
                      // to="/mydocuments/Resignation/:id"
                      className="text-decoration-none text-dark"
                      // onClick={handleClose}
                      onClick={postresignation}
                    >
                      <div
                        className="card btn-to-pm"
                        style={{ borderColor: "var(--pm)", borderWidth: 2 }}
                      >
                        <div className="card-body">
                          <div className="row d-flex flex-wrap align-items-center">
                            <div className="col-3  text-center">
                              <i className="display-1 fa-solid fa-person-running"></i>
                            </div>
                            <div className="col">
                              <h1 className="card-title fw-bold">ลาออก</h1>
                              <p className="card-text" style={{ fontSize: 18 }}>
                                เหมาะสำหรับนิสิตที่ต้องการจะลาออก เพื่อซิ่ว
                                หรือต้องการเริ่มต้นชีวิตมหาวิทยาลัยใหม่อีกครั้ง
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Modal>
          <h1 className="display-5 fw-bold">เอกสารของฉัน</h1>
          <br />
          <Row xs={1} md={2} lg={5} className="g-4 px-auto mx-auto">
            <Col className="d-flex px-4" style={{ height: 250 }}>
              <Card className="w-100 shadowdrop-l border-0 rounded-0 p-3 d-flex">
                <a
                  className="pointer-on-hover w-100 text-decoration-none text-dark justify-content-center "
                  aria-label="add"
                  onClick={handleShow}
                >
                  <h4 className="card-title text-center fw-bold mb-3">
                    สร้างเอกสาร
                  </h4>
                  <Card.Text className="mb-1 d-flex h-100 justify-content-center align-items-center text-center">
                    <i
                      className="fa-solid fa-plus fw-light"
                      style={{ fontSize: 69, width: "30%" }}
                    ></i>
                  </Card.Text>
                </a>
              </Card>
            </Col>
            <>
              {documents.map((docs) => (
                <DocumentCard key={docs.id} {...docs} />
              ))}
            </>
          </Row>
        </>
      )}
    </div>
  );
};

export default MyDocumentsPage;
