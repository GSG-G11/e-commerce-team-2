import ProductCard from './ProductCard/ProductCard';
import './Products.css';

const Products = ({ isSeller, isCart, products }) => {
  return (
    <ul className='grid' id='products'>
      {products.map((product) => (
        <ProductCard key={product.id} isSeller={isSeller} isCart={isCart} product={product} />
      ))}
    </ul>
  );
};

export default Products;
