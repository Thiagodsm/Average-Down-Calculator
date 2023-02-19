import Card from 'react-bootstrap/Card';

function StockCard() {
  return (
    <Card className='mb-3 me-3' style={{ width: '100%'}}>
      <Card.Body>
        <Card.Title>BBDC3 - BRADESCO ON</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">12,21 BRL</Card.Subtitle>
        <Card.Text>
          Máxima e minima do dia R$ 12.26 - R$ 12.07
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default StockCard;