'use client';

import { getOneProduct, getProducts } from '@/redux/actions/productActions';
import { product } from '@/redux/slices/productSlice';
import { useParams } from 'next/navigation';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Carousel from '../../ui/invoices/Carousel';
import { addToCart } from '@/redux/slices/cartSlice';
import DetailModal from '../DetailModal';

const page = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const oneProduct = useSelector(
    (state: { oneProduct: product }) => state.products.oneProduct,
  );

  const handleAddToCart = (item) => {
    dispatch(addToCart(item));
  };

  const handleClick = (category) => {
    console.log(category);
    handleAddToCart({
      id: category.id,
      title: category.title,
      price: category.price,
      quantity: 1, // или любое другое начальное количество
    });
  };

  const [selectedRadio, setSelectedRadio] = useState('inline-checked-radio');

  const handleRadioChange = (event: any) => {
    setSelectedRadio(event.target.id);
  };

  useEffect(() => {
    dispatch(getOneProduct(id));
  }, []);

  return (
    <>
      {oneProduct && (
        <div className="container relative mx-auto box-border px-20 py-8">
          <div className="flex h-[] w-full">
            <div className="h-[700px] w-1/2 p-8">
              <div className="relative z-20 h-full w-full">
                <Carousel oneProduct={oneProduct}></Carousel>
              </div>
            </div>
            <div className="w-1/2">
              <div className="h-full w-full px-24 py-12">
                <h4 className="mt-12 font-semibold text-2xl">{oneProduct.title}</h4>
                <p className="font-light text-base mt-2">
                  Артикул: {oneProduct.article}
                </p>

                <p className="mt-8 font-medium text-2xl">{oneProduct.price} сом</p>

                <p className="mt-3 font-light text-base">Размер</p>

                
                <div className="mt-3">
                  <div className="flex items-center mt-2">
                    <input
                      id="inline-radio"
                      type="radio"
                      value=""
                      name="inline-radio-group"
                      className="w-5 h-5 cursor-pointer text-gray-600 bg-gray-100 border-gray-300 focus:ring-gray-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      checked={selectedRadio === 'inline-radio'}
                      onChange={handleRadioChange}
                    />
                    <label htmlFor="inline-radio" className="ms-2 text-md font-medium text-gray-900 dark:text-gray-300">
                      Inline 1
                    </label>
                  </div>
                </div>


                <p className="mt-4 text-lg font-semibold">
                  {oneProduct.description}
                </p>
                <p className="mt-4 text-md font-semibold">
                  {oneProduct.tech_characteristics}
                </p>

                <p className="mt-5 text-base">{oneProduct.dop_info}</p>

                <button
                  onClick={() => handleClick(oneProduct)}
                  className="mt-8 h-[50px] w-full rounded-md bg-blueColor text-white"
                >
                  В корзину
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      {/*<DetailModal />*/}
    </>
  );
};

export default page;
