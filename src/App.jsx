import { Routes, Route } from 'react-router-dom'
import Home from "./pages/Home"
import Products from "./pages/Products"
import Login from "./pages/Login"
import ProductDetails from "./pages/ProductDetails"
import Navbar from './components/Navbar'
import CreateProduct from './pages/CreateProduct'
import { ProtectedRoute } from './routes/ProtectedRoute'
import OrderList from './pages/OrderList'
import OrderDetails from './pages/OrderDetails'

const App = () => {

  return (
    <div>
        <Navbar />
        <Routes>
            <Route path="/" element= { <Home/>}/>
    
            <Route path="/products" element= { 
            <ProtectedRoute>
              <Products />
            </ProtectedRoute>
              }/>

            <Route path="/products/:id" element= { 
            <ProtectedRoute>
              <ProductDetails/>
            </ProtectedRoute>
            }/>

            <Route path="/products/add" element= { 
            <ProtectedRoute>
              <CreateProduct/>
            </ProtectedRoute>
            }/>

            <Route path= "/orders" element ={
            <ProtectedRoute>
              <OrderList/>
            </ProtectedRoute>}/>

            <Route path= "/orders/:id" element ={
            <ProtectedRoute>
              <OrderDetails/>
            </ProtectedRoute>}/>
            
            <Route path="/login" element= { <Login/>}/>
            </Routes>
    </div>
  )
}

export default App

