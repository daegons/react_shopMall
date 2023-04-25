import { useParams } from 'react-router-dom';
import styled from 'styled-components';

const BlueBtn = styled.button`
  background: blue;
  color: black;
  padding: 10px;
  border-radius: 5px;
`;
const DivBox = styled.div`
  background: green;
  padding: 20px;
`;
const Detail = (props) => {
  const road = process.env.PUBLIC_URL;

  const { id } = useParams();

  const findShoes = props.shoes.find((list) => {
    //parseInt로 id 입력시 숫자로 처리하므로써 ===강력 비교 성공
    // return list.id === parseInt(id);
    return list.id == id;
  });

  return (
    <div className="container">
      <BlueBtn>버튼</BlueBtn>
      <DivBox>박스</DivBox>
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
    </div>
  );
};
export default Detail;
