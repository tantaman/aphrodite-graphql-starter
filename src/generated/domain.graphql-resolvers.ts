// SIGNED-SOURCE: <cecec46c933d125f5d82acc8b95a6e69>
/**
 * AUTO-GENERATED FILE
 * Do not modify. Update your schema and re-generate for changes.
 * For partially generated files, place modifications between the generated `BEGIN-MANUAL-SECTION` and
 * `END-MANUAL-SECTION` markers.
 */
import TodoList from "./TodoList.js";
import { Context, SID_of } from "@aphro/runtime-ts";
import { P } from "@aphro/runtime-ts";

export const resolvers = {
  Query: {
    async todoList(
      parent,
      args,
      ctx: { aphrodite: Context },
      info
    ): Promise<TodoList> {
      return await TodoList.gen(ctx.aphrodite, args.id);
    },

    async todoLists(
      parent,
      args,
      ctx: { aphrodite: Context },
      info
    ): Promise<TodoList[]> {
      return await TodoList.queryAll(ctx.aphrodite)
        // TODO
        .whereId(P.in(new Set<SID_of<TodoList>>(args.ids)))
        .gen();
    },
  },
};
