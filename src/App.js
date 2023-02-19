import React, {Component} from 'react';
import './App.css';
import Row  from 'react-bootstrap/Row';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavScroll from './components/NavScroll';
import StockCard from './components/StockCard';
import { Col, Container } from 'react-bootstrap';
import StocksData from './components/StocksData';
import SearchStock from './components/SearchStock';
import StockCardResult from './components/StockCardResult';
//import api from './api/APIUtils';

class App extends Component{
  state = {
    price: 0,
    quantity: 0,
   }

handleCallback = (priceChild, quantityChild) =>{
    this.setState({price: priceChild, quantity: quantityChild});
}

  render(){
    //const{price, quantity} = this.state;
    return (
      <div className="App">
        <NavScroll>
          <Container id='home'>
          Home
          </Container>
          <Container id='calculator'>
            <h4>Calculadora</h4>
            <Row>
              <Col className='mb-3' xs={12} sm={12} md={6}>
                <StocksData parentCallback={this.handleCallback}/>
              </Col>
              <Col className='mb-3' xs={12} sm={12} md={6}>
                <SearchStock />
                <StockCard/>
              </Col>
            </Row>
            <Row className='mb-3'>
              <Col xs={12} sm={12} md={12}>
                <StockCardResult {...this.state}/>
              </Col>
            </Row>
          </Container>
        </NavScroll>
      </div>
    );
  }
}

export default App;
