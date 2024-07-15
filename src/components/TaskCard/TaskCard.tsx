const TaskCard = () => {
  return (
    <div className="flex h-52 w-64 flex-col justify-between rounded-md bg-white p-4 shadow-md">
      <header>
        <h1 className="text-lg font-semibold">タイトル</h1>
        <div className="mt-1 line-clamp-3 text-sm">タスクの説明</div>
      </header>
      <div>
        <div className="text-sm">2024-12-31</div>
        <div className="flex items-center justify-between">
          <div
            className={`mt-1 w-24 rounded-full px-2 py-1 text-center text-sm text-white shadow-sm ${true ? 'bg-green-500' : 'bg-red-500'}`}
          >
            {true ? 'Completed' : 'Incomplete'}
          </div>
          <div className="flex gap-4">
            <div>編集</div>
            <div>削除</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskCard;
