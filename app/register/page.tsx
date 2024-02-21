'use client';
import { useDispatch } from 'react-redux';
import { User } from '../lib/definitions';
import { registerUser } from '@/redux/actions/authActions';
import { useState } from 'react';
import Link from 'next/link';

const RegistrationForm: React.FC = () => {
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    email: '',
    password: '',
    password_confirm: '',
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Отправка данных о пользователе начата...');
    try {
      await dispatch(registerUser(formData as User));
      console.log('Данные о пользователе успешно отправлены!');
    } catch (error) {
      console.error('Ошибка при регистрации:', error);
    }
  };
  // const checkInputs = () => {};

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto mb-4 max-w-md rounded bg-white px-4 pb-6 pt-4 shadow-md"
    >
      <div className="mb-4">
        <label
          htmlFor="email"
          className="mb-2 block text-sm font-bold text-gray-700"
        >
          Почта:
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={(e) => {
            setFormData({ ...formData, email: e.target.value });
          }}
          className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="password"
          className="mb-2 block text-sm font-bold text-gray-700"
        >
          Пароль:
        </label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={(e) => {
            setFormData({ ...formData, password: e.target.value });
          }}
          className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="password_confirm"
          className="mb-2 block text-sm font-bold text-gray-700"
        >
          Подтверждение пароля:
        </label>
        <input
          type="password"
          id="password_confirm"
          name="password_confirm"
          value={formData.password_confirm}
          onChange={(e) => {
            setFormData({ ...formData, password_confirm: e.target.value });
          }}
          className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
        />
      </div>
      <button
        type="submit"
        className="focus:shadow-outline w-full rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700 focus:outline-none"
      >
        Создать аккаунт
      </button>
      <div className="mt-4 text-center">
        <p className="text-sm text-gray-600">
          Уже есть аккаунт?{' '}
          <Link className="text-blue-500" href={'/login'}>
            Войти
          </Link>
        </p>
      </div>
    </form>
  );
};
export default RegistrationForm;
