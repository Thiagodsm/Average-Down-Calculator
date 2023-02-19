import Card from 'react-bootstrap/Card';

function StockCardResult(props) {
  //console.log('result: ' + results);
  return (
    <Card className='mb-3 me-3' style={{ width: '100%', height:'100%'}}>
      <Card.Body>
        <Card.Title>Para alcançar o preço médio desejado (PMD) será necessário comprar R$ {props.price} reais ou {props.quantity} unidades do ativos em questão</Card.Title>
        <Card.Subtitle className="mb-3 mt-2 text-muted">Resultado</Card.Subtitle>
        <Card.Text>
          Você está acumulando um lucro/perda de 34% neste ativo. 
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default StockCardResult;