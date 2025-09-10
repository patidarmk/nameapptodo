import { Todo } from '@/lib/types';
import { useTodoStore } from '@/store/todoStore';
import { Card, CardContent } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Trash2 } from 'lucide-react';
import { cn } from '@/lib/utils';
import { format } from 'date-fns';

interface TodoItemProps {
  todo: Todo;
}

export function TodoItem({ todo }: TodoItemProps) {
  const { toggleTodo, deleteTodo } = useTodoStore();

  const priorityColors = {
    low: 'bg-green-100 text-green-800 border-green-200 hover:bg-green-200',
    medium: 'bg-yellow-100 text-yellow-800 border-yellow-200 hover:bg-yellow-200',
    high: 'bg-red-100 text-red-800 border-red-200 hover:bg-red-200',
  };

  const categoryColors = {
    Work: 'bg-blue-100 text-blue-800 border-blue-200',
    Personal: 'bg-purple-100 text-purple-800 border-purple-200',
    Shopping: 'bg-pink-100 text-pink-800 border-pink-200',
    Study: 'bg-indigo-100 text-indigo-800 border-indigo-200',
  }

  return (
    <Card className={cn("transition-all hover:shadow-md", todo.completed && "bg-muted/50")}>
      <CardContent className="p-4 flex items-center gap-4">
        <Checkbox
          id={`todo-${todo.id}`}
          checked={todo.completed}
          onCheckedChange={() => toggleTodo(todo.id)}
          className="w-5 h-5"
        />
        <div className="flex-1">
          <p className={cn("font-medium", todo.completed && "line-through text-muted-foreground")}>
            {todo.text}
          </p>
          {todo.dueDate && (
            <p className="text-xs text-muted-foreground mt-1">
              Due: {format(todo.dueDate, 'PPP')}
            </p>
          )}
        </div>
        <div className="flex items-center gap-2">
          <Badge variant="outline" className={cn(categoryColors[todo.category])}>{todo.category}</Badge>
          <Badge variant="outline" className={cn(priorityColors[todo.priority], "capitalize")}>{todo.priority}</Badge>
        </div>
        <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => deleteTodo(todo.id)}>
          <Trash2 className="h-4 w-4 text-muted-foreground" />
        </Button>
      </CardContent>
    </Card>
  );
}