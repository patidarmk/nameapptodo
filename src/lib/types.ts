export type Todo = {
  id: string;
  text: string;
  completed: boolean;
  priority: 'low' | 'medium' | 'high';
  dueDate?: Date;
  category: 'Work' | 'Personal' | 'Shopping' | 'Study';
};