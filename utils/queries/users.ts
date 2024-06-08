import { gql } from '@apollo/client';

const GET_USERS = gql`
  query Query($where: UserWhereInput, $orderBy: [UserOrderByWithRelationInput!], $take: Int, $skip: Int) {
  users(where: $where, orderBy: $orderBy, take: $take, skip: $skip) {
    id
    name
    image
    email
    createdAt
    role
  }
}

`;




export { GET_USERS};
