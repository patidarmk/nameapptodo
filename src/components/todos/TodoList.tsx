import { useTodoStore } from '@/store/todoStore';
import { TodoItem } from './TodoItem';
import { AnimatePresence, motion } from 'framer-motion';

export function TodoList() {
  const todos = useTodoStore((state) => state.todos);

  const sortedTodos = [...todos].sort((a, b) => Number(a.completed) - Number(b.completed));

  return (
    <div className="space-y-3">
      <AnimatePresence>
        {sortedTodos.map((todo) => (
          <motion.div
            key={todo.id}
            layout
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95, transition: { duration: 0.2 } }}
          >
            <TodoItem todo={todo} />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}