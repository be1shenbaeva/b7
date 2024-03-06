// import axios from 'axios';
// import { getCategories } from '../actions/categoryActions';
// import { getSubCategories } from '../actions/subcategoryActions';
// import { API } from '@/app/ui/dashboard/helpers/consts';

// let currentPage = 1;

// export function loadNextPage() {
//   axios
//     .get(`${API}/products/?page=${currentPage}`)
//     .then((response) => {
//       const data = response.data;
//       console.log(data, 'pagination');

//       // Отобразить данные на странице
//       //   getSubCategories(data);

//       // Увеличить номер текущей страницы

//       currentPage++;

//       // Проверить, есть ли следующая страница
//       if (data.next) {
//         // Отобразить кнопку "Следующая страница" или другой механизм для загрузки следующей страницы
//       }
//     })
//     .catch((error) => {
//       console.error('Ошибка при загрузке данных:', error);
//     });
// }
