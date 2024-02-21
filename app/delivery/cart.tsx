'use client';
import 'tailwindcss/tailwind.css';
import { useState } from 'react';
import { PhoneInput } from 'react-international-phone';
import 'react-international-phone/style.css';
export default function Cart() {
  const [phone, setPhone] = useState('');

  return (
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
  );
}
