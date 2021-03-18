import React, { Component } from 'react'
import { ProductConsumer } from '../../Context'
import Title from '../Title'
import CartColumns from './CartColumns'
import CartList from './CartList'
import EmptyCart from './EmptyCart'
import CartTotals from './CartTotals'

export default class Cart extends Component {
    render() {
        return (
            <section>
                <ProductConsumer>
                    {value=>{
                       const {cart} =value;
                       if(cart.length>0) {
                           return(
                               <React.Fragment>
                                <Title name="your" title="Cart"></Title>
                                <CartColumns></CartColumns>
                                <CartList value={value}></CartList>
                                <CartTotals value={value} history={this.props.history}></CartTotals>
                                </React.Fragment>
                           )
                       }else{
                           return(
                                <React.Fragment>
                                    <EmptyCart></EmptyCart>
                                </React.Fragment>
                           )
                       }
                    }}
                </ProductConsumer>
                
                
            </section>
        )
    }
}

