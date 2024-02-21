'use client';
import { montserrat } from '@/app/ui/fonts';
import 'tailwindcss/tailwind.css';
import CategoryList from '../products/categoryList/page';

export default function Page() {
  return (
    <header className={`${montserrat.className} mx-auto p-20 font-light`}>
      {/* <div className="left_list "> */}
      <CategoryList />
      {/* <ul className="flex h-[200px] flex-col justify-between">
          <li>Посуда Happycall </li>
          <li>Техника для кухни</li>
          <li>Техника для дома</li>
          <li>Красота и здоровье</li>
        </ul>
      </div> */}
    </header>
  );
}
