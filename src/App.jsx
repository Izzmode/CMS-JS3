import { Routes, Route } from 'react-router-dom'
import Home from "./pages/Home"
import Products from "./pages/Products"
// import Contact from "./pages/Contact"
import Login from "./pages/Login"
// import Registration from "./pages/Registration"
import ProductDetails from "./pages/ProductDetails"
import Navbar from './components/Navbar'
import CreateProduct from './pages/CreateProduct'
// import Footer from './components/Footer'
// import Checkout from './pages/Checkout'
// import UserProfile from './pages/UserProfile'
// import OrderList from './pages/OrderList'

const App = () => {

  return (
    <div>
        <Navbar />
        <Routes>
            <Route path="/" element= { <Home/>}/>
            <Route path="/products" element= { <Products />}/>
            <Route path="/products/:id" element= { <ProductDetails/>}/>
            <Route path="/products/add" element= { <CreateProduct/>}/>
            {/* <Route path= "/orders" element ={<OrderList/>}/> */}
            <Route path="/login" element= { <Login/>}/>
            {/* <Route path="/registration" element= { <Registration/>}/> */}
            {/* <Route path='/checkout' element={<Checkout />} /> */}
            {/* <Route path='/user' element={<UserProfile />} /> */}
            </Routes>
        {/* <Footer /> */}
    </div>
  )
}

export default App

