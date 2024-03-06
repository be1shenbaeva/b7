'use client'

import { getOneProduct, getProducts } from '@/redux/actions/productActions';
import { product } from '@/redux/slices/productSlice';
import { useParams } from 'next/navigation'
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import Carousel from '../../ui/invoices/Carousel';
import { addToCart } from '@/redux/slices/cartSlice';
import DetailModal from '../DetailModal';

const page = () => {
  const {id} = useParams()
  const dispatch = useDispatch()

  const oneProduct = useSelector(
    (state: { oneProduct: product}) => 
    state.products.oneProduct
  )

  const handleAddToCart = (item) => {
    dispatch(addToCart(item));
  };

  const handleClick = (category) => {
    console.log(category)
    handleAddToCart({
      id: category.id,
      title: category.title,
      price: category.price,
      quantity: 1, // или любое другое начальное количество
    });
  }

  useEffect(() => {
    dispatch(getOneProduct(id))
  }, [])

  return (
    <>
      {oneProduct && (
        <div className="relative box-border container mx-auto py-8 px-20">
          <div className="flex w-full h-[700px]">
            <div className="w-1/2 h-full p-8">
              <div className="z-20 relative w-full h-full">
                
                <Carousel oneProduct={oneProduct}></Carousel>
              
              </div>
            </div>
            <div className="w-1/2 h-24">
              <div className="w-full h-full py-12 px-24">
                <h4 className="mt-12 text-3xl">{oneProduct.title}</h4>
                <p className="mt-2 font-regular">Артикул: {oneProduct.article}</p>

                <p className="mt-8 text-2xl">{oneProduct.price} сом</p>
                <p className="mt-4 text-lg font-semibold">{oneProduct.description}</p>

                <p className="mt-5 text-base">{oneProduct.dop_info}</p>

                <button onClick={() => handleClick(oneProduct)} className="mt-8 w-full h-[50px] rounded-md bg-blueColor text-white">В корзину</button>
              </div>
            </div>
          </div>
        </div>
      )}
      {/*<DetailModal />*/}
    </>
  )
}

export default page