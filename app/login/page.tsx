'use client';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { LogUser, LoginUser } from '@/redux/actions/authActions';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { AppDispatch } from '@/redux/store';

const LoginForm = () => {
  const router = useRouter();
  const dispatch = useDispatch<AppDispatch>();
  const [formData, setFormData] = useState<LogUser>({
    email: '',
    password: '',
  });
  const [error, setError] = useState<string | null>(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      await dispatch(LoginUser(formData));
      console.log('Данные о входе пользователя успешно отправлены!');
      router.push('/home');
      alert('Вы успешно вошли в аккаунт');
      //   setIsLoggedIn(true);
    } catch (error) {
      console.error('Ошибка при входе в аккаунт:', error);
      setError('Ошибка при входе в аккаунт');
    } finally {
      setLoading(false);
    }
  };

  if (isLoggedIn) {
    alert('Вы успешно вошли в аккаунт');
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto max-w-xs rounded bg-white p-4 shadow-md"
    >
      {error && <div className="mb-4 text-red-500">{error}</div>}
      <div className="mb-4">
        <label htmlFor="email" className="mb-2 block font-bold text-gray-700">
          Почта:
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          className="w-full rounded border px-3 py-2 leading-tight text-gray-700"
          placeholder="Введите вашу почту"
          required
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="password"
          className="mb-2 block font-bold text-gray-700"
        >
          Пароль:
        </label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleInputChange}
          className="w-full rounded border px-3 py-2 leading-tight text-gray-700"
          placeholder="Введите ваш пароль"
          required
        />
      </div>
      <button
        type="submit"
        className="focus:shadow-outline w-full rounded bg-blue-500 px-4 py-2 font-bold text-white focus:outline-none"
        disabled={loading}
      >
        {loading ? 'Вход в ...' : 'Войти'}
      </button>
      <div className="mt-4 text-center">
        <p className="text-sm text-gray-600">
          У вас еще нет аккаунта?{' '}
          <Link className="text-blue-500" href={'/register'}>
            Зарегестрироваться
          </Link>
        </p>
      </div>
    </form>
  );
};

export default LoginForm;
