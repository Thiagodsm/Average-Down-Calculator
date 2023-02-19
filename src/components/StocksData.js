import React, {useState, useEffect} from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';


function StocksData() {

    const[pmd, setPmd] = useState('');
    const[pma, setPma] = useState('');
    const[vti, setVti] = useState('');
    const[qtd, setQtd] = useState('');


    function handleSaveStockData(){
        let price = 70, quantity = 99;
        console.log("aqui");
        if (pmd &&((pma && vti) || (pma && qtd) || (vti && qtd))) {
            if (pma && vti) {
                console.log("1");
                setQtd(vti/pma);
            } else if (pma && qtd) {
                console.log("2");
                setVti(pma*qtd);
            } else if (vti && qtd) {
                console.log("3");
                setPma(vti/qtd);
            } else{
                console.log("4");
            }
        } else {
            console.log("5");
        }

        const data = {
            pmd, pma, vti, qtd, price, quantity
        }
        console.log(data);
    }

    return (
        <Form style={{ width: '100%', height:'100%'}}>
        <Form.Group className="mb-3" controlId="formStockData">

            <Form.Label>Preço médio desejado (PMD)</Form.Label>
            <InputGroup className="mb-3">
                <InputGroup.Text>R$</InputGroup.Text>
                <Form.Control type='number' placeholder="Insira o preço médio desejado (PMD)" value={pmd} onChange={e => setPmd(e.target.value)} required/>
            </InputGroup>

            <h6 style={{'textAlign':'center'}}>Preencha 2 dos 3 campos abaixo</h6>
            
            <Form.Label>Preço médio atual (PMA)</Form.Label>
            <InputGroup className="mb-3">
                <InputGroup.Text>R$</InputGroup.Text>
                <Form.Control type='number' placeholder="Insira o preço médio atual (PMA)" value={pma} onChange={e => setPma(e.target.value)}/>
            </InputGroup>

            <Form.Label>Valot total investido (VTI)</Form.Label>
            <InputGroup className="mb-3">
                <InputGroup.Text>R$</InputGroup.Text>
                <Form.Control type='number' placeholder="Insira valor total investido (VTI)" value={vti} onChange={e => setVti(e.target.value)}/>
            </InputGroup>

            <Form.Label>Insira a quantidade</Form.Label>    
            <InputGroup className="mb-3">
                <InputGroup.Text>R$</InputGroup.Text>
                <Form.Control type='number' placeholder="Insira a quantiadade (Qtd)" value={qtd} onChange={e => setQtd(e.target.value)} />
            </InputGroup>


            <Form.Text className="text-muted">Dados necessários para realizar os calculos.</Form.Text>

        </Form.Group>
        <Button variant="primary" type="submit" onClick={handleSaveStockData}>
            Calcular
        </Button>
        </Form>
    );
}

export default StocksData;