import { gql } from "apollo-boost";

export const ALL_PERSONAL_TASKS = gql`
  query ALL_PERSONAL_TASKS {
    tasks {
      task_id
      title
      is_completed
      created_at
      updated_at
    }
  }
`;

export const ADD_PERSONAL_TASK = gql`
  mutation ADD_TASK($title: String!, $task_id: String) {
    insert_tasks(objects: { title: $title, task_id: $task_id }) {
      returning {
        task_id
        title
        is_completed
        created_at
        updated_at
      }
    }
  }
`;

export const ADD_PROJECT_TASK = gql`
  mutation ADD_TASK($title: String!,$project_id: String, $task_id: String) {
    insert_tasks(objects: { title: $title, project_id: $project_id, task_id: $task_id }) {
      returning {
        task_id
        title
        is_completed
        created_at
        updated_at
      }
    }
  }
`;
