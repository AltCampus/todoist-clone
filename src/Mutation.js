import React, { Component } from "react";
import ApolloBoost, { gql } from "apollo-boost";

class AddUser extends Component {
  componentDidMount() {
    const mutation = gql`
    mutation {
        addPost(data: {
          title: "${data.title}",
          body: "${data.body}"
        }) {
          title
        }
      }`;
  }

  render() {
    return <h1>Mutation</h1>;
  }
}
// const addPost = async (data) => {
//   const mutation = gql`
//       mutation {
//         addPost(data: {
//           title: "${data.title}",
//           body: "${data.body}"
//         }) {
//           title
//         }
//       }
//     `;

//   await server.mutate({ mutation });
//   getPosts(query);
// };

// const submit = document.querySelector("#submit");
// const form = document.querySelector("#form");

// submit.addEventListener("click", (e) => {
//   e.preventDefault();

//   addPost({
//     title: form.elements.title.value,
//     body: form.elements.body.value,
//   });

//   form.reset();
// });
