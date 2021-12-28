import MainCard from "./Components/Card.js";
import Navigator from "./Components/Navbar.js";
import { Container, Row, Col } from 'react-bootstrap';
import './Styles/home.css';

function App() {
  return (
    <Container fluid className="noPadding">
      <Row>
        <Col>
          <Navigator></Navigator>
          <MainCard />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
