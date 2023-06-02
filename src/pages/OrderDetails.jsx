import React from 'react'
import useFetch from '../hooks/useFetch'
import { useParams } from 'react-router-dom'
import { useState } from 'react'
import { useDispatch} from 'react-redux'
import { updateOrderStatus } from '../store/features/orders/orderSlice'


const OrderDetails = () => {

  const { id } = useParams();
  const dispatch = useDispatch();

  const { data: order } = useFetch('http://localhost:9999/api/orders/' + id)

  const [updatedOrder, setUpdatedOrder] = useState(order)
  const [clickedStatus, setclickedStatus] = useState('')


  if (!order) {
    return <div>Loading...</div>;
  }

  const date = new Date(order.createdAt);
  const d = date.getDate();
  const m = date.getMonth();
  const y = date.getFullYear();



  const handleInRoute = () => {
    setclickedStatus('In Route')
    setUpdatedOrder(updated => {
      return {
        ...order,
        orderStatus: 'In Route'
      }
    })
  }
  const handleCancelled = () => {
    setclickedStatus('Cancelled')
    setUpdatedOrder(updated => {
      return {
        ...order,
        orderStatus: 'Cancelled'
      }
    })
  }
  const handleCompleted = () => {
    setclickedStatus('Completed')
    setUpdatedOrder(updated => {
      return {
        ...order,
        orderStatus: 'Completed'
      }
    })
  }

  const handleSave = () => {
    setUpdatedOrder(updated => {
      return {
        ...updated,
      }
    })

    dispatch(updateOrderStatus({updatedOrder, id}))
  }

 

  return (
    <div className='order-details'> 
      <div className='order-info'>
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
        </div>
        <div className='order-status'>
          <p className='p-block'>Order was made: {d + '-' + m + '-' + y }</p>
          <p>Status: { clickedStatus ? clickedStatus : order.orderStatus}</p>
          <h2>Wish to change status?</h2>
          <div className='statusBtns'>
            <button onClick={handleInRoute} className='route'>In route</button>
            <button onClick={handleCompleted} className='completed'>Completed</button>
            <button onClick={handleCancelled} className='cancelled'>Cancelled</button>
          </div>
          <button onClick={handleSave} className='btn-save'>Save changed status</button>
              </div>
    </div>

  )

}
export default OrderDetails
