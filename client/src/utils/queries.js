import { gql } from '@apollo/client';

export const QUERY_ME = gql`
  {
    me {
      _id
      username
      email
      profile {
        _id
        name
        devType
        wage
        description
        workHistory
        education
        hours
        username
      }
    }
  }
`;

export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
      email
      profile {
        _id
        name
        devType
        wage
        description
        workHistory
        education
        hours
        username
      }
    }
  }
`;

export const QUERY_USERS = gql`
  {
    users {
      _id
      username
      email
      profile {
        _id
        name
        devType
        wage
        description
        workHistory
        education
        hours
        username
      }
    }
  }
`;

export const QUERY_PROFILES = gql`
  {
    profiles {
      _id
      name
      devType
      wage
      description
      workHistory
      education
      hours
      username
    }
  }
`;

export const QUERY_PROFILE = gql`
  query profile($id: ID!) {
    profile(_id: $id) {
      _id
      name
      devType
      wage
      description
      workHistory
      education
      hours
      username
    }
  }
`;
