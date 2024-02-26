'use client';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '@/redux/actions/productActions';
import { product } from '@/redux/slices/productSlice';
import Image from 'next/image';
import { AppDispatch, AppState } from '@/redux/store';

const ProductList: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const products: product[] = useSelector(
    (state: AppState) => state.products.products,
  );

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);
  console.log(products, 'prod');

  return (
    <ul>
      {products.map((product: product) => (
        <li key={product.id}>
          <h3>{product.title}</h3>
          <p>Price: {product.price}</p>
          <p>Stock: {product.stock}</p>
          {/* {product.images.length > 0 && (
              <Image
                src={`http://51.20.123.184${product.images[0].image}`}
                width={200}
                height={200}
                alt={product.title}
              />
            )} */}
        </li>
      ))}
    </ul>
  );
};

export default ProductList;
