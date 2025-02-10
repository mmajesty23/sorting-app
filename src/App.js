import "bootstrap/dist/css/bootstrap.min.css";
import TableBody from "./components/Table";
import ActionButton from "./components/Button";
import { Component } from "react";
import axios from "axios";
import { API_URL } from "./utils/constant";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      button_list: [],
    };
  }
  componentDidMount() {
    axios
      .get(`${API_URL}/products`)
      .then((res) => this.setState({ products: res.data }));

    axios
      .get(`${API_URL}/button_list`)
      .then((res) => this.setState({ button_list: res.data }));
  }

  getNamaProductFromAToZ = () => {
    const sortedProduct = [...this.state.products];

    sortedProduct.sort((a, b) => {
      const nameA = a.nama.toLowerCase();
      const nameB = b.nama.toLowerCase();

      if (nameA < nameB) return -1;
      if (nameA > nameB) return 1;
      return 0;
    });

    return this.setState({ products: sortedProduct });
  };

  getNamaProductFromZToA = () => {
    const sortedProduct = [...this.state.products];

    sortedProduct.sort((a, b) => {
      const nameA = a.nama.toLowerCase();
      const nameB = b.nama.toLowerCase();

      if (nameB < nameA) return -1;
      if (nameB > nameA) return 1;
      return 0;
    });

    return this.setState({ products: sortedProduct });
  };

  getOrderProductFromLowestQuantity = () => {
    const sortedProduct = [...this.state.products];

    sortedProduct.sort((a, b) => {
      const valueA = a.quantity;
      const valueB = b.quantity;

      if (valueA < valueB) return -1;
      if (valueA > valueB) return 1;
      return 0;
    });

    return this.setState({ products: sortedProduct });
  };

  getOrderProductFromHighestQuantity = () => {
    const sortedProduct = [...this.state.products];

    sortedProduct.sort((a, b) => {
      const valueA = a.quantity;
      const valueB = b.quantity;

      if (valueB < valueA) return -1;
      if (valueB > valueA) return 1;
      return 0;
    });

    return this.setState({ products: sortedProduct });
  };

  getNewestProduct = () => {
    const sortedProduct = [...this.state.products];

    sortedProduct.sort((a, b) => {
      const valueA = a.created_at;
      const valueB = b.created_at;

      if (valueA < valueB) return -1;
      if (valueA > valueB) return 1;
      return 0;
    });

    return this.setState({ products: sortedProduct });
  };

  getLatestProduct = () => {
    const sortedProduct = [...this.state.products];

    sortedProduct.sort((a, b) => {
      const valueA = a.created_at;
      const valueB = b.created_at;

      if (valueB < valueA) return -1;
      if (valueB > valueA) return 1;
      return 0;
    });

    return this.setState({ products: sortedProduct });
  };

  onSortHandler = (e) => {
    const target = e.target.value;
    if (target === "ascendingName") {
      this.getNamaProductFromAToZ();
    } else if (target === "descendingName") {
      this.getNamaProductFromZToA();
    } else if (target === "ascendingQuantity") {
      this.getOrderProductFromLowestQuantity();
    } else if (target === "descendingQuantity") {
      this.getOrderProductFromHighestQuantity();
    } else if (target === "ascendingDate") {
      this.getNewestProduct();
    } else {
      this.getLatestProduct();
    }
  };

  render() {
    const { products, button_list } = this.state;
    return (
      <>
        <div className="container-fluid">
          <TableBody products={products} />
          <ActionButton button_list={button_list} onSort={this.onSortHandler} />
        </div>
      </>
    );
  }
}
