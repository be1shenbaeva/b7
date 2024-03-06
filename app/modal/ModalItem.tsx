import { addToCart, clearCart, removeFromCart, removeOneCount } from '@/redux/slices/cartSlice';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';

const ModalItem = ({ item }) => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handleAddToCart = (item) => {
    dispatch(addToCart(item));
  };

  const handleRemoveFromCart = (item) => {
    dispatch(removeFromCart(item));
  };

  const handleRemoveOneCount = (item) => {
    dispatch(removeOneCount(item))
  }

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const [deleting, setDeleting] = useState(false);
  const [count, setCount] = useState(5);
  const [deleteTimerId, setDeleteTimerId] = useState(null);

  useEffect(() => {
    if (deleting) {
      console.log('Deleting...');

      const timerId = setInterval(() => {
        setCount(prevCount => prevCount - 1);
      }, 1000);

      setDeleteTimerId(timerId);

      const deleteTimeoutId = setTimeout(() => {
        console.log('Deleted');
        handleRemoveFromCart(item)
        clearInterval(timerId);
        setDeleting(false);
        setCount(5);
      }, 5000);

      return () => {
        clearInterval(timerId);
        clearTimeout(deleteTimeoutId);
      };
    } else {
      clearInterval(deleteTimerId);
    }
  }, [deleting]);

  const handleDeleteProduct = () => {
    setDeleting(true);
  };

  const handleReturnClick = () => {
    console.log('Return button clicked');
    setDeleting(false);
    setCount(5);
  };

  return (
    <>
      {deleting ? (<>
                <div className="cart__item">
                  <div className="cart__wrapper">
                    <p className="cart__delete__text">Удаление {item.title} через {count}...</p>
                    <p onClick={handleReturnClick} className="cart__delete__text">Вернуть</p>
                  </div>
                </div>
              </>) : (<>
                <div className="cart__item">
                  <div className="item__img">
                    <img src={`http://13.51.165.176${item.image.image}`} alt="product" />
                  </div>
                  <div className="item__title">
                    <h5>{item.title}</h5>
                  </div>
                  <div className="item__counter">
                    <img onClick={() =>
                      handleRemoveOneCount(item)
                    } src="/minus.svg" alt="-" />
                    <p>{item.quantity}</p>
                    <img onClick={() => handleAddToCart(item)} src="/plus.svg" alt="+" />
                  </div>

                  <div className="item__total">
                    <p>{item.subtotal} сом</p>
                    <img onClick={handleDeleteProduct} src="/close.svg" alt="&times;" />
                  </div>
                </div>
              </>)}
    </>
  )
}

export default ModalItem