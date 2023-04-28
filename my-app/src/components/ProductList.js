import { useNavigate } from "react-router-dom";

const ProductList = (props) => {
  const road = process.env.PUBLIC_URL;
  const navigate = useNavigate();
  //1.실수했던게 props.title로 해서 오류남
  //2.화면에 렌더링 안돼서 맨 위쪽에 return추가해서 수정 완료
  return props.shoes.map((propsList, i) => {
    // i 값은 0,1,2
    //propsList = 객체 형식으로 012 순회
    return (
      <div
        className="col-md-3"
        key={i}
        onClick={() => {
          navigate(`/detail/${i + 1}`);
        }}
      >
        <img
          src={`${road}/assets/${i + 1}.jpg`}
          alt="상품 이미지"
          width="80%"
        />
        <h4>{propsList.title}</h4>
        <p>{propsList.content}</p>
        <p>{propsList.price}₩</p>
      </div>
    );
  });
};
export default ProductList;
