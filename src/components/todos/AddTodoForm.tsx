import { useState } from 'react';
import { useTodoStore } from '@/store/todoStore';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Todo } from '@/lib/types';

export function AddTodoForm() {
  const [text, setText] = useState('');
  const [priority, setPriority] = useState<Todo['priority']>('medium');
  const [category, setCategory] = useState<Todo['category']>('Personal');
  const addTodo = useTodoStore((state) => state.addTodo);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (text.trim()) {
      addTodo(text, priority, category);
      setText('');
      setPriority('medium');
      setCategory('Personal');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 items-center p-4 bg-card border rounded-lg shadow-sm">
      <Input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add a new task..."
        className="flex-1"
      />
       <Select value={category} onValueChange={(value: Todo['category']) => setCategory(value)}>
        <SelectTrigger className="w-[130px]">
          <SelectValue placeholder="Category" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="Personal">Personal</SelectItem>
          <SelectItem value="Work">Work</SelectItem>
          <SelectItem value="Shopping">Shopping</SelectItem>
          <SelectItem value="Study">Study</SelectItem>
        </SelectContent>
      </Select>
      <Select value={priority} onValueChange={(value: Todo['priority']) => setPriority(value)}>
        <SelectTrigger className="w-[120px]">
          <SelectValue placeholder="Priority" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="low">Low</SelectItem>
          <SelectItem value="medium">Medium</SelectItem>
          <SelectItem value="high">High</SelectItem>
        </SelectContent>
      </Select>
      <Button type="submit" size="icon">
        <Plus className="h-4 w-4" />
      </Button>
    </form>
  );
}