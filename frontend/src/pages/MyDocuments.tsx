import Row from 'react-bootstrap/Row';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col'

import Modal from "../components/Modal";
import DocumentList from "../components/DocumentList";

const MyDocumentsPage = () => {
  return (
    <div className="container" style={{ marginTop: "5em" }}>
      <Modal />
      <h1 className="display-5 fw-bold">เอกสารของฉัน</h1>
      <br />
      <Row xs={1} md={2} lg={5} className="g-4 px-auto mx-auto">
        <Col className="d-flex px-4">
          <Card className="w-100 shadowdrop-l border-0 rounded-0 p-3 d-flex">
            <a className="w-100 text-decoration-none text-dark justify-content-center " aria-label="add" data-bs-toggle="modal" data-bs-target="#docSelector" href="">
              <h4 className="card-title text-center fw-bold mb-3">สร้างเอกสาร</h4>
              <Card.Text className="mb-1 d-flex h-100 justify-content-center align-items-center text-center">
                <i className="fa-solid fa-plus fw-light" style={{ fontSize: 69, width: "30%" }}></i>
              </Card.Text>
            </a>
          </Card>
        </Col >
        <DocumentList />
      </Row>

    </div>
  );
}

export default MyDocumentsPage;
