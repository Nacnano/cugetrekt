import Row from 'react-bootstrap/Row'
import Fab from '@mui/material/Fab'
import AddIcon from '@mui/icons-material/Add'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'

import Modal from '../components/Modal'

import { useAuth } from '../Providers/AuthProvider'
import useDocumentList from '../hooks/useDocumentList'
import DocumentCard from '../components/DocumentCard'
import Loading from '../components/Loading'
import Error from '../components/Error'

const MyDocumentsPage = () => {
  const { isLoggedIn } = useAuth()
  // const { loading, error, documents } = useDocumentList()
  let { loading, error, documents } = useDocumentList()

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
    <div className="container" style={{ marginTop: '5em' }}>
      {!isLoggedIn ? (
        <Error message="Please Login First" />
      ) : loading ? (
        <Loading />
      ) : error ? (
        <Error />
      ) : (
        <>
          <Modal />
          <h1 className="display-5 fw-bold">เอกสารของฉัน</h1>
          <br />
          <Row xs={1} md={2} lg={5} className="g-4 px-auto mx-auto">
            <Col className="d-flex px-4">
              <Card className="w-100 shadowdrop-l border-0 rounded-0 p-3 d-flex">
                <a
                  className="w-100 text-decoration-none text-dark justify-content-center "
                  aria-label="add"
                  data-bs-toggle="modal"
                  data-bs-target="#docSelector"
                  href=""
                >
                  <h4 className="card-title text-center fw-bold mb-3">
                    สร้างเอกสาร
                  </h4>
                  <Card.Text className="mb-1 d-flex h-100 justify-content-center align-items-center text-center">
                    <i
                      className="fa-solid fa-plus fw-light"
                      style={{ fontSize: 69, width: '30%' }}
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
  )
}

export default MyDocumentsPage
