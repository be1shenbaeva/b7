import Image from 'next/image';
import Link from 'next/link';
import 'tailwindcss/tailwind.css';
import { montserrat } from '../../fonts';
import { useState } from 'react';

function debounce(func, delay) {
  let timeOutId;
  return function () {
    const context = this;
    const args = arguments;
    clearTimeout(timeOutId);
    timeOutId = setTimeout(() => {
      func.apply(context, args);
    }, delay);
  };
}

export default function LinkBar() {
  const [query, setQuery] = useState('');
  function performSearch(query) {
    // Здесь можно выполнить запрос на сервер с переданным запросом (query)
    console.log('Searching for:', query);
  }
  const debounceDelay = 300;

  const debouncedSearch = debounce(function () {
    performSearch(query);
  }, debounceDelay);

  // Обработчик изменения ввода
  function handleInputChange(event) {
    const newQuery = event.target.value;
    setQuery(newQuery);
    debouncedSearch();
  }
  return (
    <header
      className={`${montserrat.className} container mx-auto flex w-full justify-between px-20 py-8`}
    >
      {/* Каталог */}
      <nav aria-label="Открыть каталог" className="catalog">
        <button className="flex h-10 w-[310px] items-center rounded-md bg-blueColor px-4 text-white">
          <Image src="/catalogImage.png" width={35} height={35} alt="" />
          <span className="mx-auto text-lg">Каталог</span>
        </button>
      </nav>

      {/* Поиск */}
      <div className="search relative">
        <input
          value={query}
          onChange={handleInputChange}
          type="text"
          placeholder="Что будем искать?"
          className="relative h-10 w-[400px] rounded-md border border-blue-500 p-1 pl-10 pr-2 font-light text-blue-500 placeholder-blue-500 focus:border-blue-600 focus:outline-none"
        />
        <div className="absolute left-2 top-1/2 -translate-y-1/2 transform">
          {/*<Image alt="Поиск" height={20} width={20} src="/lupa.png" />*/}
          {/*<Image alt='Поиск' height={20} width={20}></Image>*/}
          <svg
            width={20}
            height={20}
            role="img"
            className="t838__search-icon"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 88 88"
          >
            <path
              fill="#4676ee"
              d="M85 31.1c-.5-8.7-4.4-16.6-10.9-22.3C67.6 3 59.3 0 50.6.6c-8.7.5-16.7 4.4-22.5 11-11.2 12.7-10.7 31.7.6 43.9l-5.3 6.1-2.5-2.2-17.8 20 9 8.1 17.8-20.2-2.1-1.8 5.3-6.1c5.8 4.2 12.6 6.3 19.3 6.3 9 0 18-3.7 24.4-10.9 5.9-6.6 8.8-15 8.2-23.7zM72.4 50.8c-9.7 10.9-26.5 11.9-37.6 2.3-10.9-9.8-11.9-26.6-2.3-37.6 4.7-5.4 11.3-8.5 18.4-8.9h1.6c6.5 0 12.7 2.4 17.6 6.8 5.3 4.7 8.5 11.1 8.9 18.2.5 7-1.9 13.8-6.6 19.2z"
            ></path>
          </svg>
        </div>
        <button className="ml-10 h-10 w-[100px] rounded-md bg-blueColor px-4 text-white">
          Поиск
        </button>
      </div>

      {/* Иконки социальных сетей */}
      <div className="icons flex w-[170px] justify-between">
        <Link href="https://wa.me/996700449909">
          <Image alt="WhatsApp" height={30} width={30} src="/whatsapp.png" />
        </Link>
        <Link href="#">
          <Image alt="Instagram" height={30} width={30} src="/insta.png" />
        </Link>
        <Link href="https://t.me/be1shenbaeva">
          <Image alt="Telegram" height={30} width={30} src="/telega.png" />
        </Link>
      </div>
    </header>
  );
}
