import React, { Component } from 'react';
import Product from './Product';

class Products extends Component {
  render() {
    return (
      <section className="section">
        <h1 className="section-heading">Danh Sách Sản Phẩm</h1>
        <div className="row">
          {this.props.children}
        </div>
      </section>
    );
  }

  // showProducts(products){
  //   var rs = null;
  //   if(products.length > 0){
  //     rs = products.map((product,index)=>{
  //         return <Product key={index} product={product}/>
  //     });
  //   }
  //   return rs;
  // }
}

export default Products;