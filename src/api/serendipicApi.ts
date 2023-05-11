import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const serendipicApi = createApi({
  reducerPath: "serendipicApi",
  baseQuery: fetchBaseQuery({ baseUrl: "/services/" }),
  endpoints: (builder) => ({
    getImageByKeyword: builder.query({
      query: (keyword: string) => `background-image?query=${keyword}`,
    }),
  }),
});

export type SerendipicApiState = ReturnType<typeof serendipicApi.reducer>;

export const { useGetImageByKeywordQuery } = serendipicApi;
