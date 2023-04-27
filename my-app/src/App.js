import Container from 'react-bootstrap/Container';
import './App.css';

//data.js import
import Data from './Data';

//Navbar bootstrap import
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useEffect, useState } from 'react';

import { Route, Routes, useNavigate } from 'react-router-dom';
import Main from './pages/Main';
import Detail from './pages/Detail';
import Cart from './pages/Cart';

// import About from './pages/About';
// import 'bootstrap/dist/css/bootstrap.min.css';
// bootstrap 사이트에서 이import로 안해주면 오류생김
//인라인 img import하는 법
// import 이름작성 from "./img/BredList.jpg";

// useEffect(() => {
//   let a = setTimeout(() => {
//     setAlert(false);
//   }, 5000);
//   console.log('setTimeout');
//   return () => {
//     //여기 코드는 useEffect 동작하기전에  실행됨
//     console.log('clearTimeout');
//     clearTimeout(a);
//   };
// }); //[] 처음 마운트 될때 1회만 동작

function App() {
  //이거로 에러 해결
  //원인 추측은 localStorage.setItem('watched', JSON.stringify([])); 값이 초반에 입력이 안돼어서??..

  let a = setTimeout(() => {
    localStorage.setItem('watched', JSON.stringify([]));
  }, 1);
  clearTimeout(a);

  useEffect(() => {
    //if문으로 detail페이지 갔다가 홈으로 오면 localstorage 초기화 되는거 막음
    if (localStorage.watched.length <= 2) {
      //콘솔 홈화면 localStorage 콘솔로 찍어서 2나옴
      //2보다 작거나같으면 로컬 빈배열 저장
      return localStorage.setItem('watched', JSON.stringify([]));
    }
    //아니면 저장된 로컬 가져옴
    localStorage.getItem('watched');

    // console.log(localStorage.getItem('watched')); //[1]출력됨
  }, []);
  //====================최근본 항목 작업중===================================
  let watched = localStorage.getItem('watched');
  watched = JSON.parse(watched);

  // console.log(watched); //[1]출력
  // let watchedList = watched.map((list) => {
  //   return list;
  // });

  // console.log(watched[0]); //1출력// 이걸 이미지에 끼워 넣으면 최근 본 항목 만들기 가능?
  //====================최근본 항목 작업중===================================

  const road = process.env.PUBLIC_URL;

  const [shoes, setShoes] = useState(Data);
  const navigate = useNavigate();

  return (
    <div className="App">
      <Navbar bg="light" variant="light" className="navbar">
        <Container>
          <Navbar.Brand href="#home">코팡</Navbar.Brand>
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
                navigate('/detail/1');
              }}
            >
              상세페이지
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                navigate('/cart');
              }}
            >
              장바구니
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <div className="watchedList">
        {watched.map((list, i) => {
          console.log(list);
          // i 값은 0,1,2
          //list = 객체 형식으로 012 순회
          return (
            <div key={i}>
              <img src={`${road}/assets/${list}.jpg`} alt="지금본 상품" />
            </div>
          );
        })}
      </div>
      <Routes>
        <Route path="/" element={<Main shoes={shoes} setShoes={setShoes} />} />
        <Route path="/detail/:id" element={<Detail shoes={shoes} />} />

        {/* <Route path="/about" element={<About />}>
          <Route path="member" element={<div>member</div>} />
          <Route path="location" element={<div>location</div>} />
        </Route> */}
        {/* path="*" 별표시는 Route path 정해놓은것 왜에는 무조건 아래 글로 404예외처리 */}
        {/* <Route path="*" element={<div>잘 생각해바.. 입력 바르게 했나..</div>} /> */}
        {/* <Route path="/about" element={<div>about 페이지</div>} /> */}
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
