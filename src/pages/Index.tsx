import { AddTodoForm } from "@/components/todos/AddTodoForm";
import { TodoList } from "@/components/todos/TodoList";
import { useTodoStore } from "@/store/todoStore";

const Index = () => {
  const todos = useTodoStore((state) => state.todos);
  const completedCount = todos.filter(t => t.completed).length;
  const totalCount = todos.length;
  const progress = totalCount > 0 ? (completedCount / totalCount) * 100 : 0;

  return (
    <div className="container max-w-4xl mx-auto py-8 px-4">
      <header className="text-center mb-8">
        <h1 className="text-5xl font-bold tracking-tighter bg-gradient-to-r from-purple-500 to-indigo-600 bg-clip-text text-transparent">
          Your Task Dashboard
        </h1>
        <p className="text-muted-foreground mt-2 text-lg">
          Stay organized, stay productive.
        </p>
      </header>

      <div className="mb-6">
        <AddTodoForm />
      </div>

      <div className="bg-card/80 backdrop-blur-lg border rounded-xl p-6 shadow-sm">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-semibold tracking-tight">Task List</h2>
          <p className="text-sm font-medium text-muted-foreground">{completedCount} of {totalCount} completed</p>
        </div>
        <div className="w-full bg-muted rounded-full h-2.5 mb-6">
          <div className="bg-gradient-to-r from-purple-500 to-indigo-600 h-2.5 rounded-full" style={{ width: `${progress}%` }}></div>
        </div>
        <TodoList />
      </div>
    </div>
  );
};

export default Index;