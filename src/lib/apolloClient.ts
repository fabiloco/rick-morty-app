import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";


console.log({apiurl: import.meta.env.VITE_API_URL})
export const client = new ApolloClient({
  link: new HttpLink({
    uri: import.meta.env.VITE_API_URL,
  }),
  cache: new InMemoryCache(),
});
