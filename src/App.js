import React, {Component} from 'react';
import './App.css';
import Row  from 'react-bootstrap/Row';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavScroll from './components/NavScroll';


/*-- APIUtils --*/
import api from './api/APIUtils';
import StockCard from './components/StockCard';
import { Col, Container } from 'react-bootstrap';
import StocksData from './components/StocksData';
import SearchStock from './components/SearchStock';
/*-- APIUtils --*/

class App extends Component{

  state = {
    data:[],
  }

  async componentDidMount(){
    const response = await api.getQuote();

    //console.log(response.data);
    this.setState({data: response.data});
  };
  
  render(){
    return (
      <div className="App">
        <NavScroll>
          <Container id='home'>
          Home
          </Container>
          <Container id='calculator'>
            <h4>Calculadora</h4>
            <Row>
              <Col xs={12} sm={12} md={6}>
                <SearchStock />
                <StockCard />
              </Col>
              <Col xs={12} sm={12} md={6}>
                <h6>Preencha 2 dos 3 campos abaixo</h6>
                <StocksData />
              </Col>
            </Row>
          </Container>
          <Container id='contact'>
            <h4>Contato</h4>
          </Container>
        </NavScroll>
      </div>
    );
  }
}

export default App;
