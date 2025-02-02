const loading = () => {
  return (
    <div
      className="flex h-full items-center justify-center"
      aria-label="読み込み中"
    >
      <div className="h-10 w-10 animate-spin rounded-full border-4 border-green-500 border-t-transparent"></div>
    </div>
  );
};

export default loading;
