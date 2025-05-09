import { useLovableRoute, useAction } from "lovable";
import { z } from "zod";
import { createTodo } from "./createTodo.api";
import { createTodoSchema } from "./createTodo.schema";

export default function CreateTodo() {
  const route = useLovableRoute();
  const { register, handleSubmit, errors } = useAction({
    schema: createTodoSchema,
    onSubmit: async (values) => {
      await createTodo(values);
    }
  });

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Title</label>
        <input {...register("title")} />
        {errors.title && <span>{errors.title.message}</span>}
      </div>
      <div>
        <label>Description</label>
        <input {...register("description")} />
        {errors.description && <span>{errors.description.message}</span>}
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}