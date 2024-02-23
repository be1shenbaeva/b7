'use client';

import { getCategories } from '@/redux/actions/categoryActions';
import { getSubCategories } from '@/redux/actions/subcategoryActions';
import { Category } from '@/redux/slices/categorySlices';
import { AppDispatch } from '@/redux/store';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import 'tailwindcss/tailwind.css';
import { PhoneInput } from 'react-international-phone';
import 'react-international-phone/style.css';

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

  return (
    <div>
      <div className="flex flex-wrap justify-around ">
        {subcategories.map((subcategory: Category) => (
          <div key={subcategory.id} className="relative">
            <div className="group">
              <div className="relative">
                <Image
                  src={`${subcategory.image}`}
                  width={200}
                  height={200}
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
            className="mt-5 flex h-[480px] w-[300px] flex-col justify-between"
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
            <h3 className=" mt-[50px] text-lg font-semibold">
              {category.title}
            </h3>
            <h3 className="mb-10 mt-4 font-light">от {category.price} сом</h3>
            <div className="flex justify-center space-x-1 font-light">
              <button className="w-30 h-8 rounded-md bg-blueColor px-4 text-white">
                Подробнее
              </button>
              {/* Корзина */}
              <button
                onClick={openModal}
                className="w-30 h-8 rounded-md border border-blue-500 px-4 text-blue-500"
              >
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
              <div className="mx-auto flex flex-col">
                <span>Имя</span>
                <input type="text" className="w-[400px]" />
                <span>Телефон</span>

                <PhoneInput
                  className="border-none"
                  style={{
                    border: '1px solid gray',
                    borderRadius: '5px',
                    width: '400px',
                  }}
                  // style={{ width: '500px' }}
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
