const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    id: ID
    name: String
    age: Int
    status: STATUS_TYPE
    address: Address
  }

  type Address {
    street: String
    pincode: Int
  }

  enum STATUS_TYPE {
    WORKING
    AVAIABLE
    OFFLINE
  }

  input AGE_TYPE {
    age_greater_than: Int
    age_equal_to: Int
    age_lesser_than: Int
  }

  type Query {
    getAllUser(limit: Int, where: AGE_TYPE): [User]
    getAllAddress: [Address]
  }

  input UserData {
    name: String
    age: Int
    status: STATUS_TYPE
    street: String
    pincode: Int
  }

  type Mutation {
    createUser(data: UserData): User
  }
`;

module.exports = { typeDefs };
