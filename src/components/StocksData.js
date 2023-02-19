import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function StocksData() {
  return (
    <Form style={{ width: '100%', height:'100%'}}>
      <Form.Group className="mb-3" controlId="formStockData">
        <Form.Label>Preço médio atual (PMA)</Form.Label>
        <Form.Control type="number" placeholder="Insira o preço médio atual (PMA)" />
        <Form.Label>Total investido (TI)</Form.Label>
        <Form.Control type="number" placeholder="Insira valor total investido (TI)" />
        <Form.Label>Insira a quantidade</Form.Label>
        <Form.Control type="number" placeholder="Insira a quantiadade (Qtd)" />
        <Form.Label>Preço médio desejado (PMD)</Form.Label>
        <Form.Control type="number" placeholder="Insira o preço médio desejado (PMD)" />

        <Form.Text className="text-muted">Dados necessários para realizar os calculos.</Form.Text>

      </Form.Group>
      <Button variant="primary" type="submit">
        Calcular
      </Button>
    </Form>
  );
}

export default StocksData;