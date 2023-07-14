import { db } from '$lib/server/core/database';
import { todos } from '$lib/server/core/todos/todos.schema';

export const findAllTodos = async () => {
  try {
    const todosData = db.select().from(todos).all();
    return { todosData };
  } catch (error) {
    console.log(error);
  }
};

export const findOneTodo = async () => {
  try {
    const todosData = db.select().from(todos).all();
    return { todosData };
  } catch (error) {
    console.log(error);
  }
};

export const createTodo = async (title, description, dueDate, createdAt) => {
  try {
    return db.insert(todos).values({ title, description, dueDate, createdAt }).run();
  } catch (error) {
    console.log(error);
  }
};

export const updateTodo = async () => {
  try {
    const todosData = db.select().from(todos).all();
    return { todosData };
  } catch (error) {
    console.log(error);
  }
};

export const deleteTodo = async () => {
  try {
    const todosData = db.select().from(todos).all();
    return { todosData };
  } catch (error) {
    console.log(error);
  }
};
