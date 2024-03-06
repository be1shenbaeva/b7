'use client';
import '@/app/ui/css/style.css';
import { getCategories } from '@/redux/actions/categoryActions';
import {
  getSubCategories,
  updateCurrentPage,
} from '@/redux/actions/subcategoryActions';
import { Category } from '@/redux/slices/categorySlices';
import { AppDispatch } from '@/redux/store';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import 'tailwindcss/tailwind.css';
import { PhoneInput } from 'react-international-phone';
import 'react-international-phone/style.css';
import { addToCart, clearCart, removeFromCart } from '@/redux/slices/cartSlice';
import Link from 'next/link';

const SubcategoryPage = () => {
  const [localCurrentPage, setLocalCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1); // Инициализация totalPages с 1

  const currentPage = useSelector(
    (state: { category: { categories: Category[] } }) =>
      state.subCategory.currentPage,
  );
  console.log(currentPage, 'state');

  const dispatch = useDispatch<AppDispatch>();
  const subcategories = useSelector(
    (state: { category: { categories: Category[] } }) =>
      state.category.categories,
  );

  useEffect(() => {
    setTotalPages(Math.ceil(subcategories.length / 4));
  }, [subcategories]);

  const categories: Category[] = useSelector(
    (state: { subCategory: { subCategories: Category[] } }) =>
      state.subCategory.subCategories,
  );

  console.log(getCategories(), 'dddd');

  const path = usePathname();
  const id: number = parseInt(path.split('/')[2], 10);
  const [categoryId, setCategoryId] = useState(id);

  // useEffect(() => {
  //   const idFromPath: number = parseInt(path.split('/')[2], 10);
  //   setCategoryId(idFromPath);
  // }, [path]);

  // useEffect(() => {
  //   dispatch(getCategories());
  //   dispatch(
  //     getSubCategories({
  //       subCategoryId: id,
  //       currentPage: localCurrentPage,
  //     }),
  //   );
  // }, [dispatch, categoryId, localCurrentPage]);

  useEffect(() => {
    setLocalCurrentPage(1); // Сбросить localCurrentPage при изменении категории
  }, [categoryId]);

  const handleSubcategoryClick = (subcategoryId: number) => {
    setCategoryId(subcategoryId);
    dispatch(
      getSubCategories({
        subCategoryId: subcategoryId,
        currentPage: 1, // Установить currentPage в 1 при изменении категории
      }),
    );
    dispatch(updateCurrentPage(1));
    setLocalCurrentPage(1);
  };

  //? Корзина

  useEffect(() => {
    setCategoryId(categoryId); // Установить значение categoryId при загрузке компонента
  }, [id]);

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

  console.log(localCurrentPage);

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
      quantity: 1,
    });
    openModal();
  };

  // Пагинация;

  const loadNextPage = async () => {
    const nextPage = localCurrentPage + 1;
    dispatch(
      getSubCategories({
        subCategoryId: categoryId,
        currentPage: nextPage,
      }),
    );
    setLocalCurrentPage(nextPage);
  };

  const loadPrevPage = async () => {
    const prevPage = localCurrentPage - 1;
    dispatch(
      getSubCategories({
        subCategoryId: categoryId,
        currentPage: prevPage,
      }),
    );
    setLocalCurrentPage(prevPage);
  };

  return (
    <div className="container mx-auto py-8 xl:px-28">
      <div className="flex flex-wrap justify-between">
        {subcategories.map((subcategory) => (
          <div key={subcategory.id} className="relative">
            <div className="group">
              <div className="className='relative relative xl:h-[240px] xl:w-[240px] 2xl:h-[280px] 2xl:w-[280px]">
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
              {/* Корзина */}
              <Link href={`/productDetails/${category.id}`}>
                <button className="w-30 h-8 rounded-md bg-blueColor px-4 text-white">
                  Подробнее
                </button>
              </Link>
              <button
                onClick={() => addAndOpen(category)}
                className="w-30 h-8 rounded-md border border-blue-500 px-4 text-blue-500"
              >
                В корзину
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
      <button onClick={loadNextPage} disabled={localCurrentPage >= totalPages}>
        след страница ебать
      </button>
      <div>Текущая страница: {localCurrentPage}</div>
      <div>Общее количество страниц: {totalPages}</div>
      <button onClick={loadPrevPage} disabled={localCurrentPage <= 1}>
        назад сука
      </button>
    </div>
  );
};

export default SubcategoryPage;
