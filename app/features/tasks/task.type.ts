export type Task = {
  id: number;
  title: string;
  description?: string;
  deadline: string;
  isCompleted: boolean;
  courseId: number;
}
