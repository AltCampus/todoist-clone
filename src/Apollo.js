import gql from "graphql-tag";
import React from "react";
import {
  ApolloClient,
  ApolloLink,
  InMemoryCache,
  HttpLink,
} from "apollo-boost";

const httpLink = new HttpLink({
  uri: "https://in-gobbler-19.hasura.app/v1/graphql",
});

const authLink = new ApolloLink((operation, forward) => {
  // Retrieve the authorization token from local storage.
  const token = localStorage.getItem("accessToken");

  // Use the setContext method to set the HTTP headers.
  operation.setContext({
    headers: {
      authorization: token ? `Bearer ${token}` : "",
    },
  });

  // Call the next link in the middleware chain.
  return forward(operation);
});

const client = new ApolloClient({
  link: authLink.concat(httpLink), // Chain it with the HttpLink
  cache: new InMemoryCache(),
});

class Apollo extends React.Component {
  componentDidMount() {
    client
      .query({
        query: gql`
          query users {
            users {
              name
            }
          }
        `,
      })
      .then((data) => console.log(data))
      .catch((error) => console.error(error));
  }

  render() {
    return <h1></h1>;
  }
}
export default Apollo;
