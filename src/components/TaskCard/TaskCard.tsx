import { TaskDocument } from '@/models/task';
import TaskDeleteButton from './TaskDeleteButton/TaskDeleteButton';
import TaskEditButton from './TaskEditButton/TaskEditButton';

interface TaskCardProps {
  task: TaskDocument;
}

const TaskCard: React.FC<TaskCardProps> = ({ task }) => {
  return (
    <div className="flex h-52 w-64 flex-col justify-between rounded-md bg-white p-4 shadow-md">
      <header>
        <h1 className="text-lg font-semibold">{task.title}</h1>
        <div className="mt-1 line-clamp-3 text-sm">{task.description}</div>
      </header>
      <div>
        <div className="text-sm">{task.dueDate}</div>
        <div className="flex items-center justify-between">
          <div
            className={`mt-1 w-24 rounded-full px-2 py-1 text-center text-sm text-white shadow-sm ${task.isCompleted ? 'bg-green-500' : 'bg-red-500'}`}
          >
            {task.isCompleted ? 'Completed' : 'Incomplete'}
          </div>
          <div className="flex gap-4">
            <TaskEditButton id={task._id} />
            <TaskDeleteButton id={task._id} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskCard;
