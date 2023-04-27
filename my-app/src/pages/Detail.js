// import "./Detail.css";
import { useEffect, useState } from "react";
import { Nav } from "react-bootstrap";
import { useParams } from "react-router-dom";

// const Btn = styled.button`
//   // 문법이라기보단 그냥 사용법
//   background: ${(props) => props.bg};
//   color: ${(props) => props.color};
//   padding: 10px;
//   border-radius: 5px;
// `;

const Detail = (props) => {
  const road = process.env.PUBLIC_URL;
  const { id } = useParams();
  //parseInt로 id 입력시 숫자로 처리하므로써 ===강력 비교 성공
  // return list.id === parseInt(id);
  const findShoes = props.shoes.find((list) => list.id == id);

  const [alert, setAlert] = useState(true);
  const [tab, setTab] = useState(0);

  useEffect(() => {
    let a = setTimeout(() => {
      setAlert(false);
    }, 5000);
    console.log("setTimeout");
    return () => {
      //여기 코드는 useEffect 동작하기전에  실행됨
      console.log("clearTimeout");
      clearTimeout(a);
    };
  }); //[] 처음 마운트 될때 1회만 동작

  // useEffect(()=>{})  1.재렌더링마다 코드 실행
  // useEffect(()=>{},[]) 2.mount시 1회 코드 실행
  // useEffect(()=>{
  //   return ()=>{
  //     3.unmount할때마다 1회 코드 실행하고 싶으면
  //   }
  // },[])
  const TabContent = ({ tab }) => {
    const [fade, setFade] = useState("");

    //tab이 변경될때마다 실행
    useEffect(() => {
      let a = setTimeout(() => {
        setFade("end");
      }, 10);

      return () => {
        clearTimeout(a);
        setFade("");
      };
    }, [tab]);

    return (
      <div className={`start ${fade}`}>
        {[<div>내용1</div>, <div>내용2</div>, <div>내용3</div>][tab]}
      </div>
    );
  };
  return (
    <div className="container">
      {alert === true ? (
        <div className="alert alert-primary  ">5초이내 구매시 80% 할인</div>
      ) : null}

      {/* <Btn bg="orange" color="green">
        버튼
      </Btn>
      <Btn bg="red">버튼</Btn> */}

      <div className="row">
        <div className="col-md-6">
          <img
            src={`${road}/assets/${findShoes.id}.jpg`}
            alt="상품 이미지"
            width="80%"
          />
        </div>
        <div className="col-md-6 mt-4">
          <h4 className="pt-5">{findShoes.title}</h4>
          <p>{findShoes.content}</p>
          <p>{findShoes.price}</p>
          <button className="btn btn-danger">주문하기</button>
        </div>
      </div>
      <Nav variant="tabs" defaultActiveKey="link0">
        <Nav.Item>
          <Nav.Link
            onClick={() => {
              setTab(0);
            }}
            eventKey="link0"
          >
            버튼1
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            onClick={() => {
              setTab(1);
            }}
            eventKey="link1"
          >
            버튼2
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            onClick={() => {
              setTab(2);
            }}
            eventKey="link2"
          >
            버튼3
          </Nav.Link>
        </Nav.Item>
      </Nav>
      {/* {tab === 0 ? <div>내용0</div> : null}
      {tab === 1 ? <div>내용1</div> : null}
      {tab === 2 ? <div>내용2</div> : null} */}
      <TabContent tab={tab} />
    </div>
  );
};

export default Detail;
