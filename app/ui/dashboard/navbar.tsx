import Image from 'next/image';
import { ShoppingCartIcon } from '@heroicons/react/24/outline';
import styles from '@/app/ui/home.module.css';
import Link from 'next/link';
import 'tailwindcss/tailwind.css';
import { montserrat } from '@/app/ui/fonts';

export default function Navbar() {
  return (
    <header
      className={`${montserrat.className} loaded-155 h-100 container mx-auto flex items-end justify-between p-9 py-2  font-light`}
    >
      {/* Логотип */}
      <div className="nav-logo w-200 h-200  bg-f5">
        <Link href={'/dashboard/home'}>
          {' '}
          <Image src="/logojayjay.png" alt="" width={124} height={50} />
        </Link>
      </div>

      {/* Навигационное меню */}
      <nav className="nav-list w-1/3">
        <ul className="ml-[10px] flex w-full justify-between">
          <li>
            <Link href={'/dashboard/guarantee'}>Гарантия</Link>
          </li>
          <li>
            <Link href={'/dashboard/delivery'}>Доставка и оплата</Link>
          </li>
          <li>
            <Link href={'/dashboard/location'}>Магазин</Link>
          </li>
        </ul>
      </nav>

      {/* Корзина */}
      <div className="cart   mt-2 text-gray-500">
        <Image src={'/cart.png'} height={30} width={30} alt=""></Image>
      </div>

      {/* Контактный номер */}
      <aside className="number">
        <ul>
          <li className={styles.fontNum}>+996 555 73 27 57</li>
          <li className="mr-4 text-sm">связаться по телефону</li>
        </ul>
      </aside>
    </header>
  );
}
// className = '';
