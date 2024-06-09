import { gql} from '@apollo/client';


const GET_TRANSACTION_BY_ID = gql`
    query Query($where: TransactionWhereInput) {
  transactions(where: $where) {
    amount
    createdAt
    id
    type
    product {
      id
      title
      balance
    }
    user {
      name
      id
    }
  }
}
`;

export {GET_TRANSACTION_BY_ID };
