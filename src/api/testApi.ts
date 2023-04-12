import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const testApi = createApi({
  reducerPath: "test",
  baseQuery: fetchBaseQuery({ baseUrl: "/services/" }),
  endpoints: (builder) => ({
    getImageByKeyword: builder.query({
      query: (keyword: string) => `background-image?query=${keyword}`,
    }),
  }),
});

export type TestState = ReturnType<typeof testApi.reducer>;

export const { useGetImageByKeywordQuery } = testApi;
