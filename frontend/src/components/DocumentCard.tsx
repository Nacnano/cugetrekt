import { Link } from "react-router-dom";

import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import { DocumentDto } from "../types/dto";
import { api } from "../utils/axios";
import { useNavigate } from "react-router-dom";

export default function DocumentCard(props: DocumentDto) {
  const { docsType, docsName, lastEdit, course1, course2, course3, id } = props;

  // console.log(lastEdit)
  // const day = lastEdit.split("/")[0]
  // const month = lastEdit.split("/")[1]
  // const year = lastEdit.split("/")[2].slice(0, 4)

  let navigate = useNavigate();

  async function deletedoc() {
    if (docsType == 0) {
      const res = await api.delete(`/mydocuments/withdrawal/${id}`);
    } else {
      const res = await api.delete(`/mydocuments/resignation/${id}`);
    }
    window.location.reload();
  }

  async function editdoc() {
    if (docsType == 0) {
      navigate(`/mydocuments/withdrawal/${id}`);
    } else {
      navigate(`/mydocuments/resignation/${id}`);
    }
  }
  function checkType() {
    if (docsType === 0) {
      return (
        <p className="text-truncate">
          ประเภท : ใบถอน
          <br />
          วิชาแรก: {course1}
          <br />
          วิชาที่สอง : {course2}
          <br />
          วิชาที่สาม : {course3}
        </p>
      );
    } else if (docsType === 1) {
      return <p className="text-truncate">ประเภท : ใบลาออก</p>;
    } else {
      return "เกิดข้อผิดพลาด";
    }
  }

  return (
    <Col className="px-4" style={{ height: 250 }}>
      <Card
        className="shadowdrop-l border-0 rounded-0 p-3"
        style={{ height: 275 }}
      >
        <h4 className="card-title fw-bold">
          {docsName ? docsName : "Untitled"}{" "}
        </h4>
        <Card.Text className="text-muted mb-0">{checkType()}</Card.Text>
        <div className="container mt-auto">
          <div className="row">
            <p
              className="text-muted ps-0 pb-2"
              style={{ fontSize: 13, marginBottom: 0 }}
            >
              แก้ไขล่าสุด: {lastEdit.slice(0, 10)}
              <br />
            </p>
            <div className="col px-0 d-flex align-text-center text-center">
              <a className="btn btn-danger" onClick={editdoc}>
                แก้ไข
              </a>
              <a
                className="btn ms-auto px-auto del text-center"
                onClick={deletedoc}
              >
                ลบเอกสาร
              </a>
            </div>
          </div>
        </div>
      </Card>
    </Col>
  );
}
