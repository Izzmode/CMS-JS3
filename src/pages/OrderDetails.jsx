import React from 'react'
import useFetch from '../hooks/useFetch'
import { useParams} from 'react-router-dom'


const OrderDetails = () => {

  const { id } = useParams();

  const { data: order } = useFetch('http://localhost:9999/api/orders/' + id)

  if (!order) {
    return <div>Loading...</div>;
  }

  const date = new Date(order.createdAt);  // dateStr you get from mongodb

  const d = date.getDate();
  const m = date.getMonth();
  const y = date.getFullYear();

  console.log(d, m, y)

  console.log(order.createdAt)

  return (
    <div className='order-details'> 
    {console.log(order.customerId._id)}
    <div>
      <h1>Ordernumber:</h1>
      <h2>{order._id}</h2>
      <hr />
      <h3>Customer:</h3>
        <p>{order.customerId && order.customerId.email}</p>
    </div>

        <div className='order-description'>
            {order.orderRow.map((row) => (
              
                <div key={row._id}className='order-orderDetails'>
                <img src={row.product && row.product.imageURL} alt={ row.product && row.product.name} className='orderRowImg'/>
                <p>{row.product && row.product.name}</p>
                <p>${row.product && row.product.price}</p>
                
                </div>
            ))}
        
      </div>
      
      <p>Order was made: {d + '-' + m + '-' + y }</p>


      </div>

  )

}
export default OrderDetails
