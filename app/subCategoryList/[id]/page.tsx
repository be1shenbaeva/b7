'use client';
import '@/app/ui/css/style.css';
import { getCategories } from '@/redux/actions/categoryActions';
import { getSubCategories } from '@/redux/actions/subcategoryActions';
import { Category } from '@/redux/slices/categorySlices';
import { AppDispatch } from '@/redux/store';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
<!-- import 'tailwindcss/tailwind.css';
import { PhoneInput } from 'react-international-phone';
import 'react-international-phone/style.css';
import {
  CartItem,
  addToCart,
  clearCart,
  removeFromCart,
} from '@/redux/slices/cartSlice'; -->
import Link from 'next/link';

// import { getCategories } from '@/redux/actions/categoryActions';

// import { useDispatch, useSelector } from 'react-redux';

// import { useEffect, useState } from 'react';

// import { Category } from '@/redux/slices/categorySlices';
// import { usePathname } from 'next/navigation';
// import ProductList from '@/app/productLiist/page';
// import Image from 'next/image';
// import { getSubCategories } from '@/redux/actions/subcategoryActions';

// const SubcategoryPage = () => {
//   const dispatch = useDispatch();
//   const categories = useSelector(
//     (state: { subCategory: { categories: Category[] } }) =>
//       state.category.categories,
//   );
//   const path = usePathname();
//   const id = path.split('/')[2];

//   // Состояние для хранения подкатегорий
//   const [subcategories, setSubcategories] = useState<Category[]>([]);

//   useEffect(() => {
//     dispatch(getCategories());
//   }, [dispatch]);

//   useEffect(() => {
//     // Фильтрация подкатегорий по родительскому id
//     const filteredSubcategories = categories.filter(
//       (category) => category.parent === parseInt(id),
//     );
//     setSubcategories(filteredSubcategories);
//   }, [categories, id]);

//   // Получение продуктов из хранилища
//   const products = useSelector((state: any) => state.products.products);

//   console.log(products, 'products');
//   const idSubProd = 0;
//   return (
//     <div>
//       <div className="flex justify-around">
//         {subcategories.map((subcategory) => (
//           <div key={subcategory.id}>
//             <h3>{subcategory.name}</h3>
//             <Image
//               src={`${subcategory.image}`}
//               width={200}
//               height={200}
//               alt="subcat"
//             ></Image>
//             <ul>
//               {/* Фильтрация продуктов по подкатегории */}

//               {products
//                 .filter((product) => product.category === subcategory.id)
//                 .map((product) => (
//                   <li key={product.id}>
//                     <h4>{product.title}</h4>
//                     <p>Price: {product.price}</p>
//                     <p>Stock: {product.stock}</p>
//                     {/* <Image
//                       src={`http://13.51.165.176${product.images[0].image}`}
//                       width={200}
//                       height={200}
//                       alt={product.title}
//                     /> */}
//                   </li>
//                 ))}
//             </ul>
//           </div>
//         ))}
//       </div>
//       <ProductList />
//     </div>
//   );
// };

// export default SubcategoryPage;

//! это рабочий
// const SubcategoryPage = () => {
//   //!

//   //   const dispatch = useDispatch();
//   //   const categories = useSelector(
//   //     (state: { subCategory: { categories: Category[] } }) =>
//   //       state.category.categories,
//   //   );
//   //   const path = usePathname();
//   //   const id = path.split('/')[2];

//   //   // Состояние для хранения подкатегорий
//   //   const [subcategories, setSubcategories] = useState<Category[]>([]);

//   //   useEffect(() => {
//   //     dispatch(getCategories());
//   //   }, [dispatch]);

//   //   useEffect(() => {
//   //     // Фильтрация подкатегорий по родительскому id
//   //     const filteredSubcategories = categories.filter(
//   //       (category) => category.parent === parseInt(id),
//   //     );
//   //     setSubcategories(filteredSubcategories);
//   //   }, [categories, id]);
//   //!
//   const dispatch = useDispatch();
//   const categories = useSelector(
//     (state: { subCategory: { subCategories } }) =>
//       state.subCategory.subCategories,
//   );
//   console.log(categories, 'sub');

//   const allCategories = useSelector((state) => {
//     state;
//   });
//   console.log(allCategories, 'allCategories');

//   const path = usePathname();
//   const id = path.split('/')[2];

//   useEffect(() => {
//     dispatch(getSubCategories(id));
//   }, [dispatch, id]);

//   return (
//     <div>
//       <div className="flex justify-around">
//         {categories.map((subcategory) => (
//           <div key={subcategory.id}>
//             <h3>{subcategory.title}</h3>
//             <h3>{subcategory.price}</h3>

//             {/* <Image
//               src={`${subcategory.image}`}
//               width={200}
//               height={200}
//               alt="subcat"
//             /> */}
//             {/* <ul>
//               {products
//                 .filter((product) => product.category === subcategory.id)
//                 .map((product) => (
//                   <li key={product.id}>
//                     <h4>{product.title}</h4>
//                     <p>Price: {product.price}</p>
//                     <p>Stock: {product.stock}</p>
//                   </li>
//                 ))}
//             </ul> */}
//           </div>
//         ))}
//       </div>
//       {/* <ProductList /> */}
//     </div>
//   );
// };

// export default SubcategoryPage;
// import { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { getSubCategories } from '@/redux/actions/subcategoryActions';

// import Image from 'next/image';
// import { usePathname } from 'next/navigation';
// import ProductList from '@/app/productLiist/page';

// const SubcategoryPage = () => {
//   const dispatch = useDispatch();
//   const subcategories = useSelector((state) => state.subCategory.subCategories);

//   const path = usePathname();
//   const id = path.split('/')[2];

//   useEffect(() => {
//     dispatch(getSubCategories(id));
//   }, [dispatch, id]);

//   return (
//     <div>
//       <div className="flex justify-around">
//         {subcategories.map((subcategory) => (
//           <div key={subcategory.id}>
//             <h3>{subcategory.name}</h3>
//             {subcategory.products.map((product) => (
//               <div key={product.id}>
//                 <h4>{product.title}</h4>
//                 <p>Price: {product.price}</p>
//                 <p>Stock: {product.stock}</p>
//                 {/* Добавьте изображение, если требуется */}
//                 {/* <Image
//                   src={`${product.image}`}
//                   width={200}
//                   height={200}
//                   alt="Product Image"
//                 /> */}
//               </div>
//             ))}
//           </div>
//         ))}
//       </div>
//       {/* <ProductList /> */}
//     </div>
//   );
// };

// export default SubcategoryPage;

const SubcategoryPage = () => {
  const dispatch = useDispatch<AppDispatch>();
  const subcategories = useSelector(
    (state: { category: { categories: Category[] } }) =>
      state.category.categories,
  );
  const categories: Category[] = useSelector(
    (state: { subCategory: { subCategories: Category[] } }) =>
      state.subCategory.subCategories,
  );
  console.log(categories)

  const path = usePathname();
  const id: number = parseInt(path.split('/')[2], 10);

  useEffect(() => {
    dispatch(getCategories());
    dispatch(getSubCategories(id));
  }, [dispatch, id]);

  let subCatId = null;
  const handleSubcategoryClick = (subcategoryId: number) => {
    dispatch(getSubCategories(subcategoryId));
    console.log(subcategoryId, 'idi');
    subCatId = subcategoryId;
  };
  //? Корзина

  const [phone, setPhone] = useState('');
  const [isOpen, setIsOpen] = useState(null);
  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  //! Cart

  const cart = useSelector((state) => state.cart);

  const handleAddToCart = (item) => {
    dispatch(addToCart(item));
  };

  console.log(cart);

  const handleRemoveFromCart = (id, price) => {
    dispatch(removeFromCart({ id, price }));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const addAndOpen = (category) => {
    handleAddToCart({
      id: category.id,
      title: category.title,
      price: category.price,
      quantity: 1, // или любое другое начальное количество
    });
    openModal();
  };

  return (
    <div className='container mx-auto py-8 xl:px-28'>
      <div className="flex flex-wrap justify-between">
        {subcategories.map((subcategory) => (
          <div key={subcategory.id} className="relative">
            <div className="group">
              <div className="relative className='relative xl:w-[240px] xl:h-[240px] 2xl:w-[280px] 2xl:h-[280px]">
                <Image
                  src={subcategory.image}
                  layout="fill"
                  objectFit="cover"
                  alt={subcategory.name}
                  className="cursor-pointer"
                />
                <div className="absolute left-0 top-0 h-full w-full bg-black opacity-40"></div>
                <h3 className="absolute bottom-1/2 left-0 right-0 flex translate-y-1/2 transform items-center justify-center text-xl text-white opacity-100 transition-transform duration-300 group-hover:translate-y-3">
                  {subcategory.name}
                </h3>
              </div>
              <div
                onClick={() => handleSubcategoryClick(subcategory.id)}
                className="absolute bottom-10 left-0 right-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              >
                <button className="rounded bg-blue-500 px-4 py-1 text-white hover:bg-blue-600">
                  Перейти
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-20 flex items-center justify-around space-y-5 text-center">
        {categories.map((category) => (
          <div
            key={category.id}
            className="mt-5 flex h-[440px] w-[300px] flex-col justify-between"
          >
            <div>
              <Image
                className="mx-auto justify-start"
                src={`http://13.51.165.176${category.images[0].image}`}
                width={250}
                height={250}
                alt="2skdjfs"
              />
            </div>
            <h3 className=" mt-[30px] text-lg font-semibold">
              {category.title}
            </h3>
            <h3 className="mb-10 mt-2 font-light">от {category.price} сом</h3>
            <div className="flex justify-center space-x-1 font-light">
<!--               <button className="w-30 h-8 rounded-md bg-blueColor px-4 text-white">
                Подробнее
              </button>
              {/* Корзина */}
              <button
                onClick={() => addAndOpen(category)}
                className="w-30 h-8 rounded-md border border-blue-500 px-4 text-blue-500"
              > -->
              <Link href={`/productDetails/${category.id}`}>
                <button className="w-30 h-8 rounded-md bg-blueColor px-4 text-white">
                  Подробнее
                </button>
              </Link>
              <button className="w-30 h-8 rounded-md border border-blue-500 px-4 text-blue-500">
                В кoрзину
              </button>
            </div>
          </div>
        ))}
      </div>
      <div>
        {isOpen && (
          <div className="modal">
            <div className="modal-content">
              <span className="close" onClick={closeModal}>
                &times;
              </span>

              {/* отображение продуктов в корзине */}
              <div>
                <h2>Shopping Cart</h2>
                <ul>
                  {cart.items.map((item) => (
                    <li key={item.id}>
                      <div>{item.title}</div>
                      <div>{item.price}</div>
                      <div>{item.subtotal}</div>
                      <button onClick={() => handleAddToCart(item)}>+</button>
                      <div>{item.quantity}</div>
                      <button
                        onClick={() =>
                          handleRemoveFromCart(item.id, item.price)
                        }
                      >
                        -
                      </button>
                    </li>
                  ))}
                </ul>
                <div>Total: {cart.total}</div>
                <button onClick={handleClearCart}>Clear Cart</button>
              </div>
              {/* отображение продуктов в корзине */}

              <div className="mx-auto flex flex-col">
                <span>Имя</span>
                <input type="text" className="w-[400px]" />
                <span>Телефон</span>

                <PhoneInput
                  className=""
                  defaultCountry="kg"
                  value={phone}
                  onChange={(phone) => setPhone(phone)}
                />
                <span>Адрес доставки</span>

                <input
                  className="w-[400px]"
                  type="text"
                  placeholder="г. Бишкек, ул. Горького 1г"
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SubcategoryPage;
