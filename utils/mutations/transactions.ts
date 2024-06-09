import { gql } from '@apollo/client';

export const CREATE_TRANSACTION = gql`
  mutation CreateOneTransaction($data: TransactionCreateInput!) {
    createOneTransaction(data: $data) {
      id
      amount
      createdAt
      type
      user {
        name
        id
      }
      product {
        title
        id
      }
    }
  }
`;
