import TaskCard from '@/components/TaskCard/TaskCard';
import { TaskDocument } from '@/models/task';

const getCompletedTasks = async (): Promise<TaskDocument[]> => {
  const response = await fetch(`${process.env.API_URL}/tasks/completed`, {
    cache: 'no-store',
  });

  // レスポンスで 200 を取得したらエラーをスローする
  if (response.status !== 200) {
    throw new Error();
  }

  const data = await response.json();
  return data.tasks as TaskDocument[];
};

const CompletedTaskPage = async () => {
  const completedTasks = await getCompletedTasks();
  return (
    <div className="pg-24 h-full overflow-y-auto p-8 text-gray-800">
      <header className="flex items-center justify-between">
        <h1 className="flex items-center text-2xl font-bold">
          Completed Tasks
        </h1>
      </header>

      <div className="mt-8 flex flex-wrap gap-4">
        {completedTasks.map((task) => (
          <TaskCard key={task._id} task={task} />
        ))}
      </div>
    </div>
  );
};

export default CompletedTaskPage;
