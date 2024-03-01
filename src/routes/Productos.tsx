import React from 'react';
import { data } from '../data';
import PortalLayout from '../layout/PortalLayout';

interface ProductosProps {
  children?: React.ReactNode;
  allProducts: any; 
  setAllProducts: any; 
  total: any;
  countProducts: any;
  setCountProducts: any;
  setTotal: any;
}

function Productos({
  allProducts,
  setAllProducts,
  countProducts,
  setCountProducts,
  total,
  setTotal,
}: ProductosProps) {

  const onAddProduct = (product: any) => {
    if (allProducts.find((item: any) => item.id === product.id)) {
      const products = allProducts.map((item: any) =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
      setTotal(total + product.price * product.quantity);
      setCountProducts(countProducts + product.quantity);
      return setAllProducts([...products]);
    }
    setTotal(total + product.price * product.quantity);
    setCountProducts(countProducts + product.quantity);
    setAllProducts([...allProducts, product]);
  };

  return (
    <>
    <PortalLayout allProducts={allProducts}
    setAllProducts={setAllProducts}
    total={total}
    setTotal={setTotal}
    countProducts={countProducts}
    setCountProducts={setCountProducts}>
      <div className='container-items'>
        {data.map((product: any) => (
          <div className='item' key={product.id}>
            <figure>
              <img src={product.img} alt={product.nameProduct} />
            </figure>
            <div className='info-product'>
              <h2>{product.nameProduct}</h2>
              <p className='price'>${product.price}</p>
              <button onClick={() => onAddProduct(product)}>
                Añadir al carrito
              </button>
            </div>
          </div>
        ))}
      </div>
      </PortalLayout>
    </>
  );
}

export default Productos;


