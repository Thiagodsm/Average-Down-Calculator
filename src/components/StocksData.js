import React, {useState, useEffect} from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';


function StocksData() {

    const[paa, setPaa] = useState('');
    const[pmd, setPmd] = useState('');
    const[pma, setPma] = useState('');
    const[vti, setVti] = useState('');
    const[qtd, setQtd] = useState('');


    function handleSaveStockData(){
        let price = 70, quantity = 99;
        console.log("aqui");
        if (paa && ((pma && vti) || (pma && qtd) || (vti && qtd))) 
        {
            if (pma && vti) {
                console.log("1");
                setQtd(vti/pma);
                quantity = qtd*((pma-pmd)/(pma-paa));
                price = quantity*paa;
            } else if (pma && qtd) {
                console.log("2");
                setVti(pma*qtd);
                quantity = qtd*((pma-pmd)/(pma-paa));
                price = quantity*paa;
            } else if (vti && qtd) {
                console.log("3");
                setPma(vti/qtd);
                quantity = qtd*((pma-pmd)/(pma-paa));
                price = quantity*paa;
            } else{
                price = 0;
                quantity = 0;
            }
        } else {
            console.log("Erro");
        }

        const data = {
            paa, pmd, pma, vti, qtd, price, quantity
        }
        console.log(data);
    }

    return (
        <Form style={{ width: '100%', height:'100%'}}>
        <Form.Group className="mb-3" controlId="formStockData">

        <Form.Label>Preço médio deseja (PMD)*</Form.Label>
            <InputGroup className="mb-3">
                <InputGroup.Text>R$</InputGroup.Text>
                <Form.Control type='number' placeholder="Insira o preço médio desejado (PMD)" value={pmd} onChange={e => setPmd(e.target.value)} required/>
            </InputGroup>

            <Form.Label>Preço atual do ativo (PAA)*</Form.Label>
            <InputGroup className="mb-3">
                <InputGroup.Text>R$</InputGroup.Text>
                <Form.Control type='number' placeholder="Insira o preço atual do ativo (PAA)" value={paa} onChange={e => setPaa(e.target.value)} required/>
            </InputGroup>

            <h6 style={{'textAlign':'center'}}>Preencha 2 dos 3 campos abaixo</h6>
            
            <Form.Label>Preço médio atual (PMA)</Form.Label>
            <InputGroup className="mb-3">
                <InputGroup.Text>R$</InputGroup.Text>
                <Form.Control type='number' placeholder="Insira o preço médio atual (PMA)" value={pma} onChange={e => setPma(e.target.value)}/>
            </InputGroup>

            <Form.Label>Valor total investido (VTI)</Form.Label>
            <InputGroup className="mb-3">
                <InputGroup.Text>R$</InputGroup.Text>
                <Form.Control type='number' placeholder="Insira valor total investido (VTI)" value={vti} onChange={e => setVti(e.target.value)}/>
            </InputGroup>

            <Form.Label>Quantidade (Qtd)</Form.Label>    
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