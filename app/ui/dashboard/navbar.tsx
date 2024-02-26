import Image from 'next/image';
import { ShoppingCartIcon } from '@heroicons/react/24/outline';
import styles from '@/app/ui/home.module.css';
import Link from 'next/link';
import 'tailwindcss/tailwind.css';
import { montserrat } from '@/app/ui/fonts';

export default function Navbar() {
  return (
    <header
      className={`${montserrat.className} loaded-155 container mx-auto flex flex-wrap items-end justify-between py-8 px-20 font-light user-select-none `}
    >
      {/* Логотип */}
      <div className="mb-4 sm:mb-0">
        <Link href={'/home'}>
          <Image src="/logojayjay.png" alt="" width={124} height={50} />
        </Link>
      </div>

      {/* Навигационное меню */}
      <nav className="  mb-4 w-1/4 sm:mb-0 sm:w-1/3 ">
        <ul className="flex flex-wrap sm:justify-between">
          <li className="mb-2 sm:mb-0 sm:mr-4">
            <Link href={'/guarantee'}>Гарантия</Link>
          </li>
          <li className="mb-2 sm:mb-0 sm:mr-4">
            <Link href={'/delivery'}>Доставка и оплата</Link>
          </li>
          <li className="mb-2 sm:mb-0">
            <Link href={'/location'}>Магазин</Link>
          </li>
        </ul>
      </nav>

      {/* Корзина */}
      <div className="cart text-gray-500">
        <Image src={'/cart.png'} height={30} width={30} alt="" />
      </div>

      {/* Контактный номер */}
      <aside className="number mt-4 sm:mt-0">
        <ul>
          <Link href={'tel:+996705161165'}>
            {' '}
            <li className={styles.fontNum}>+996 555 73 27 57</li>
          </Link>
          <li className="text-sm">связаться по телефону</li>
        </ul>
      </aside>
      <div>
        <Link href={'/register'}>
          <button className="ml-10 h-10 w-[100px] rounded-md bg-blueColor px-4 text-white">
            Войти
          </button>
        </Link>
      </div>
    </header>
  );
}
