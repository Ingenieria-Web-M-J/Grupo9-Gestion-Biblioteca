import { gql } from '@apollo/client';

export const CREATE_PRODUCT = gql`
  mutation Mutation($data: ProductCreateInput!) {
  createOneProduct(data: $data) {
    id
    balance
    title
    creator {
      name
    }
  }
}
`;

export const DELETE_PRODUCT = gql`
  mutation DeleteOneProduct($where: ProductWhereUniqueInput!) {
    deleteOneProduct(where: $where) {
      id
    }
  }
`;
