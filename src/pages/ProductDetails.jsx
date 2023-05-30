import React from 'react'
import useFetch from '../hooks/useFetch'
import { useParams, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteProduct, updateProduct } from '../store/features/products/productSlice'
import FormInput from '../components/FormInput'

const ProductDetails = () => {

  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { data: product } = useFetch('http://localhost:9999/api/products/' + id)

  //to hide and show form
  const [form, setForm] = useState(false);
  //to update a product in the form
  const [formData, setFormData] = useState({product})
  

  if (!product) {
    return <div>Loading...</div>;
  }

  const handleDelete = () => {
    dispatch(deleteProduct(id))
    .then(() => navigate('/products'))
  }

  //when you press the update button you get the form and it also hides that button
  const handleUpdate = () =>{
    setForm(true)
  }


  const handleSave = () => {
    setFormData(form => {
      return {
        ...form
        // product
      }
    })

    dispatch(updateProduct({formData, id}))
    .then(() => navigate('/products/'))
  }


  const handleChange = e => {
    const { id, value } = e.target
    setFormData(form => {
      return {
        ...form,
        [id]: value
      }
    })
  }

  return (
    <div className='product-details'>

      <div className='product-detail-top'>
      
        <img src={product.imageURL} alt="" width={501} height={430} />

        <div className='product-description'>
          <p><i>Product name:</i></p>
          <h4>{product.name}</h4>
          <hr></hr>
          <p><i>Product description:</i></p>
          <h4 className='description'>{product.description}</h4>
          <hr></hr>
          <p><i>Product price:</i></p>
          <h4 className='price'>{'$' + product.price}</h4>
          <hr></hr>
          {form && 
          <form noValidate>
          <FormInput
          id="name"
          type="text"
          label="Update product name"
          value={formData.name}
          onChange={handleChange}
          />
          <FormInput
          id="description"
          type="text"
          label="Update description of product"
          value={formData.description}
          onChange={handleChange}
          />
          <FormInput
          id="price"
          type="number"
          label="Update price"
          value={formData.price}
          onChange={handleChange}
          />
          <FormInput
          id="imageURL"
          type="text"
          label="Update image URL"
          value={formData.imageURL}
          onChange={handleChange}
          />
          <FormInput
          id="tags"
          type="string"
          label="Update tags for product"
          value={formData.tags}
          onChange={handleChange}
          />
          </form>}
      



          {!form && <button className='wish-btn' onClick={handleUpdate}>Update product</button>}
          {form &&<button className='wish-btn' onClick={handleSave}>Save Changes</button>}
          <button className='delete-btn' onClick={handleDelete}>Delete product</button>
          
          
         

        </div>

      </div>


      </div>

  )

          }
export default ProductDetails
