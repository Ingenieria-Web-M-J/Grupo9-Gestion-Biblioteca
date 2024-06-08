import { gql } from '@apollo/client';

// export const CREATE_PRODUCT = gql`


// `;

export const DELETE_PRODUCT = gql`
  mutation DeleteOneProduct($where: ProductWhereUniqueInput!) {
    deleteOneProduct(where: $where) {
      id
    }
  }
`;
