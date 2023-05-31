import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAllOrders } from '../store/features/orders/orderSlice';
import { NavLink } from 'react-router-dom'
import useFetch from '../hooks/useFetch';


const OrderList = () => {

    const { data: orders } = useFetch('http://localhost:9999/api/orders/')

    return (
      <div className='prevOrders'>
            <h1>Previous orders</h1>
            {orders && orders.map((order) => (
                    <NavLink to={`/orders/${order._id}` }>

                <div key={order._id} className='order-wrapper'>
                    <p className='ordernumber'><b>Ordernumber:</b> {order._id}</p>
                    {order.orderRow.map((row) => (
                        
                        <div key={row._id} className='row-wrapper'>
                            
                            <img src={row.product && row.product.imageURL} alt={ row.product && row.product.name} className='orderRowImg'/>
                            
                            <p><b>Product:</b> {row.product && row.product.name}</p>
                            <p><b>Quantity:</b> { row.product && row.quantity}</p>
                        </div>
                    ))}
                </div>
                </NavLink>

            ))}
        </div>
        
    );

}

export default OrderList



