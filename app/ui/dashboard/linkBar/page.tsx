import Image from 'next/image';
import Link from 'next/link';
import 'tailwindcss/tailwind.css';
import { montserrat } from '../../fonts';

export default function LinkBar() {
  return (
    <header
      className={`${montserrat.className} container mx-auto flex w-full justify-between py-8 pl-8`}
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
          type="text"
          placeholder="Что будем искать?"
          className="relative h-10 w-[400px] rounded-md border border-blue-500 p-1 pl-10 pr-2 font-light text-blue-500 placeholder-blue-500 focus:border-blue-600 focus:outline-none"
        />
        <div className="absolute left-2 top-1/2 -translate-y-1/2 transform">
          <Image alt="Поиск" height={20} width={20} src="/lupa.png" />
        </div>
        <button className="ml-10 h-10 w-[100px] rounded-md bg-blueColor px-4 text-white">
          Поиск
        </button>
      </div>

      {/* Иконки социальных сетей */}
      <div className="icons mr-10 flex w-[150px] justify-between">
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
