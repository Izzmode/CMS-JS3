const getOrderAsync = async (userId) => {
    const res = await fetch('http://localhost:9999/api/orders/')
    if(!res.ok) throw new Error('Something went wrong')
    return res.json()
}


const updateOrder = async ({updatedOrder, id}) => {
    console.log(updatedOrder, id)
    const res = await fetch('http://localhost:9999/api/orders/' + id, {
        method: 'PUT',
        body: JSON.stringify(updatedOrder),
        headers: {
          'Content-Type': 'application/json',
        },
    })
    if(!res.ok) throw new Error('Something went wrong')
    return res.json()
}

const  orderService = {
getOrderAsync,
updateOrder
}

export default orderService
