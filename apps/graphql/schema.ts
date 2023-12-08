import { makeExecutableSchema } from "@graphql-tools/schema";
import { GraphQLContext } from "./context";
import { typeDefs } from "./typeDefs";

const examplePeople = [
  {
    id: 1,
    name: "John Doe",
    salary: 1000,
  },
  {
    id: 2,
    name: "Jane Doe",
    creditCardNumber: "1234-5678-9012-3456",
  },
];

export const resolvers = {
  Query: {
    people: () => examplePeople,
  },
  Person: {
    __resolveType: (person: any) =>
      "salary" in person ? "Employee" : "Customer",
  },
};

export const schema = makeExecutableSchema<GraphQLContext>({
  typeDefs,
  resolvers,
});
