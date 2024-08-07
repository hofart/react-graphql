import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client"

type Props = {
  children: React.ReactElement
}

/**
 * Creates a new instance of ApolloClient.
 * @param {ApolloClientOptions<NormalizedCacheObject>} options - The options for configuring the ApolloClient.
 * @returns {ApolloClient<NormalizedCacheObject>} The newly created ApolloClient instance.
 */
const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: 'https://rickandmortyapi.com/graphql'
})

/**
 * ApolloClientComponent is a React component that wraps the application with ApolloProvider.
 * It provides the Apollo client instance to all child components.
 */
const ApolloClientComponent = ({ children }: Props) => {
  return (
    <ApolloProvider client={client}>
      {children}
    </ApolloProvider>
  );
}

export default ApolloClientComponent