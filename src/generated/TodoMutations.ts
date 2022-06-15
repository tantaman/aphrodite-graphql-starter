// SIGNED-SOURCE: <be882a179857a4ab9b02d6d0e6a07184>
/**
 * AUTO-GENERATED FILE
 * Do not modify. Update your schema and re-generate for changes.
 * For partially generated files, place modifications between the generated `BEGIN-MANUAL-SECTION` and
 * `END-MANUAL-SECTION` markers.
 */
import * as impls from "./TodoMutationsImpl.js";
import { ICreateOrUpdateBuilder } from "@aphro/runtime-ts";
import { Context } from "@aphro/runtime-ts";
import { MutationsBase } from "@aphro/runtime-ts";
import Todo from "./Todo.js";
import { default as spec } from "./TodoSpec.js";
import { Data } from "./Todo.js";
import { UpdateMutationBuilder } from "@aphro/runtime-ts";
import { CreateMutationBuilder } from "@aphro/runtime-ts";
import { DeleteMutationBuilder } from "@aphro/runtime-ts";
import { SID_of } from "@aphro/runtime-ts";
import { Changeset } from "@aphro/runtime-ts";
import TodoList from "./TodoList.js";
import { Data as TodoListData } from "./TodoList.js";

export type CreateArgs = {
  text: string;
  list: TodoList | Changeset<TodoList, TodoListData>;
};

export type SetCompleteArgs = { complete: boolean };

export type DeleteArgs = {};
class Mutations extends MutationsBase<Todo, Data> {
  constructor(ctx: Context, mutator: ICreateOrUpdateBuilder<Todo, Data>) {
    super(ctx, mutator);
  }

  create(args: CreateArgs): this {
    const extraChangesets = impls.createImpl(this.mutator, args);
    this.mutator.addExtraChangesets(extraChangesets || undefined);
    return this;
  }

  setComplete(args: SetCompleteArgs): this {
    const extraChangesets = impls.setCompleteImpl(this.mutator, args);
    this.mutator.addExtraChangesets(extraChangesets || undefined);
    return this;
  }

  delete(args: DeleteArgs): this {
    const extraChangesets = impls.deleteImpl(this.mutator, args);
    this.mutator.addExtraChangesets(extraChangesets || undefined);
    return this;
  }
}

export default class TodoMutations {
  static create(ctx: Context, args: CreateArgs): Mutations {
    return new Mutations(ctx, new CreateMutationBuilder(spec)).create(args);
  }
  static setComplete(model: Todo, args: SetCompleteArgs): Mutations {
    return new Mutations(
      model.ctx,
      new UpdateMutationBuilder(spec, model)
    ).setComplete(args);
  }
  static delete(model: Todo, args: DeleteArgs): Mutations {
    return new Mutations(
      model.ctx,
      new DeleteMutationBuilder(spec, model)
    ).delete(args);
  }
}
