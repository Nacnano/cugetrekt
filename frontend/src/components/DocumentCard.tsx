import { Link } from 'react-router-dom';

import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'

interface DocumentProps {
  id: number,
  name: string,
  day: number,
  month: number,
  year: number,
}

export default function DocCard(props: DocumentProps) {
  const { id, name, day, month, year } = props;

  return (
    <Col>
      <Card className="shadowdrop-l border-0 rounded-0 p-3" >
        <h4 className="card-title">{name}</h4>
        <Card.Text className="text-muted">
          แก้ไขล่าสุด: {day}/{month}/{year}
        </Card.Text>
        <div className="container">
          <div className="row">
            <div className="col d-flex align-text-center text-center">
              <a className="btn btn-danger">แก้ไข</a>
              <a className="btn ms-auto pe-0 del text-end">ลบเอกสาร</a>
            </div>
          </div>
        </div>
      </Card>
    </Col >
  );
}
