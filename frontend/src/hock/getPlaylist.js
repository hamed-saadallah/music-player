import React, {Component} from 'react';

//import productList from '../mocks/MOCK_DATA';

const getProducts = (HockedComponent) => {
  return class Hoc extends Component {
    render(){
      return <HockedComponent
      productList = { productList }
    />
    }
  }
};

export default getProducts;

