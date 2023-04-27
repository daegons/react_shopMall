import { Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { changeName } from "../store";

const Cart = () => {
  let state = useSelector((state) => {
    return state;
  });
  let dispatch = useDispatch();
  console.log(state.cart[0].name);
  return (
    <div>
      {state.user}의 장바구니
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>상품명</th>
            <th>수량</th>
            <th>변경하기</th>
          </tr>
        </thead>
        <tbody>
          {state.cart.map((list) => {
            return (
              <tr key={list.id}>
                <td>1</td>
                <td>{list.name}</td>
                <td>{list.count}</td>
                <td>
                  <button
                    onClick={() => {
                      dispatch(changeName());
                    }}
                  >
                    +
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};
export default Cart;
