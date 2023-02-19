import React, {Component} from 'react';
import './App.css';
import Row  from 'react-bootstrap/Row';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavScroll from './components/NavScroll';


/*-- APIUtils --*/
import api from './api/APIUtils';
import StockCard from './components/StockCard';
import { Container } from 'react-bootstrap';
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
          <Container>
          Home
          </Container>
          <Container>
            Calculadora
          </Container>
          <Container>
            Sobre
          </Container>
          <Container>
            Contato
          </Container>
          <Container>
            <Row >
              {/*<StockCard></StockCard>
              <StockCard></StockCard>
              <StockCard></StockCard>
              <StockCard></StockCard>
              <StockCard></StockCard>
              <StockCard></StockCard>
              <StockCard></StockCard>
    <StockCard></StockCard>*/}
            </Row>
          </Container>
        </NavScroll>
      </div>
    );
  }
}

export default App;
