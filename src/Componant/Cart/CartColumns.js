import React, { Component } from 'react';

class CartColumns extends Component {
    render() {
        return (
            <div className="container-fluid text-center d-done d-lg-block mt-4">
                <div className="row">
                    <div className="col-10 mx-auto col-lg-2">
                        <p className="text-uppercase">products</p>
                    </div>

                <div className="col-10 mx-auto col-lg-2">
                        <p className="text-uppercase">Name of the product</p>
                 </div>

                 <div className="col-10 mx-auto col-lg-2">
                        <p className="text-uppercase">price</p>
                 </div>

                 <div className="col-10 mx-auto col-lg-2">
                        <p className="text-uppercase">Quantitiy</p>
                 </div>

                 <div className="col-10 mx-auto col-lg-2">
                        <p className="text-uppercase">Remove</p>
                 </div>

                 <div className="col-10 mx-auto col-lg-2">
                        <p className="text-uppercase">Total</p>
                 </div>
                </div>
            </div>
        );
    }
}

export default CartColumns;
