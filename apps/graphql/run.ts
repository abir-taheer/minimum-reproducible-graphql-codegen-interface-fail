import { startStandaloneServer } from "@apollo/server/standalone";
import { generateGraphQLContext } from "./context";
import { server } from "./server";

const PORT = process.env.PORT ? parseInt(process.env.PORT) : 4000;
startStandaloneServer(server, {
  listen: {
    port: PORT,
  },
  context: generateGraphQLContext,
}).then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
