import { Table } from "react-bootstrap";

const Cart = () => {
  return (
    <div>
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
          <tr>
            <td>1</td>
            <td>하위</td>
            <td>하위</td>
            <td>하위</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};
export default Cart;
