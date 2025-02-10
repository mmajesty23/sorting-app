import { Component } from "react";
import Table from "react-bootstrap/Table";
import { timestampToReadable } from "../utils/helper";

export default class TableBody extends Component {
  render() {
    const { products } = this.props;

    return (
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nama Product</th>
            <th>Quantity</th>
            <th>Created at</th>
          </tr>
        </thead>
        <tbody>
          {products.map((prod) => {
            return (
              <tr key={prod.id}>
                <td>{prod.id}</td>
                <td>{prod.nama}</td>
                <td>{prod.quantity}</td>
                <td>{timestampToReadable(prod.created_at)}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    );
  }
}
