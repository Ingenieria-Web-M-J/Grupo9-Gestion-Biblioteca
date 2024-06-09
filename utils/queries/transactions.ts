import { gql} from '@apollo/client';


const GET_TRANSACTION_BY_ID = gql`
    query Query($take: Int, $skip: Int, $where: TransactionWhereInput) {
        transactions(take: $take, skip: $skip, where: $where) {
        product {
            title
            id
            balance
        }
        user {
            name
        }
        createdAt
        id
        type
        amount
        }
    }
`;

export {GET_TRANSACTION_BY_ID };
