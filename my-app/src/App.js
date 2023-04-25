import Container from 'react-bootstrap/Container';
import './App.css';

//data.js import
import data from './data';

//Navbar bootstrap import
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useState } from 'react';

import { Route, Routes, useNavigate } from 'react-router-dom';
import Main from './pages/Main';
import Detail from './pages/Detail';
import ProductList from './components/ProductList';
// import About from './pages/About';
// import 'bootstrap/dist/css/bootstrap.min.css';
// bootstrap 사이트에서 이import로 안해주면 오류생김
//인라인 img import하는 법
// import 이름작성 from "./img/BredList.jpg";

function App() {
  // const road = process.env.PUBLIC_URL;

  const [shoes] = useState(data);
  const navigate = useNavigate();

  return (
    <div className="App">
      <Navbar bg="light" variant="light" className="navbar">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          {/* 인라인으로 img 넣는 법 */}
          {/* <div style={{ backgroundImage : `url('${작명}')`}}></div> */}
          <Nav className="me-auto">
            <Nav.Link
              onClick={() => {
                navigate('/');
              }}
            >
              홈
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                navigate('/detail/');
              }}
            >
              상세페이지
            </Nav.Link>
            {/* <Nav.Link href="#pricing">Pricing</Nav.Link> */}
          </Nav>
        </Container>
      </Navbar>

      <Routes>
        <Route path="/" element={<Main shoes={shoes} />} />
        <Route path="/detail/:id" element={<Detail shoes={shoes} />} />

        {/* <Route path="/about" element={<About />}>
          <Route path="member" element={<div>member</div>} />
          <Route path="location" element={<div>location</div>} />
        </Route> */}
        {/* path="*" 별표시는 Route path 정해놓은것 왜에는 무조건 아래 글로 404예외처리 */}
        {/* <Route path="*" element={<div>잘 생각해바.. 입력 바르게 했나..</div>} /> */}
        {/* <Route path="/about" element={<div>about 페이지</div>} /> */}
      </Routes>
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
