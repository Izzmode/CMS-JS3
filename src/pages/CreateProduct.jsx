import React, { useState, useEffect } from 'react'
import FormInput from '../components/FormInput'
import { useDispatch, useSelector } from 'react-redux'
import { validateProduct } from '../helpers/validateProduct'
import { useNavigate } from 'react-router-dom'
import { registerProduct } from '../store/features/products/productSlice'

const CreateProduct = () => {

  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)
  const { product } = useSelector(state => state.auth)

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: '',
    imageURL: '',
    tags: '',
  })

  const handleChange = e => {
    const { id, value } = e.target
    setFormData(form => {
      return {
        ...form,
        [id]: value
      }
    })
  }

  const handleSubmit = async e => {
    e.preventDefault()

    if(!validateProduct(formData, setErrors)){
      return
    }

    dispatch(registerProduct(formData))
    .then(() => navigate('/products'))
    // setSubmitted(true)
  }

//   useEffect(() => {
//     if(user !== null){
//       navigate("/")
//     } 
//   }, [ submitted, user ])

  return (
    <form noValidate onSubmit={handleSubmit} className='createForm'>
    <FormInput
    id="name"
    type="text"
    label="Product name*"
    value={formData.name}
    onChange={handleChange}
    errorMsg={errors.name}
    />
    <FormInput
    id="description"
    type="text"
    label="Description of product*"
    value={formData.description}
    onChange={handleChange}
    errorMsg={errors.description}
    />
    <FormInput
    id="price"
    type="number"
    label="Price*"
    value={formData.price}
    onChange={handleChange}
    errorMsg={errors.price}
    />
    <FormInput
    id="imageURL"
    type="text"
    label="Image URL*"
    value={formData.imageURL}
    onChange={handleChange}
    errorMsg={errors.imageURL}
    />
    <FormInput
    id="tags"
    type="string"
    label="Tags for product"
    value={formData.tags}
    onChange={handleChange}
    />

    <button className='login-btn'>Submit</button>
    </form>
  )
}

export default CreateProduct
