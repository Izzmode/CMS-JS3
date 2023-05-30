const getOrderAsync = async (userId) => {
    const res = await fetch('http://localhost:9999/api/orders/')
    if(!res.ok) throw new Error('Something went wrong')
    return res.json()
}

const  orderService = {
getOrderAsync
    
}

export default orderService
