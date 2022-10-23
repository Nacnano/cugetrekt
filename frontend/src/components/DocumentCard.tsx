import { Link } from 'react-router-dom';

import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col'
import { DocumentDto } from '../types/dto';

export default function DocumentCard(props: DocumentDto) {
  const { docType, name, day, month, year, subject_1, subject_2 } = props;

  function checkType() {
    if (docType === 0) {
      return "ใบถอน";
    }
    else if (docType === 1) {
      return "ใบลาออก";
    }
    else {
      return "เกิดข้อผิดพลาด"
    }
  }

  return (
    <Col className="px-4" style={{ height: 250 }}>
      <Card className="shadowdrop-l border-0 rounded-0 p-3" style={{ height: 250 }}>
        <h4 className="card-title fw-bold">{name}</h4>
        <Card.Text className="text-muted mb-1">
          <p className="text-truncate">
            ประเภท : {checkType()}<br />
            วิชาแรก: {subject_1}<br />
            วิชาที่สอง : {subject_2}
          </p>
        </Card.Text>
        <div className="container mt-auto">
          <div className="row">
            <p className="text-muted ps-0 pb-2" style={{ fontSize: 13, marginBottom: 0 }}>
              แก้ไขล่าสุด: {day}/{month}/{year}<br />
            </p>
            <div className="col px-0 d-flex align-text-center text-center">
              <a className="btn btn-danger">แก้ไข</a>
              <a className="btn ms-auto pe-0 del text-end">ลบเอกสาร</a>
            </div>
          </div>
        </div>
      </Card>
    </Col >
  );
}
