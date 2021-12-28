import MainCard from "./Components/Card.js";
import Navigator from "./Components/Navbar.js";
import { Container, Row, Col } from 'react-bootstrap';
import './Styles/home.css';

function App() {
  return (
    <Container fluid style={{ padding: 0 }}>
      <Row>
        <Col>
          <Navigator></Navigator>
        </Col>
      </Row>
      <Row style={{ justifyContent: 'center' }}>
        <MainCard></MainCard>
      </Row>
    </Container>
  );
}

export default App;
