import ProductCard from './ProductCard/ProductCard';
import './Products.css';

const Products = ({ isSeller, isCart, products , handleChangeId, handleOnClick, checkState, deletedProductId, deletedProductValue }) => {
  return (
    <ul className='grid' id='products'>
      {products.map((product) => (
        <ProductCard handleChangeId={handleChangeId} key={product.id} isSeller={isSeller} isCart={isCart} product={product} handleOnClick={handleOnClick} checkState={checkState} deletedProductId={deletedProductId} deletedProductValue={deletedProductValue}/>
      ))}
    </ul>
  );
};

export default Products;
