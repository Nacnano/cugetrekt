import Row from 'react-bootstrap/Row';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';

import Modal from "../components/Modal";
import DocumentList from "../components/DocumentList";

const MyDocumentsPage = () => {
  return (
    <div className="container" style={{ marginTop: "5em" }}>
      <Modal />
      <h1 className="fw-bold">My Documents</h1>
      <hr className="line" />
      <Row xs={1} md={2} lg={4} className="g-4">
        <DocumentList />
      </Row>
      <Fab className="bg-pm" data-bs-toggle="modal" data-bs-target="#docSelector" style={{ position: "fixed", bottom: 20, right: 20 }} color="primary" aria-label="add">
        <AddIcon />
      </Fab>

    </div>
  );
}

export default MyDocumentsPage;
