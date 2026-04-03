import Badge from "../components/badge/Badge";
import Text from "../components/text/Text";
import useTasks from "../hooks/useTasks";

export default function TaskSummary() {
  const { tasksCount, concludedTasksCount } = useTasks();

  return (
    <>
      <div className="flex items-center gap-2">
        <Text variant="body-sm-bold" className="!text-gray-300">
          Tarefas criadas
        </Text>
        <Badge variant="secondary">{tasksCount}</Badge>
      </div>
      <div className="flex items-center gap-2">
        <Text variant="body-sm-bold" className="!text-gray-300">
          Tarefas concluídas
        </Text>
        <Badge variant="primary">
          {concludedTasksCount} de {tasksCount}
        </Badge>
      </div>
    </>
  );
}
