'use client';
import { Category } from '@/redux/slices/categorySlices';
import { useSelector } from 'react-redux';
import { usePathname } from 'next/navigation';

const SubcategoryPage = () => {
  const path = usePathname();
  const id = path.split('/')[2];

  const categories = useSelector(
    (state: { category: { categories: Category[] } }) =>
      state.category.categories,
  );

  const subcategory = categories.find((category) => category.id === Number(id));

  if (!subcategory) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{subcategory.name}</h1>
      {/* <p>{subcategory.description}</p> */}
    </div>
  );
};

export default SubcategoryPage;
