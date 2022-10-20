import {Link} from 'react-router-dom';

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
            <Card border="dark" style={{width: "16rem"}}>
                <Link to={`/${id}`}>
                    <Card.Img variant="top" src='./ChulaLogo.png' width='100' height='160' />
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        Opened {day} {month} {year}
                    </Card.Text>
                    <Button>Rename</Button>
                    <Button>Delete</Button>
                </Link>
            </Card>
        </Col>
    );
}
