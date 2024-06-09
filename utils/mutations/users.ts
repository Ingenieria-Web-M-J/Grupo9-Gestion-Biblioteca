import { gql } from '@apollo/client';

export const UPDATE_USER = gql`
 mutation UpdateOneUser($data: UserUpdateInput!, $where: UserWhereUniqueInput!) {
  updateOneUser(data: $data, where: $where) {
    id
    name
    role
    email
  }
}
`;


