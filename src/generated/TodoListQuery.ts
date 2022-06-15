// SIGNED-SOURCE: <8575766a9dee097b428158777fdfd761>
/**
 * AUTO-GENERATED FILE
 * Do not modify. Update your schema and re-generate for changes.
 * For partially generated files, place modifications between the generated `BEGIN-MANUAL-SECTION` and
 * `END-MANUAL-SECTION` markers.
 */
import { Context } from "@aphro/runtime-ts";
import { DerivedQuery } from "@aphro/runtime-ts";
import { QueryFactory } from "@aphro/runtime-ts";
import { modelLoad } from "@aphro/runtime-ts";
import { filter } from "@aphro/runtime-ts";
import { Predicate } from "@aphro/runtime-ts";
import { P } from "@aphro/runtime-ts";
import { ModelFieldGetter } from "@aphro/runtime-ts";
import { SID_of } from "@aphro/runtime-ts";
import TodoList from "./TodoList.js";
import { Data } from "./TodoList.js";
import { default as spec } from "./TodoListSpec.js";
import { default as TodoSpec } from "./TodoSpec.js";
import TodoQuery from "./TodoQuery.js";

export default class TodoListQuery extends DerivedQuery<TodoList> {
  static create(ctx: Context) {
    return new TodoListQuery(
      ctx,
      QueryFactory.createSourceQueryFor(ctx, spec),
      modelLoad(ctx, spec.createFrom)
    );
  }

  static fromId(ctx: Context, id: SID_of<TodoList>) {
    return this.create(ctx).whereId(P.equals(id));
  }

  whereId(p: Predicate<Data["id"]>) {
    return new TodoListQuery(
      this.ctx,
      this,
      filter(new ModelFieldGetter<"id", Data, TodoList>("id"), p)
    );
  }

  whereName(p: Predicate<Data["name"]>) {
    return new TodoListQuery(
      this.ctx,
      this,
      filter(new ModelFieldGetter<"name", Data, TodoList>("name"), p)
    );
  }
  queryTodos(): TodoQuery {
    return new TodoQuery(
      this.ctx,
      QueryFactory.createHopQueryFor(this.ctx, this, spec.outboundEdges.todos),
      modelLoad(this.ctx, TodoSpec.createFrom)
    );
  }
}
