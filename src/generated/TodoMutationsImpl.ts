import { CreateArgs } from "./TodoMutations.js";
import { SetCompleteArgs } from "./TodoMutations.js";
import { DeleteArgs } from "./TodoMutations.js";
import { Changeset, sid } from "@aphro/runtime-ts";
import { Data } from "./Todo.js";
import Todo from "./Todo.js";
import { IMutationBuilder } from "@aphro/runtime-ts";

export function createImpl(
  mutator: Omit<IMutationBuilder<Todo, Data>, "toChangeset">,
  { text, list }: CreateArgs
): void | Changeset<any>[] {
  mutator.set({
    id: sid("aaaa"),
    text,
    listId: list.id,
    complete: false,
  });
}

export function setCompleteImpl(
  mutator: Omit<IMutationBuilder<Todo, Data>, "toChangeset">,
  { complete }: SetCompleteArgs
): void | Changeset<any>[] {
  mutator.set({
    complete,
  });
}

export function deleteImpl(
  mutator: Omit<IMutationBuilder<Todo, Data>, "toChangeset">,
  {}: DeleteArgs
): void | Changeset<any>[] {
  // nothing to do. deletes just delete.
}
