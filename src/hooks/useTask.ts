import useLocalStorageState from "use-local-storage-state";
import { TASKS_KEY, TaskState, type Task } from "../models/task";
import { delay } from "../helpers/utils";
import { useState } from "react";

export default function useTasks() {
  const [tasks, setTasks] = useLocalStorageState<Task[]>(TASKS_KEY, {
    defaultValue: [],
  });
  const [isUpdatingTask, setIsUpdatingTask] = useState(false);
  const [isDeletingTask, setIsDeletingTask] = useState(false);

  function prepareTask() {
    setTasks([
      ...tasks,
      { id: crypto.randomUUID(), title: "", state: TaskState.Creating },
    ]);
  }

  async function updateTask(id: string, payload: { title: Task["title"] }) {
    setIsUpdatingTask(true);
    await delay(1000);
    setTasks(
      tasks.map((task) =>
        task.id === id
          ? { ...task, ...payload, state: TaskState.Created }
          : task,
      ),
    );
    setIsUpdatingTask(false);
  }

  function updateTaskStatus(id: string, concluded: boolean) {
    setTasks(
      tasks.map((task) => (task.id === id ? { ...task, concluded } : task)),
    );
  }

  async function deleteTask(id: string) {
    setIsDeletingTask(true);

    await delay(1000);
    setTasks(tasks.filter((task) => task.id !== id));

    setIsDeletingTask(false);
  }

  return {
    prepareTask,
    updateTask,
    updateTaskStatus,
    deleteTask,
    isUpdatingTask,
    isDeletingTask,
  };
}
