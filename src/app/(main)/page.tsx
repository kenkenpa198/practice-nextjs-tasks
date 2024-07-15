import TaskCard from '@/components/TaskCard/TaskCard';
import { TaskDocument } from '@/models/task';
import Link from 'next/link';
import { MdAddTask } from 'react-icons/md';

const getAllTasks = async (): Promise<TaskDocument[]> => {
  const response = await fetch(`${process.env.API_URL}/tasks`, {
    cache: 'no-store',
  });

  // レスポンスで 200 を取得したらエラーをスローする
  if (response.status !== 200) {
    throw new Error();
  }

  const data = await response.json();
  return data.tasks as TaskDocument[];
};

export default async function MainPage() {
  // タスク一覧を取得する
  const allTasks = await getAllTasks();
  console.log(allTasks);

  return (
    <div className="pg-24 h-full overflow-y-auto p-8 text-gray-800">
      <header className="flex items-center justify-between">
        <h1 className="flex items-center text-2xl font-bold">All Tasks</h1>
        <Link
          href="/new"
          className="flex items-center gap-1 rounded-full border bg-gray-800 px-4 py-2 font-semibold text-white shadow-sm hover:bg-gray-700"
        >
          <MdAddTask className="site-5" />
          <div>Add Task</div>
        </Link>
      </header>

      <div className="mt-8 flex flex-wrap gap-4">
        <TaskCard />
      </div>
    </div>
  );
}
