import Container from "react-bootstrap/Container";
import "./App.css";

//data.js import
import data from "./data";

//Navbar bootstrap import
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useState } from "react";
//components
import ProductList from "./components/ProductList";
// import 'bootstrap/dist/css/bootstrap.min.css';
// bootstrap 사이트에서 이import로 안해주면 오류생김
//인라인 img import하는 법
// import 이름작성 from "./img/BredList.jpg";

function App() {
  // const road = process.env.PUBLIC_URL;

  const [shoes] = useState(data);

  return (
    <div className="App">
      <Navbar bg="light" variant="light" className="navbar">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          {/* 인라인으로 img 넣는 법 */}
          {/* <div style={{ backgroundImage : `url('${작명}')`}}></div> */}
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <div className="main_img"></div>

      <div className="container">
        <div className="row">
          <ProductList shoes={shoes} />
        </div>
      </div>
    </div>
  );
}

export default App;
