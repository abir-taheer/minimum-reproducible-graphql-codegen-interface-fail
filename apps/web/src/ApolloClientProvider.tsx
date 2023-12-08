import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { PropsWithChildren } from "react";

const cache = new InMemoryCache({});

export const client = new ApolloClient({
  cache,
  uri: "http://localhost:4000",
});

export const ApolloClientProvider = ({ children }: PropsWithChildren<{}>) => {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};
