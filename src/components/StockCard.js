import { Col, Row } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';

function StockCard() {
  return (
    <Card className='mb- me-3' style={{ width: '100%', height:'100%'}}>
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
      </Card.Body>
    </Card>
  );
}

export default StockCard;