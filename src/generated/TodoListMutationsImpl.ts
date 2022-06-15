import { CreateArgs } from "./TodoListMutations.js";
import { Changeset, sid } from "@aphro/runtime-ts";
import { Data } from "./TodoList.js";
import TodoList from "./TodoList.js";
import { IMutationBuilder } from "@aphro/runtime-ts";

export function createImpl(
  mutator: Omit<IMutationBuilder<TodoList, Data>, "toChangeset">,
  { name }: CreateArgs
): void | Changeset<any>[] {
  mutator.set({ id: sid("aaaa"), name });
}
