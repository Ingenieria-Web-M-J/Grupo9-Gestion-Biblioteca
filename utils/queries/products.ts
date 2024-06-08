import { gql } from '@apollo/client';

const GET_PRODUCTS = gql`
  query Product($take: Int, $skip: Int, $where: ProductWhereInput, $orderBy: [ProductOrderByWithRelationInput!]) {
  products(take: $take, skip: $skip, where: $where, orderBy: $orderBy) {
    title
    price
    image
    id
    description
    category {
      name
      id
      description
    }
    rating {
      id
      rate
      count
    }
    balance
    creator {
      name
    }
  }
}

`;

const GET_PRODUCT_BY_ID = gql`
  query Product($where: ProductWhereUniqueInput!) {
    product(where: $where) {
      title
      rating {
        rate
        count
      }
      price
      image
      id
      description
      category {
        name
        description
        id
      }
    }
  }
`;




export { GET_PRODUCTS, GET_PRODUCT_BY_ID };
