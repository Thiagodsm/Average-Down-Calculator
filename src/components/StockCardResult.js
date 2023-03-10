import Card from 'react-bootstrap/Card';

function StockCardResult(props) {
  //console.log('result: ' + results);
  return (
    <Card className='mb-3 me-3' style={{ width: '100%'}}>
      <Card.Body>
        <Card.Title>Para alcançar o preço médio desejado (PMD) será necessário comprar mais R$ {props.price} ou {props.quantity} unidades do ativos em questão</Card.Title>
        <Card.Subtitle className="mb-3 mt-2 text-muted">Resultado</Card.Subtitle>
        <Card.Text>
          Você está acumulando {(props.qtd*props.pma) > (props.qtd*props.paa) ? ' uma perda de -R$ ':' um lucro de R$ '} {(props.qtd*props.pma) > (props.qtd*props.paa) ? (props.qtd*props.pma)-(props.qtd*props.paa) : (props.qtd*props.paa)-(props.qtd*props.pma)} neste ativo.
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default StockCardResult;