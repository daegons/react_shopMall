import { useEffect, useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import './App.css';
import { useQuery } from 'react-query';
import axios from 'axios';
//data.js import
import Data from './Data';
//Navbar bootstrap import
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

import Main from './pages/Main';
import Detail from './pages/Detail';
import Cart from './pages/Cart';

//성능 개선 lazy로 메인페이지에서 안보여줘도 되는 페이지 따로 만듬
// const Cart = lazy(() => import('./pages/Cart'));
// const Detail = lazy(() => import('./pages/Detail'));

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
  let get_local = JSON.parse(localStorage.getItem('watched'));
  //원인 추측은 localStorage.setItem('watched', JSON.stringify([])); 값이 초반에 입력이 안돼어서??..
  //if문으로 detail페이지 갔다가 홈으로 오면 localstorage 초기화 되는거 막음
  // if (localStorage.watched.length < 1) {
  useEffect(() => {
    if (get_local === null) {
      localStorage.setItem('watched', JSON.stringify([]));
    }
  }, []);
  //====================최근본 항목 작업중===================================
  // let watched = localStorage.getItem("watched");
  // watched = JSON.parse(watched);
  // console.log(localStorage.length);

  // console.log(watched); //[1]출력
  // let watchedList = watched.map((list) => {
  //   return list;
  // });

  // console.log(watched[0]); //1출력// 이걸 이미지에 끼워 넣으면 최근 본 항목 만들기 가능?
  //====================최근본 항목 작업중===================================

  const road = process.env.PUBLIC_URL;

  const [shoes, setShoes] = useState(Data);
  const navigate = useNavigate();
  //==================axios 버전=======================
  //유저 api 데이터 가져와서 우측 상단 출력
  // axios
  //   .get(
  //     "https://raw.githubusercontent.com/daegons/react_shopMall/main/userData.json"
  //   )
  //   .then((res) => {
  //     console.log(res.data);
  //   });

  //====================React Query버전=====================
  //React Query사용시
  //장점1. 성공/실패/로딩 쉽게 파악 가능
  //자주 데이터 재요청 해줌(refetch)
  let result = useQuery('작명', () => {
    return axios
      .get(
        'https://raw.githubusercontent.com/daegons/react_shopMall/main/userData.json'
      )
      .then((res) => {
        // console.log('요청됨', res.data.name); //다른페이지 넘어갔다가 다시오면 또 요청
        return res.data;
      });
  });
  // console.log(result.data);
  // console.log(result.isLoading);
  // console.log(result.error);

  return (
    <div className="App">
      <Navbar bg="light" variant="light" className="navbar">
        <Container>
          <Navbar.Brand>메인로고</Navbar.Brand>
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
            {/* <Nav.Link
              onClick={() => {
                navigate("/detail/1");
              }}
            >
              상세페이지
            </Nav.Link> */}
            <Nav.Link
              onClick={() => {
                navigate('/cart');
              }}
            >
              장바구니
            </Nav.Link>
          </Nav>
          <Nav className="ms-auto">
            {result.isLoading && '로딩중..'}
            {result.error && '에러....'}
            {result.data && `${result.data.name} 님 접속중..`}
          </Nav>
        </Container>
      </Navbar>
      <div className="watchedList">
        {get_local !== null
          ? get_local.map((a, i) => {
              return (
                <div key={i}>
                  <img
                    src={`${road}/assets/${a}.jpg`}
                    alt="상품 이미지"
                    width="80%"
                  />
                </div>
              );
            })
          : null}
        <button
          onClick={() => {
            localStorage.removeItem('watched');
            window.location.replace('/');
          }}
        >
          지우기
        </button>
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
