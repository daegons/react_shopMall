import Container from "react-bootstrap/Container";
import "./App.css";

//data.js import
import Data from "./Data";

//Navbar bootstrap import
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useState } from "react";

import { Route, Routes, useNavigate } from "react-router-dom";
import Main from "./pages/Main";
import Detail from "./pages/Detail";
import axios from "axios";
// import About from './pages/About';
// import 'bootstrap/dist/css/bootstrap.min.css';
// bootstrap 사이트에서 이import로 안해주면 오류생김
//인라인 img import하는 법
// import 이름작성 from "./img/BredList.jpg";

function App() {
  // const road = process.env.PUBLIC_URL;

  // const getShoesData = () => {
  //   axios
  //     .get(
  //       "https://raw.githubusercontent.com/Stupidism/goat-sneakers/master/api.json"
  //     )
  //     .then((res) => {
  //       console.log(res.data);
  //     })
  //     .catch(() => {
  //       console.log("데이터가 없어유...");
  //     });
  // };

  const [shoes, setShoes] = useState(Data);
  // console.log(shoes);
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
                navigate("/");
              }}
            >
              홈
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                navigate("/detail/");
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
      <div className="axios_Btn">
        <button
          //엑시오스 설치 후
          //https://github.com/Stupidism/goat-sneakers/blob/master/api.json 깃 데이터 활용
          onClick={() => {
            axios
              .get("https://codingapple1.github.io/shop/data2.json")
              .then((res) => {
                console.log(res.data);
                console.log(shoes);
              })
              .catch(() => {
                console.log("데이터가 없어유...");
              });
          }}
        >
          Ajax
        </button>
      </div>
    </div>
  );
}

export default App;
