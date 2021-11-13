import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const cryptoAPIHeaders = {
  'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
  'x-rapidapi-key': '55f3b96f6cmshe0869210d2933b1p18c583jsn2825fad616f0',
}

const baseURL = 'https://coinranking1.p.rapidapi.com'

const createRequest = (url) => ({ url, headers: cryptoAPIHeaders })

export const cryptoAPI = createApi({
  reducerPath: 'cryptoAPI',
  baseQuery: fetchBaseQuery({ baseURL }),
  endpoints: (builder) => ({
    getCryptos: builder.query({
      query: () => createRequest('/coins'),
    }),
  }),
})

export const { useGetCryptosQuery } = cryptoAPI
