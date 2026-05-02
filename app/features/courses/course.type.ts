/**
 * Represents a course entity in the system.
 */
export type Course = {
  /** Unique identifier for the course */
  id: number;
  /** Name of the course */
  name: string;
  /** Optional detailed description of the course */
  description?: string;
};
