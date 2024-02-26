'use client';
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCategories } from '@/redux/actions/categoryActions';
import { Category } from '@/redux/slices/categorySlices';
import Link from 'next/link';
import { AppDispatch } from '@/redux/store';

const CategoryList: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const categories = useSelector(
    (state: { category: { categories: Category[] } }) =>
      state.category.categories,
  );

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  const [selectedParentCategoryId, setSelectedParentCategoryId] = useState<
    number | null
  >(null);

  const handleCategoryClick = (parentId: number) => {
    setSelectedParentCategoryId(parentId);
  };

  return (
    <div className="left_list">
      {categories
        .filter((category) => category.parent === null)
        .map((parentCategory: Category) => (
          <ul key={parentCategory.id}>
            <li>
              <Link href={`/subCategoryList/${parentCategory.id}`}>
                {parentCategory.name}
              </Link>
            </li>
          </ul>
        ))}
    </div>
  );
};

export default CategoryList;
