/**
 * Represents a task entity in the system.
 */
export type Task = {
  /** Unique identifier for the task */
  id: number;
  /** Title of the task */
  title: string;
  /** Optional detailed description of the task */
  description?: string;
  /** Deadline for the task in a string format */
  deadline: string;
  /** Indicates whether the task is completed or not */
  isCompleted: boolean;
  /** The ID of the course associated with this task */
  courseId: number;
}
