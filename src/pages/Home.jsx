import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Home = () => {

  const { user } = useSelector(state => state.auth)

  return (
    <div> <h1>Bmerketo CMS</h1>
    {!user && <p><NavLink to='/login' className='nav-link'>Login to use our site</NavLink></p>}
    {user && <p><NavLink to='/products' className='nav-link'>Go to products</NavLink></p>}
    
    </div>

  )
}

export default Home