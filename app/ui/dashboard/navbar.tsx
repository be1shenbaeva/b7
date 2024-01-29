import Image from 'next/image';
import { ShoppingCartIcon } from '@heroicons/react/24/outline';
import styles from '@/app/ui/home.module.css';
import Link from 'next/link';
import 'tailwindcss/tailwind.css';
import { montserrat } from '@/app/ui/fonts';

export default function Navbar() {
  return (
    <header
      className={`${montserrat.className} loaded-155 container mx-auto flex flex-wrap items-end justify-between p-4 py-2 font-light sm:p-9`}
    >
      {/* Логотип */}
      <div className="mb-4 w-full bg-f5 sm:mb-0 sm:w-1/4">
        <Link href={'/dashboard/home'}>
          <Image src="/logojayjay.png" alt="" width={124} height={50} />
        </Link>
      </div>

      {/* Навигационное меню */}
      <nav className="mb-4 w-full sm:mb-0 sm:w-1/2">
        <ul className="flex flex-wrap sm:justify-between">
          <li className="mb-2 sm:mb-0 sm:mr-4">
            <Link href={'/dashboard/guarantee'}>Гарантия</Link>
          </li>
          <li className="mb-2 sm:mb-0 sm:mr-4">
            <Link href={'/dashboard/delivery'}>Доставка и оплата</Link>
          </li>
          <li className="mb-2 sm:mb-0">
            <Link href={'/dashboard/location'}>Магазин</Link>
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
          <li className={styles.fontNum}>+996 555 73 27 57</li>
          <li className="text-sm">связаться по телефону</li>
        </ul>
      </aside>
    </header>
  );
}
