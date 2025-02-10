import { Component } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";

export default class ButtonComponent extends Component {
  render() {
    const { button_list, onSort } = this.props;

    return button_list.map((btnName) => {
      return (
        <Col className="mb-2" key={btnName.id}>
          <Button variant="primary" onClick={onSort} value={btnName.btn_value}>
            {btnName.btn_name}
          </Button>
        </Col>
      );
    });
  }
}
