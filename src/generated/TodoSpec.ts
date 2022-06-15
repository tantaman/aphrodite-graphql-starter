// SIGNED-SOURCE: <5bd243a0d85dd8607a7af9f5843cb600>
/**
 * AUTO-GENERATED FILE
 * Do not modify. Update your schema and re-generate for changes.
 * For partially generated files, place modifications between the generated `BEGIN-MANUAL-SECTION` and
 * `END-MANUAL-SECTION` markers.
 */
import { Context } from "@aphro/runtime-ts";
import { ModelSpec } from "@aphro/runtime-ts";
import Todo from "./Todo.js";
import { Data } from "./Todo.js";

const spec: ModelSpec<Todo, Data> = {
  createFrom(ctx: Context, data: Data) {
    const existing = ctx.cache.get(data["id"]);
    if (existing) {
      return existing;
    }
    const result = new Todo(ctx, data);
    ctx.cache.set(data["id"], result);
    return result;
  },

  primaryKey: "id",

  storage: {
    engine: "sqlite",
    db: "test",
    type: "sql",
    tablish: "todo",
  },

  outboundEdges: {},
};

export default spec;
