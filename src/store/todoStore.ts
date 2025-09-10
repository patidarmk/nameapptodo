import { create } from 'zustand';
import { initialTodos } from '@/data/todos';
import type { Todo } from '@/lib/types';

type TodoStore = {
  todos: Todo[];
  addTodo: (text: string, priority: Todo['priority'], category: Todo['category']) => void;
  toggleTodo: (id: string) => void;
  deleteTodo: (id: string) => void;
};

export const useTodoStore = create<TodoStore>((set) => ({
  todos: initialTodos,
  addTodo: (text, priority, category) =>
    set((state) => ({
      todos: [
        ...state.todos,
        {
          id: crypto.randomUUID(),
          text,
          completed: false,
          priority,
          category,
        },
      ],
    })),
  toggleTodo: (id) =>
    set((state) => ({
      todos: state.todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      ),
    })),
  deleteTodo: (id) =>
    set((state) => ({
      todos: state.todos.filter((todo) => todo.id !== id),
    })),
}));