import { API } from '@/app/ui/dashboard/helpers/consts';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
export const b7Api = createApi({
  reducerPath: 'category',
  baseQuery: fetchBaseQuery({ baseUrl: `${API}` }),
  endpoints: (builder) => ({}),
});
