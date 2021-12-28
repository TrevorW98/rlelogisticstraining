import MainCard from "./Components/Card.js";
import './Styles/home.css';
import { Container, Row, Col } from 'react-bootstrap';

function App() {
  return (
    <Container fluid>
      <Row>
        <Col>
          <MainCard />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
