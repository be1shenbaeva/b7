import { addToCart, clearCart, removeFromCart } from '@/redux/slices/cartSlice';
import React, { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react'
import { PhoneInput } from 'react-international-phone'
import { useDispatch, useSelector } from 'react-redux';
import ModalItem from './ModalItem';
import { createOrder } from '@/redux/actions/productActions';

const Modal = ({ isOpen, closeModal }) => {
  const cart = useSelector((state) => state.cart);
  const [formData, setFormData] = useState({
    products: [],
    name: '',
    phone_number: 0,
    shipping_address: '',
  });

  const dispatch = useDispatch()

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handlePhoneChange = (value: string) => {
    setFormData({ ...formData, phone_number: value });
  };

  const handleOrder = () => {
    dispatch(createOrder(formData))
  }

  useEffect(() => {
    // Преобразование cart.items в массив объектов product с ключом product и значениями id, а также ключом quantity
    const products = cart.items.map((item: any) => ({
      product: item.id,
      quantity: item.quantity // Добавляем ключ "quantity" с количеством
    }));
  
    // Обновление состояния formData
    setFormData((prevState: any) => ({
      ...prevState,
      products: products
    }));
  }, [cart.items]);

  return (
    <div className={`${isOpen ? 'modal__wrapper modal__active' : 'modal__wrapper'}`} onClick={closeModal}>
      <span className="close" onClick={closeModal}>
        &times;
      </span>
      <div className={`${isOpen ? 'modal-content modal-content-active' : 'modal-content'}`} onClick={(e) => e.stopPropagation()}>
        <h4 className="modal__text">Ваш заказ:</h4>
        <div className="modal__line"></div>

        <div className="cart__list">
          {cart.items.map((item) => (
            <ModalItem key={item.id} item={item} />
          ))}
        </div>

        <div className="modal__line"></div>

        <div className="modal__total">
          <p>Сумма: {cart.total} сом</p>
        </div>

        <div className="inputs__wrapper">
          <span className="input__label">Имя</span>
          <input name="name" value={formData.name} onChange={handleInputChange} type="text" className="input__item" />
          <span className="input__label">Телефон</span>
          <PhoneInput
            className=""
            defaultCountry="kg"
            name="phone_number"
            value={formData.phone_number}
            onChange={handlePhoneChange}
      //      value={phoneNumber}
      //onChange={handlePhoneNumberChange}
          />
          <span className="input__label">Адрес доставки</span>
          <input
            name="shipping_address"
            value={formData.shipping_address}
            onChange={handleInputChange}
            className="input__item"
            type="text"
            placeholder="г. Бишкек, ул. Горького 1г"
          />
          <p className="text-sm font-normal my-2">
          Доставка по г. Бишкек БЕСПЛАТНО <br />
          Доставка в регионы согласно тарифам ТК
          </p>
          <button onClick={handleOrder} className="w-full p-4 mt-4 rounded-xl bg-blue-600 px-4 text-white font-bold">
            Оформить заказ
          </button>
        </div>
      </div>
    </div>
  )
}

export default Modal