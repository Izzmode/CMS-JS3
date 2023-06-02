//Get all products
const getAllAsync = async () => {  

    const res = await fetch('http://localhost:9999/api/products/')

    if(!res.ok) throw new Error('something went wrong when getting data')

    return res.json()
}

//register new product
const register = async (formData) => {
    const product = {
      name: formData.name,
      description: formData.description,
      price: formData.price,
      imageURL: formData.imageURL,
      tags: formData.tags
    }

    const res = await fetch('http://localhost:9999/api/products', {
    method: 'POST',
    body: JSON.stringify(product),
    headers: {
      'Content-Type': 'application/json',
      // 'Authorization': token,
    },
  });
    
      if(!res.ok) throw new Error('something went wrong when creating product')
    
      return res.json()
}


//delete product by id
const deleteProduct = async (id) => {

  const res = await fetch('http://localhost:9999/api/products/' + id, {
  method: 'DELETE',
  // body: JSON.stringify(),
  headers: {
    'Content-Type': 'application/json',
  },
});
  
    if(!res.ok) throw new Error('something went wrong when deleting product')
  
    return res.json()
}

//update product

const updateProduct = async ({id, formData}) => {

  // const product = {
  //   name: formData.name,
  //   description: formData.description,
  //   price: formData.price,
  //   imageURL: formData.imageURL,
  //   tags: formData.tags
  // }

  const res = await fetch('http://localhost:9999/api/products/' + id, {
  method: 'PUT',
  body: JSON.stringify(formData),
  headers: {
    'Content-Type': 'application/json',
  },
});
  
    if(!res.ok) throw new Error('something went wrong when updating the product')
  
    return res.json()
}

const productsService = {
getAllAsync,
register,
deleteProduct,
updateProduct
}

export default productsService

