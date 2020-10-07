import { gql } from "apollo-boost";

export const ALL_PERSONAL_TASKS = gql`
  query ALL_PERSONAL_TASKS {
    tasks(order_by: { created_at: asc }) {
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

export const TOGGLE_TASK_COMPLETION = gql`
  mutation TOGGLE_TASK_COMPLETION($is_completed: Boolean!, $task_id: String!) {
    update_tasks(
      _set: { is_completed: $is_completed }
      where: { task_id: { _eq: $task_id } }
    ) {
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
  mutation ADD_TASK($title: String!, $project_id: String, $task_id: String) {
    insert_tasks(
      objects: { title: $title, project_id: $project_id, task_id: $task_id }
    ) {
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

export const EDIT_PERSONAL_TASK_QUERY = gql`
  mutation EDIT_PERSONAL_TASK_QUERY($title: String!, $task_id: String!) {
    update_tasks(
      _set: { title: $title }
      where: { task_id: { _eq: $task_id } }
    ) {
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

export const DELETE_PERSONAL_TASK_QUERY = gql`
mutation DELETE_PERSONAL_TASK_QUERY($task_id: String!) {
  delete_tasks(where: {task_id: {_eq: $task_id}}) {
    returning {
      task_id
    }
  }
}
`;
