export const typeDefs = /* GraphQL */ `
  interface BasePerson {
    id: String!
    name: String!
  }

  type Employee implements BasePerson {
    id: String!
    name: String!
    salary: Int!
  }

  type Customer implements BasePerson {
    id: String!
    name: String!
    creditCardNumber: String!
  }

  union Person = Employee | Customer

  type Query {
    people: [Person!]!
  }
`;
