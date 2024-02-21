// import React, { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { getProducts } from '@/redux/actions/productActions';
// import { Product } from '@/redux/slices/productSlice'; // Импортируйте тип Product из вашего среза
// import Image from 'next/image';
// const ProductList: React.FC = () => {
//   const dispatch = useDispatch();
//   const products: Product[] = useSelector(
//     (state: any) => state.products.products,
//   ); // Пропишите правильный путь к вашему хранилищу

//   useEffect(() => {
//     dispatch(getProducts());
//   }, [dispatch]);
//   console.log(products);

//   return (
//     <div>
//       <h2>Product List</h2>
//       <ul>
//         {products.map((product: Product) => (
//           <li key={product.id}>
//             <h3>{product.title}</h3>
//             <p>Price: {product.price}</p>
//             <p>Stock: {product.stock}</p>
//             {product.images.length > 0 && (
//               <Image
//                 src={`http://13.51.165.176{product.images[0].image}`}
//                 width={200}
//                 height={200}
//                 alt={product.title}
//               />
//             )}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default ProductList;

// ProductList.tsx
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '@/redux/actions/productActions';
import { Product } from '@/redux/slices/productSlice';
import Image from 'next/image';

interface ProductListProps {
  categoryId: number; // Принимаем id категории
}

const ProductList: React.FC<ProductListProps> = ({ categoryId }) => {
  const dispatch = useDispatch();
  const products: Product[] = useSelector(
    (state: any) => state.products.products,
  );

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);
  console.log(products, 'prod');

  return (
    <ul>
      {products
        // Фильтруем продукты по категории
        .filter((product) => product.categoryId === categoryId)
        .map((product: Product) => (
          <li key={product.id}>
            <h3>{product.title}</h3>
            <p>Price: {product.price}</p>
            <p>Stock: {product.stock}</p>
          </li>
        ))}
    </ul>
  );
};

export default ProductList;
