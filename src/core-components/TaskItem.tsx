import Card from "../components/card/Card";
import InputCheckbox from "../components/input-checkbox/InputCheckbox";
import InputText from "../components/input-text/InputText";
import Text from "../components/text/Text";
import ButtonIcon from "../components/button-icon/ButtonIcon";
import TrashIcon from "../assets/icons/trash.svg?react";
import PencilIcon from "../assets/icons/pencil.svg?react";
import CheckIcon from "../assets/icons/check.svg?react";
import XIcon from "../assets/icons/x.svg?react";
import { useState } from "react";
import { TaskState, type Task } from "../models/task";
import { cx } from "class-variance-authority";
import useTask from "../hooks/useTask";
import Skeleton from "../components/skeleton/Skeleton";

interface TaskItemProps {
  task: Task;
  loading?: boolean;
}

export default function TaskItem({ task, loading }: TaskItemProps) {
  const [isEditing, setIsEditing] = useState(task.state === TaskState.Creating);
  const [taskTitle, setTaskTitle] = useState(task.title || "");
  const {
    updateTask,
    updateTaskStatus,
    deleteTask,
    isUpdatingTask,
    isDeletingTask,
  } = useTask();

  function handleEdit() {
    setIsEditing(true);
  }

  function handleCancelEdit() {
    if (task.state === TaskState.Creating) {
      deleteTask(task.id);
    }

    setIsEditing(false);
  }

  function handleChangeTaskTitle(event: React.ChangeEvent<HTMLInputElement>) {
    setTaskTitle(event.target.value || "");
  }

  async function handleSaveTask(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    await updateTask(task.id, { title: taskTitle });
    setIsEditing(false);
  }

  function handleChangeTaskStatus(event: React.ChangeEvent<HTMLInputElement>) {
    updateTaskStatus(task.id, event.target.checked);
  }

  async function handleDeleteTask() {
    await deleteTask(task.id);
  }

  return (
    <Card size="md">
      {!isEditing ? (
        <div className="flex items-center gap-4">
          <InputCheckbox
            onChange={handleChangeTaskStatus}
            checked={task?.concluded}
            loading={loading}
          />
          {!loading ? (
            <Text className={cx("flex-1", { "line-through": task?.concluded })}>
              {task?.title}
            </Text>
          ) : (
            <Skeleton className="flex-1 h-6" />
          )}
          <div className="flex gap-1">
            <ButtonIcon
              icon={TrashIcon}
              variant="tertiary"
              onClick={handleDeleteTask}
              loading={loading}
              handling={isDeletingTask}
            />
            <ButtonIcon
              onClick={handleEdit}
              icon={PencilIcon}
              variant="tertiary"
              loading={loading}
            />
          </div>
        </div>
      ) : (
        <form onSubmit={handleSaveTask} className="flex items-center gap-4">
          <InputText
            className="flex-1"
            onChange={handleChangeTaskTitle}
            value={taskTitle}
            required
            autoFocus
          />
          <div className="flex gap-1">
            <ButtonIcon
              type="button"
              icon={XIcon}
              variant="secondary"
              onClick={handleCancelEdit}
            />
            <ButtonIcon
              icon={CheckIcon}
              variant="primary"
              onClick={handleEdit}
              type="submit"
              handling={isUpdatingTask}
            />
          </div>
        </form>
      )}
    </Card>
  );
}
