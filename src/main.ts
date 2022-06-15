import {
  context,
  anonymous,
  basicResolver,
  sql,
  commit,
  Context,
  P,
} from "@aphro/runtime-ts";
import connect, { DatabaseConnection } from "@databases/sqlite";
import TodoListMutations from "./generated/TodoListMutations.js";
import TodoMutations from "./generated/TodoMutations.js";
import { makeExecutableSchema } from "@graphql-tools/schema";
import path from "path";
import { readdirSync, readFileSync } from "fs";
import TodoList from "./generated/TodoList.js";
import { createServer } from "@graphql-yoga/node";
import { resolvers } from "./generated/domain.graphql-resolvers.js";

const typedefs = readFileSync("./src/generated/domain.graphql", {
  encoding: "utf8",
});
const schema = makeExecutableSchema({
  resolvers: [resolvers],
  typeDefs: [typedefs],
});

async function main() {
  const db = connect(/*optional file name for persistence*/);
  await createTables(db);

  const ctx = context(anonymous(), basicResolver(db));

  await createTestData(ctx);

  const server = createServer({ schema, context: { aphrodite: ctx } });
  await server.start();

  console.log("Todo List IDs to play with:");
  const lists = await TodoList.queryAll(ctx).gen();
  console.log(lists.map((l) => l.id));
}

async function createTestData(ctx: Context) {
  let lists = await TodoList.queryAll(ctx).gen();

  if (lists.length !== 0) {
    return;
  }

  const listCs = TodoListMutations.create(ctx, {
    name: "Bucket List",
  }).toChangeset();

  // Create all items in the same write.
  const [storageHandle] = commit(
    ctx,
    listCs,
    TodoMutations.create(ctx, {
      list: listCs,
      text: "Read",
    }).toChangeset(),
    TodoMutations.create(ctx, {
      list: listCs,
      text: "Write",
    }).toChangeset(),
    TodoMutations.create(ctx, {
      list: listCs,
      text: "Code",
    }).toChangeset(),
    TodoMutations.create(ctx, {
      list: listCs,
      text: "Sleep",
    }).toChangeset(),
    TodoMutations.create(ctx, {
      list: listCs,
      text: "Eat",
    }).toChangeset(),
    TodoMutations.create(ctx, {
      list: listCs,
      text: "Drink",
    }).toChangeset()
  );

  await storageHandle;
}

async function runSomeQueries(ctx: Context) {
  const todos = await TodoList.queryAll(ctx)
    .whereName(P.equals("Bucket List"))
    .queryTodos()
    .gen();
  console.log(todos.map((t) => t.text));
}

async function createTables(db: DatabaseConnection) {
  const generatedDir = path.join(".", "src", "generated");
  const schemaPaths = readdirSync(generatedDir).filter((name) =>
    name.endsWith(".sqlite.sql")
  );

  const schemas = schemaPaths.map((s) => sql.file(path.join(generatedDir, s)));

  await Promise.all(schemas.map((s) => db.query(s)));
}

await main();
