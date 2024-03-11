'use client';
import '@/app/ui/css/style.css';
import { getSubCategories } from '@/redux/actions/subcategoryActions';
import { Category } from '@/redux/slices/categorySlices';
import { AppDispatch } from '@/redux/store';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import 'tailwindcss/tailwind.css';
import 'react-international-phone/style.css';
import { CartItem, addToCart } from '@/redux/slices/cartSlice';
import Link from 'next/link';
import Modal from '@/app/modal/Modal';

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

  const path = usePathname();
  const id: number = parseInt(path.split('/')[2], 10);
  const [categoryId, setCategoryId] = useState(id);

  const handleSubcategoryClick = (subcategoryId: number) => {
    setCategoryId(subcategoryId);
    dispatch(
      getSubCategories({
        subCategoryId: subcategoryId,
        currentPage: 1,
      }),
    );
    // setLocalCurrentPage(1);
  };

  //? Корзина

  useEffect(() => {
    setCategoryId(categoryId);
  }, [id]);

  const [isOpen, setIsOpen] = useState(false);
  const openModal = () => {
    setIsOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsOpen(false);
    document.body.style.overflow = '';
  };

  //! Cart
  const handleAddToCart = (item: CartItem) => {
    dispatch(addToCart(item));
  };

  const addAndOpen = (category: Category) => {
    console.log(category);
    handleAddToCart({
      id: category.id,
      title: category.title,
      price: category.price,
      image: category.images[0],
      quantity: 1,
    });
    openModal();
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
                в корзину
              </button>
            </div>
          </div>
        ))}
      </div>
      <div></div>
      <Modal isOpen={isOpen} closeModal={closeModal} />
    </div>
  );
};

export default SubcategoryPage;
