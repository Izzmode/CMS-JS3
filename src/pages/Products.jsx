import ProductCard from '../components/ProductCard'
import useFetch from '../hooks/useFetch'
import { useNavigate } from 'react-router-dom'

const Products = () => {

  const { data: products, isLoading, error } = useFetch('http://localhost:9999/api/products')
  const navigate = useNavigate();

  return (
    <div className='Products'>
      <button onClick={() => navigate('/products/add')}>Create new product</button>

      <h1 className="productsTitle">Products</h1>
      <p className='productsSubtitle'>Click on any product to update or delete them</p>
      <ul className='ProductCards-container'>
        {isLoading && <p>Loading...</p>}
        {error && <h2>{ error }</h2>}
      { products && products.map(product => (
            <ProductCard key={product._id} product={product} />
          )) }

      </ul>
    </div>
  )
}

export default Products
