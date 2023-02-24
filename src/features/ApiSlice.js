import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const recipeApi = createApi({
  reducerPath: 'recipeApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3010/' }),
  endpoints: (builder) => ({
    getAllRecipe: builder.query({
        query: () => 'recipes/',
    }),
    getRecipeById: builder.query({
      query: ({id}) => `recipes/${id}`,
  }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetAllRecipeQuery,useGetRecipeByIdQuery } = recipeApi