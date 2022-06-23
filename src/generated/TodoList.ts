// SIGNED-SOURCE: <942d89fd4e3db4b9a8513130d795b421>
/**
 * AUTO-GENERATED FILE
 * Do not modify. Update your schema and re-generate for changes.
 * For partially generated files, place modifications between the generated `BEGIN-MANUAL-SECTION` and
 * `END-MANUAL-SECTION` markers.
 */
import { default as s } from "./TodoListSpec.js";
import { P } from "@aphro/runtime-ts";
import { Node } from "@aphro/runtime-ts";
import { NodeSpecWithCreate } from "@aphro/runtime-ts";
import { SID_of } from "@aphro/runtime-ts";
import TodoListQuery from "./TodoListQuery.js";
import { Context } from "@aphro/runtime-ts";
import TodoQuery from "./TodoQuery.js";
import Todo from "./Todo.js";

export type Data = {
  id: SID_of<TodoList>;
  name: string;
};

export default class TodoList extends Node<Data> {
  readonly spec = s as NodeSpecWithCreate<this, Data>;

  get id(): SID_of<this> {
    return this.data.id as SID_of<this>;
  }

  get name(): string {
    return this.data.name;
  }

  queryTodos(): TodoQuery {
    return TodoQuery.create(this.ctx).whereListId(P.equals(this.id));
  }

  static queryAll(ctx: Context): TodoListQuery {
    return TodoListQuery.create(ctx);
  }

  static async genx(ctx: Context, id: SID_of<TodoList>): Promise<TodoList> {
    const existing = ctx.cache.get(id, TodoList.name);
    if (existing) {
      return existing;
    }
    return await this.queryAll(ctx).whereId(P.equals(id)).genxOnlyValue();
  }

  static async gen(
    ctx: Context,
    id: SID_of<TodoList>
  ): Promise<TodoList | null> {
    const existing = ctx.cache.get(id, TodoList.name);
    if (existing) {
      return existing;
    }
    return await this.queryAll(ctx).whereId(P.equals(id)).genOnlyValue();
  }
}
