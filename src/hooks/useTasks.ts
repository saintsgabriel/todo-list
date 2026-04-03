import useLocalStorageState from "use-local-storage-state";
import { TASKS_KEY, TaskState, type Task } from "../models/task";
import React, { useState } from "react";
import { delay } from "../helpers/utils";

export default function useTasks() {
  const [tasksData] = useLocalStorageState<Task[]>(TASKS_KEY, {
    defaultValue: [],
  });
  const [tasks, setTasks] = useState<Task[]>([]);
  const [isLoadingTasks, setIsLoadingTasks] = useState(true);

  async function fetchTasks() {
    if (isLoadingTasks) {
      await delay(2000);
    }

    setIsLoadingTasks(false);
    setTasks(tasksData);
  }

  React.useEffect(() => {
    fetchTasks();
  }, [tasksData]);

  return {
    tasks,
    tasksCount: tasks.filter((task) => task.state === TaskState.Created).length,
    concludedTasksCount: tasks.filter((task) => task.concluded).length,
    isLoadingTasks,
  };
}
