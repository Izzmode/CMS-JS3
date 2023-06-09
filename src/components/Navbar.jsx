import React from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { logOut } from '../store/features/auth/authSlice';

const Navbar = () => {

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const { user } = useSelector(state => state.auth)

  // Logging out user and redirecting to Home page
  const logout = () => {
    dispatch(logOut())
    navigate('/')
  }

  return (
    <div className='Navbar'>
      <div className="container">
        <Link to='/'>
          <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="176.465" height="37" viewBox="0 0 176.465 37">
            <defs>
              <clipPath id="clipPath">
                <rect id="bg" width="43" height="37" transform="translate(0 0.02)" fill="#fff" stroke="#707070" strokeWidth="1"/>
              </clipPath>
            </defs>
            <g id="Logo" transform="translate(-21 -8.02)">
              <text id="bmerketo" transform="translate(60.465 36.02)" fill="#1a1a1a" fontSize="27" fontFamily="Poppins-Bold, Poppins" fontWeight="700"><tspan x="0" y="0">bmerketo</tspan></text>
              <g id="Mask_Group_1" data-name="Mask Group 1" transform="translate(21 8)" clipPath="url(#clipPath)">
                <path id="Icon_simple-bigcartel" data-name="Icon simple-bigcartel" d="M14.217,17.332V16a2.021,2.021,0,0,1,1.167-2L25.715,7.5a2.185,2.185,0,0,0,1-2V0l-12.5,8L1.717,0V16.83a12.224,12.224,0,0,0,5.332,10.5l7,4.5,7-4.5c3.333-2,5.332-5.833,5.332-10.5v-7.5Z" transform="translate(6.84 5.52)"/>
              </g>
            </g>
          </svg>
        </Link>
        <ul className="nav-links">
          <li><NavLink to='/' className='nav-link'>Home</NavLink></li>
          <li><NavLink to={`/products`} className='nav-link'>Products</NavLink></li>
          { user
            ? (
              <>
                <li><NavLink to='/orders' className='nav-link'>All orders</NavLink></li>
                <li><button className='nav-link nav-link-grey' onClick={logout}>Logout</button></li>
              </>
            )
            : <li><NavLink to='/login' className='nav-link nav-link-grey'>Login</NavLink></li>
            
             }
            
        </ul>
      </div>
    </div>
  )
}

export default Navbar