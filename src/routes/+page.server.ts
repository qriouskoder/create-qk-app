import type { PageServerLoad } from './$types';
import * as todos from '$lib/server/core/todos/todos.handler';

export const load = (async () => {
  return todos.findAllTodos();
}) satisfies PageServerLoad;

export const actions = {
  default: async ({ request }) => {
    const formData = await request.formData();
    const title = formData.get('todoTitle');
    const description = formData.get('todoDesc');
    const dueDate = new Date(`${formData.get('todoDate')}`);
    const createdAt = Date.now();
    try {
      todos.createTodo(title, description, dueDate, createdAt);
    } catch (error) {
      console.log(error);
    }
  }
};
