import ProductList from "../components/ProductList";

const Main = (props) => {
  //React.Fragment 태그로 감싸주면 오류를 해결 DOM에 새로운 노드를 추가하지 않아도 된다
  return (
    <>
      <div className="main_img" />
      <div className="container">
        <div className="row">
          <ProductList shoes={props.shoes} />
        </div>
      </div>
    </>
  );
};
export default Main;
