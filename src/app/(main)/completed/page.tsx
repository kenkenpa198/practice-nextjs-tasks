import TaskCard from '@/components/TaskCard/TaskCard';

const CompletedTaskPage = () => {
  return (
    <div className="pg-24 h-full overflow-y-auto p-8 text-gray-800">
      <header className="flex items-center justify-between">
        <h1 className="flex items-center text-2xl font-bold">
          Completed Tasks
        </h1>
      </header>

      <div className="mt-8 flex flex-wrap gap-4">
        <TaskCard />
      </div>
    </div>
  );
};

export default CompletedTaskPage;
