'use client';
import { montserrat } from '@/app/ui/fonts';
import 'tailwindcss/tailwind.css';
import CategoryList from '../products/categoryList/page';

export default function Page() {
  return (
    <header className={`${montserrat.className} mx-auto p-20 font-light`}>
      <CategoryList />
    </header>
  );
}
