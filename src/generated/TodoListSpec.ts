// SIGNED-SOURCE: <b387031e372334f284dd50465eee3ffe>
/**
 * AUTO-GENERATED FILE
 * Do not modify. Update your schema and re-generate for changes.
 * For partially generated files, place modifications between the generated `BEGIN-MANUAL-SECTION` and
 * `END-MANUAL-SECTION` markers.
 */
import { Context } from "@aphro/runtime-ts";
import { ModelSpec } from "@aphro/runtime-ts";
import { default as TodoSpec } from "./TodoSpec.js";
import TodoList from "./TodoList.js";
import { Data } from "./TodoList.js";

const spec: ModelSpec<TodoList, Data> = {
  createFrom(ctx: Context, data: Data) {
    const existing = ctx.cache.get(data["id"]);
    if (existing) {
      return existing;
    }
    const result = new TodoList(ctx, data);
    ctx.cache.set(data["id"], result);
    return result;
  },

  primaryKey: "id",

  storage: {
    engine: "sqlite",
    db: "test",
    type: "sql",
    tablish: "todolist",
  },

  outboundEdges: {
    todos: {
      type: "foreignKey",
      sourceField: "id",
      destField: "listId",
      get source() {
        return spec;
      },
      get dest() {
        return TodoSpec;
      },
    },
  },
};

export default spec;
