import type { CodegenConfig } from "@graphql-codegen/cli";
import { makeExecutableSchema } from "@graphql-tools/schema";
import { ensureDirExists } from "@monorepo/utils";
import * as fs from "fs";
import { printSchema } from "graphql";
import * as path from "path";
import { typeDefs } from "./typeDefs";

const schema = printSchema(makeExecutableSchema({ typeDefs }));

ensureDirExists("generated");
fs.writeFileSync("generated/schema.graphql", schema);

const webDir = path.dirname(require.resolve("@monorepo/web/package.json"));

const webGeneratedDir = path.join(webDir, "src", "generated/");
ensureDirExists(webGeneratedDir);

const config: CodegenConfig = {
  overwrite: true,
  schema,

  generates: {
    // Typescript types for GraphQL backend server
    "generated/ts-schema.ts": {
      plugins: ["typescript", "typescript-resolvers"],
      config: {
        contextType: "../context#GraphQLContext",
      },
    },

    // Typescript types for GraphQL frontend client
    [webGeneratedDir]: {
      documents: [webDir + "/src/**/*.ts", webDir + "/src/**/*.tsx"],
      preset: "client",
      plugins: [],
    },
  },
};

export default config;
