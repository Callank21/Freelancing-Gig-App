import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const CREATE_USER = gql`
  mutation createUser($username: String!, $email: String!, $password: String!) {
    createUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const CREATE_PROFILE = gql`
  mutation createProfile(
    $name: String!
    $devtype: String!
    $wage: Int!
    $description: String!
    $workhistory: [String]!
    $education: [String]!
    $hours: Int!
    $username: String!
  ) {
    createProfile(
      name: $name
      devtype: $devtype
      wage: $wage
      description: $description
      workhistory: $workhistory
      education: $education
      hours: $hours
      username: $username
    ) {
      _id
      name
      devtype
      wage
      description
      workhistory
      education
      hours
      username
    }
  }
`;

export const DELETE_USER = gql`
  mutation deleteUser($id: ID!) {
    deleteUser(_id: $id) {
      _id
      username
      email
      profile {
        _id
        name
        devtype
        wage
        description
        workhistory
        education
        hours
        username
      }
    }
  }
`;

export const DELETE_PROFILE = gql`
  mutation deleteProfile($id: ID!) {
    deleteProfile(_id: $id) {
      _id
      name
      devtype
      wage
      description
      workhistory
      education
      hours
      username
    }
  }
`;

export const UPDATE_USER = gql`
  mutation updateUser($username: String, $email: String, $password: String) {
    updateUser(username: $username, email: $email, password: $password) {
      _id
      username
      email
    }
  }
`;

export const UPDATE_PROFILE = gql`
  mutation updateProfile(
    $id: ID!
    $name: String
    $devtype: String
    $wage: Int
    $description: String
    $workhistory: [String]
    $education: [String]
    $hours: Int
    $username: String!
  ) {
    updateProfile(
      _id: $id
      wage: $wage
      name: $name
      devtype: $devtype
      description: $description
      workhistory: $workhistory
      education: $education
      hours: $hours
      username: $username
    ) {
      _id
      name
      devtype
      wage
      description
      workhistory
      education
      hours
      username
    }
  }
`;
