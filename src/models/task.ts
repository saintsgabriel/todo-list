export const TASKS_KEY = "tasks";

export const TaskState = {
  Created: "created",
  Creating: "creating",
} as const;

export type TaskState = (typeof TaskState)[keyof typeof TaskState];

export interface Task {
  id: string;
  title: string;
  concluded?: boolean;
  state: TaskState;
}
