import gql from "graphql-tag";

export const queries = {
  getAll: gql`
    query {
      my_shop {
        description
        id
        img
        price
        type
      }
    }
  `,

  addClothes: gql`
    mutation add_clothes(
      $type: String!
      $description: String!
      $price: Int
      $img: String!
    ) {
      insert_my_shop_one(
        object: {
          type: $type
          description: $description
          price: $price
          img: $img
        }
      ) {
        id
        type
        description
        price
        img
      }
    }
  `,
  filter: gql`
    query ($type: [String!]) {
      my_shop(where: { type: { _in: $type } }) {
        id
        img
        price
        type
        description
      }
    }
  `,
  sortByType: gql`
    query {
      my_shop(order_by: { type: asc }) {
        description
        id
        img
        price
        type
      }
    }
  `,
  sortByPrice: gql`
    query {
      my_shop(order_by: { price: asc }) {
        description
        id
        img
        price
        type
      }
    }
  `,
  sort: gql`
    query ($type: [String!], $sort: [my_shop_order_by!]) {
      my_shop(where: { type: { _in: $type } }, order_by: $sort) {
        id
        img
        price
        type
        description
      }
    }
  `,
};
