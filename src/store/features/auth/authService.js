import axios from 'axios';

const register = async (formData) => {
    const product = {
      name: formData.name,
      description: formData.description,
      price: formData.price,
      imageURL: formData.imageURL,
      tags: formData.city,
    }
  
    const res = await fetch('http://localhost:9999/api/products', {
        method: 'POST',
        body: JSON.stringify(product),
        headers: {
          'content-type': 'application/json'
        }
      })
    
      if(!res.ok) throw new Error('something went wrong when creating product')
    
      
      return res.json()
    }



    const login = async (formData) => {
      const user = {
        email: formData.email,
        password: formData.password
      }
    
      const res = await fetch('http://localhost:9999/api/users/login', {
        method: 'POST',
        body: JSON.stringify(user),
        headers: {
          'content-type': 'application/json'
        }
      })
    
      if (!res.ok) throw new Error('Something went wrong when logging you in')
      return res.json()
    
    }
    
    const authService = {
      register,
      login
    }
    
    export default authService
    