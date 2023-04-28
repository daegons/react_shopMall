import axios from "axios";
import ProductList from "../components/ProductList";

const Main = (props) => {
  //React.Fragment 태그로 감싸주면 오류를 해결 DOM에 새로운 노드를 추가하지 않아도 된다
  return (
    <>
      <div className="imgbox">
        <div className="main_img" />
      </div>
      <div className="container">
        <div className="row">
          <ProductList shoes={props.shoes} />
        </div>
      </div>
      <div className="axios_Btn">
        <button
          //엑시오스 설치 후
          //https://github.com/Stupidism/goat-sneakers/blob/master/api.json 깃 데이터 활용
          onClick={() => {
            axios
              .get(
                "https://raw.githubusercontent.com/daegons/react_shopMall/main/api.json"
              )
              .then((res) => {
                console.log(res.data);
                console.log(props.shoes);
                let copy = [...props.shoes, ...res.data];
                console.log(copy);
                props.setShoes(copy);
              })
              .catch(() => {
                console.log("데이터가 없어유...");
              });
          }}
        >
          Ajax
        </button>
      </div>
    </>
  );
};
export default Main;
